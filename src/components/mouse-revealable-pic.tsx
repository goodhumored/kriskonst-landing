/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatableObject, createAnimatable } from "animejs";
import React, { useEffect, useRef, useState } from "react";

interface XYPair {
  x: number;
  y: number;
}

// forwardref
export default function MouseRevealablePicture({ className, ref, hiddenImage, area: _area = { x: 200, y: 200 } }: { className?: string, defaultPosition?: XYPair, area?: XYPair | { x: number, y?: number } | { y: number, x?: number }, hiddenImage: string | undefined, ref?: React.Ref<HTMLDivElement> }) {
  const mouseRef = useRef<XYPair>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const imageOffsetRef = useRef<XYPair>({ x: 0, y: 0 });
  const [areaX, setAreaX] = useState(_area.x ? _area.x : _area.y);
  const [areaY, setAreaY] = useState(_area.y ? _area.y : _area.x);

  useEffect(() => {
    const canvas = canvasRef.current;
    const mask = maskRef.current;
    if (!canvas || !mask) return;

    let animatableMouse: AnimatableObject;

    const ensureAnimatableMouse = () => {
      if (!animatableMouse) {
        mouseRef.current.x = canvas.clientWidth * 58 / 100;
        mouseRef.current.y = canvas.clientHeight * 5 / 11;
        animatableMouse = createAnimatable(mouseRef.current, {
          x: canvas.clientWidth * 58 / 100,
          y: canvas.clientHeight * 5 / 11,
          ease: 'out(5)',
          duration: 1000
        });
        (animatableMouse.animations as any)['x'].onRender = () => {
          if (!animatableMouse['x'] || !animatableMouse['y'] || !mask) return;
          const image = mask.children[0] as HTMLImageElement;
          if (!image) return;
          const x = animatableMouse['x']() as number;
          const y = animatableMouse['y']() as number;
          // console.log('areaX, areaY:', areaX, areaY);
          mask.style.transform = `translate3d(${(x - areaX! / 2)}px, ${(y - areaY! / 2)}px, 0)`;
          image.style.transform = `translate3d(${(areaX! / 2 - x)}px, ${(areaY! / 2 - y)}px, 0)`;
        };

      }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const newX = (e.clientX - rect.left);
      const newY = (e.clientY - rect.top);
      // console.log('Mouse move:', newX, newY);

      console.log('e', e)
      // console.log('areaX, areaY:', areaX, areaY);
      ensureAnimatableMouse();
      if (!animatableMouse['x'] || !animatableMouse['y']) return;

      animatableMouse['x'](newX)
      animatableMouse['y'](newY)
    }

    const handleMouseLeave = () => {
      ensureAnimatableMouse();
      if (!animatableMouse['x'] || !animatableMouse['y']) return;
      animatableMouse['x'](canvas.clientWidth * 58 / 100)
      animatableMouse['y'](canvas.clientHeight * 5 / 11)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const touch = e.touches[0];
      const newX = (touch.clientX - rect.left);
      const newY = (touch.clientY - rect.top);
      ensureAnimatableMouse();
      if (!animatableMouse['x'] || !animatableMouse['y']) return;
      animatableMouse['x'](newX)
      animatableMouse['y'](newY)
    }

    const resizeHandler = () => {
      const { x: maskX, y: maskY } = mask.getBoundingClientRect();
      const { x: canvasX, y: canvasY, width: canvasWidth, height: canvasHeight } = canvas.getBoundingClientRect();
      let newAreaX = _area.x && _area.x < 1 ? canvasWidth * _area.x : _area.x;
      const newAreaY = _area.y ? (_area.y < 1 ? canvasHeight * _area.y : _area.y) : newAreaX;
      if (!newAreaX) newAreaX = newAreaY;
      // console.log('newArea:', newAreaX, newAreaY);
      setAreaX(newAreaX);
      setAreaY(newAreaY);
      // console.log('area:', areaX, areaY);
      imageOffsetRef.current = { x: maskX - canvasX, y: maskY - canvasY };

      const image = mask.children[0] as HTMLImageElement;
      image.style.width = `${(canvas.clientWidth as number)}px`;
      image.style.height = `${(canvas.clientHeight as number)}px`;
      handleMouseLeave()
    }
    // console.log('Adding event listeners');
    canvas.addEventListener('mousemove', handleMouseMove as any);
    canvas.addEventListener('mouseleave', handleMouseLeave as any);
    window.addEventListener('resize', resizeHandler);
    canvas.addEventListener('touchmove', handleTouchMove as any, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave as any);
    resizeHandler();
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove as any);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeHandler);
      canvas.removeEventListener('touchmove', handleTouchMove as any);
      canvas.removeEventListener('touchend', handleMouseLeave);
    };
  }, [_area.x, _area.y, areaX, areaY]);

  return (
    <div ref={ref} className={`absolute top-0 left-0 bottom-0 right-0 `} >
      <div ref={canvasRef} className="relative w-full h-full">
        <div ref={maskRef} className={`absolute pointer-events-none overflow-hidden ${className}`}
          style={{
            width: areaX,
            height: areaY,
          }}>
          <img className="max-w-none max-h-none object-cover pointer-events-none select-none" src={hiddenImage} alt="" />
        </div>
      </div>
    </div>
  )
}
