import { knex } from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "seeruser",
    password: "seerpassword",
    database: "seerdb"
  }
});
