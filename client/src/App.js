// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import NotFound from "./components/NotFound";
// import SingleCoursePage from "./components/SingleCoursePage";
// import AllCoursesPage from "./components/AllCoursesPage";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <div className="container">
//         <Routes>
//           <Route path="/courses/:id" element={<SingleCoursePage />} />
//           <Route exact path="/courses" element={<AllCoursesPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;

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
            <Route path="/courses/:id" element={<SingleCoursePage />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
};

export default App;
