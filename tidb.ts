import { Client } from "./mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "test",
  port: 4000,
  password: "",
});

const result = await client.query(`show databases`);
console.log(result);