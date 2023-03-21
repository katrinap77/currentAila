const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/courses", async (req, res, next) => {
  try {
    const courses = await pool.query(
      `SELECT name, description, price, image, buylink FROM courses WHERE status ='active'`
    );
    return res.status(200).json(courses.rows);
  } catch (err) {
    next(err);
  }
});

app.get("/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await pool.query("SELECT * FROM courses WHERE id = $1", [
      id,
    ]);
    if (course.rows[0] === undefined) {
      res.sendStatus(404);
    } else {
      res.json(course.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// app.get("/courses", async (req, res, next) => {
//   try {
//     const courses = await pool.query(`SELECT * FROM courses`);
//     res.json(courses.rows);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = app;
