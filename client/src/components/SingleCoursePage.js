import "./AllCoursesPage.css";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import AllCoursesPage from "./AllCoursesPage.css";

const SingleCoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("http://localhost:5001/courses");
      const response = await fetch(
        "https://my-json-server.typicode.com/katrinap77/jsoncourses/courses"
      );
      const course = await response.json();
      setCourses(course);
      console.log(course);
    };

    fetchData();
  }, []);

  // const product = products.find((item) => {
  //   return item.id === parseInt(id);
  // });

  // const { image, name, description, price, buylink } = course;

  return (
    <>
      <AllCoursesPage courses={courses} className="" />
    </>
  );
};
export default SingleCoursePage;

// {/* <ul>
//   <li>
//     <div className="hidden">{id}</div>
//     <br />
//     <div className="course-container">
//       <div>
//         <img src={image} alt={description} className="course-image" />
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <p>{price}</p>
//       </div>
//       <button> View course</button>
//       <span>&nbsp;&nbsp;</span>
//       <Link
//         to={buylink}
//         // 'https://www.buy.stripe.com/test_cN2eXq7Q81FfeKAcMN'
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button> Buy course</button>
//       </Link>

//       <br />
//     </div>
//   </li>
// </ul> */}
