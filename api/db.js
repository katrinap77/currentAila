const { Pool } = require("pg");

const pool = new Pool({
  host: "connectionstring",
  // host: "postgres://postgres:password@db:5432/postgres",
  user: "postgres",
  password: "password",
  database: "postgres",
  port: "5432",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    pool.end();
  },
};

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "password]",
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
// });

// const pool = new Pool({
//   user: process.env."PGUSER",
//   password: process.env."PGPASSWORD",
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
// });

// const { Pool } = require("pg");
// const types = require("pg").types;
// // pg won't cast by default as may lose precision.
// types.setTypeParser(1700, function (val) {
//   return parseFloat(val);
// });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.DATABASE_URL
//     ? {
//         rejectUnauthorized: false,
//       }
//     : false,
// });

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
//   end: () => {
//     pool.end();
//   },
// };

module.exports = pool;
