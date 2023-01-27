const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hacktiv-cafe",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 100,
});

module.exports = pool;
