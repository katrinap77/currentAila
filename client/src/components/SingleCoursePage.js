import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AllCoursesPage.css";

const SingleCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("http://localhost:5001/courses/${id}");
      const response = await fetch(
        `https://api-bfxv.onrender.com/courses/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          header: JSON.stringify(course),
        }
      );
      const data = await response.json();
      setCourse(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div>
      <ul>
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
            <a href={course.buylink} target="_blank" rel="noopener noreferrer">
              <button>Buy course</button>
            </a>
            <br />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SingleCoursePage;
