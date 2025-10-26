import * as dotenv from "dotenv";

dotenv.config();

export default function getConfig() {
  return {
    baseUrl: "https://kriskonst.com",
    debug: process.env["DEBUG"],
  };
}
