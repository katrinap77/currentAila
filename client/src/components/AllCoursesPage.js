import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllCoursesPage.css";
import "./SingleCoursePage";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/courses`);
      const course = await response.json();
      setCourses(course);
      console.log(course);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="courses-title">Courses</h2>
      <ul>
        {courses.map((course) => {
          return (
            <li key={course.id} className="courses-list">
              <br />
              <div className="course-container">
                <div>
                  <img
                    src={course.image}
                    alt={course.description}
                    className="course-image"
                  />
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <p>{course.price}</p>
                </div>
                <Link to={`/${course.id}`} className="btn">
                  <button>View course</button>
                </Link>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <a
                  href={course.buylink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Buy course</button>
                </a>
                <br />
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <span>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://buy.stripe.com/test_28o16A5I06Zzbyo5ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button> Buy multiple courses</button>
          </a>
        </span>
      </div>
      <br />
    </>
  );
};

export default AllCoursesPage;
