import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllCoursesPage from "./components/AllCoursesPage";
import SingleCoursePage from "./components/SingleCoursePage";

const App = () => {
  return (
    <>
      <div>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<AllCoursesPage />} />
            <Route path="course/:id" element={<SingleCoursePage />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
};

export default App;
