import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./AllCoursesPage.css";

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

  // const stripeUrl = "https://www.buy.stripe.com/";
  // console.log(buyLink);

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
                {/* <Link to={"/Course"} className="btn"> */}
                <button> View course</button>
                {/* </Link> */}
                <span>&nbsp;&nbsp;&nbsp;</span>
                <a
                  href={course.buylink}
                  // href={"https://www.buy.stripe.com/" + course.buylink}
                  // 'https://www.buy.stripe.com/test_cN2eXq7Q81FfeKAcMN'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button> Buy course</button>
                </a>

                {/* <Link
                  to={"https://buy.stripe.com/" + course.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button> Buy course</button>
                </Link> */}
                {/* <Link
                  to={"http://www.facebook.com/" + user.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                /> */}

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
