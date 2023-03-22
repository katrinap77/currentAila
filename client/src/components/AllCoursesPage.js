import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllCoursesPage.css";
import "./SingleCoursePage";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("http://localhost:5001/courses");
      const response = await fetch(
        // "https://my-json-server.typicode.com/katrinap77/jsoncourses/courses",
        "https://api-bfxv.onrender.com/courses",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
                <Link to={`/course/${course.id}`} className="btn">
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

// import React, { useContext } from "react";
// import { CoursesContext } from "./CoursesContext";
// // import Course from "./Course";
// import { Link } from "react-router-dom";

// const AllCoursesPage = () => {
//   const { courses } = useContext(CoursesContext);

//   return (
//     <div>
//       <section className="">
//         <div className="">
//           <div className="">
//             {courses.map((course) => {
//               return (
//                 <>
//                   <h2 className="courses-title">Courses</h2>
//                   <ul>
//                     <li className="courses-list">
//                       <br />
//                       <div className="course-container">
//                         <div>
//                           <img
//                             src={course.image}
//                             alt={course.description}
//                             className="course-image"
//                           />
//                           <h3>{course.name}</h3>
//                           <p>{course.description}</p>
//                           <p>{course.price}</p>
//                         </div>
//                         <Link to={`/course/${course.id}`} className="btn">
//                           <button>View course</button>
//                         </Link>
//                         <span>&nbsp;&nbsp;&nbsp;</span>
//                         <a
//                           href={course.buylink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <button>Buy course</button>
//                         </a>
//                         <br />
//                       </div>
//                     </li>
//                   </ul>
//                   <div>
//                     <span>
//                       &nbsp;&nbsp;&nbsp;
//                       <a
//                         href="https://buy.stripe.com/test_28o16A5I06Zzbyo5ko"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <button> Buy multiple courses</button>
//                       </a>
//                     </span>
//                   </div>
//                   <br />
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AllCoursesPage;

//   /* return <Course course={course} key={course.id} />; */
