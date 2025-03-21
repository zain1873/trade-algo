// import React from 'react'
// import "./styles/liveSessions.css";  
// import stream_img from "./images/course-card-img.jpg"; 
// import { Link } from "react-router-dom";

// function Course() {
//   return (
//      <div className="container mt-4">
//       <h4 className="section-title mb-3">Courses</h4>
//       <div className="row">

//         {/* Single Card */}
//         <div className="col-lg-4 col-md-6 mb-4">
//           <div className="card stream_cards shadow-sm">
//             <img src={stream_img} alt="Live Session" className="card-img-top" />
//             <div className="course-card">
//               <h4 className="course-title">
//                 The Complete FOREX Scalping Trading Course
//               </h4>
//               <p className="course-desc">
//                 What you'll learn Introduction to Forex Scalping Trading Which
//                 timeframe's we use Scalping Trading in the forex market. You’re
//                 going to learn my favorite...
//               </p>
//               <Link to="/course-details" className="theme_btn">View Details</Link>
//               </div>
//           </div>
//         </div> 

//       </div>
//     </div>
// )
// }

// export default Course








import React, { useState, useEffect } from 'react';
import "./styles/liveSessions.css";
import stream_img from "./images/course-card-img.jpg";
import { Link } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_URL;

function Course() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/courses/`) // Updated API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="section-title mb-3">Courses</h4>
      {error && <p className="error-message">{error}</p>}
      <div className="row">
        {courses.length === 0 ? (
          <p>No courses available at the moment.</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card stream_cards shadow-sm">
                <img
                  src={course.thumbnail ? `${API_BASE_URL}${course.thumbnail}` : stream_img}
                  alt="Course Thumbnail"
                  className="card-img-top"
                />
                <div className="course-card">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-desc">{course.description.substring(0, 150)}...</p>
                  <Link to={`/course-detail/${course.id}`} className="theme_btn">View Details</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Course;
