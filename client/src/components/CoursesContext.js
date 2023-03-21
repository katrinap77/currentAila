import React, { createContext, useState, useEffect } from "react";

export const CoursesContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/katrinap77/jsoncourses/courses"
      );
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ courses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CourseProvider;
