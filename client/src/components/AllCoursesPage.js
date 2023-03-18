import React, { useState, useEffect } from "react";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/courses");
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
            <li key={course.i} className="courses-list">
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
                <br />
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <a
          href="https://buy.stripe.com/test_28o16A5I06Zzbyo5ko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button> Enrol in courses now</button>
        </a>
      </div>
    </>
  );
};

export default AllCoursesPage;
