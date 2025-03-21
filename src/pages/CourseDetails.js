// "use client";

// import { useState } from "react";
// import "../styles/coursedetails.css";
// import course from "../assets/images/defaualt-img.webp";

// function CourseDetails() {
//   const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner

//   const handleWeekChange = (week) => {
//     setActiveWeek(week);
//   };

//   const renderAccordion = (category) => (
//     <div className="accordion mt-md-4 mt-3" id={`accordion-${category}`}>
//       {["Resources", "Notes", "Knowledge"].map((title, index) => (
//         <div className="accordion-item" key={index}>
//           <h2 className="accordion-header" id={`heading-${category}-${index}`}>
//             <button
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target={`#collapse-${category}-${index}`}
//               aria-expanded="true"
//               aria-controls={`collapse-${category}-${index}`}
//             >
//               {category} - {title}
//             </button>
//           </h2>
//           <div
//             id={`collapse-${category}-${index}`}
//             className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
//             aria-labelledby={`heading-${category}-${index}`}
//             data-bs-parent={`#accordion-${category}`}
//           >
//             <div className="accordion-body">
//               <div className="row">
//                 {["Reading List", "Notes", "Knowledge"].map((subTitle, subIndex) => (
//                   <div className="col-md-4" key={subIndex}>
//                     <div className="courses-details shadow p-2">
//                       <div className="course-videos">
//                         <img className="obj_fit" src={course} alt="" />
//                       </div>
//                       <div className="courses-details-body">
//                         <h5 className="courses-details-title">{subTitle}</h5>
//                         <p className="courses-details-text">
//                           Relevant information for {subTitle.toLowerCase()}.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-3 col-lg-2 p-0">
//           <div className="sidebar-left-course">
//             <h5 className="mb-0 fw-bold">Wealth Academy</h5>
//           </div>
//           <div className="sidebar-menu">
//             {["Beginner", "Intermediate", "Professional"].map((week) => (
//               <div
//                 key={week}
//                 className={`sidebar-item ${activeWeek === week ? "active" : ""}`}
//                 onClick={() => handleWeekChange(week)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span>{week}</span>
//                   <span className="chevron">›</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </nav>

//         {/* Content */}
//         <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 p-3">
//           {activeWeek === "Beginner" && (
//             <div className="course-content-section">
//               <h2>Beginner - Introduction to Wealth Management</h2>
//               {renderAccordion("Beginner")}
//             </div>
//           )}

//           {activeWeek === "Intermediate" && (
//             <div className="content-section">
//               <h2>Intermediate - Risk Management</h2>
//               {renderAccordion("Intermediate")}
//             </div>
//           )}

//           {activeWeek === "Professional" && (
//             <div className="content-section">
//               <h2>Professional - Investment Strategies</h2>
//               {renderAccordion("Professional")}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;


// ////////////////

"use client";

import { useState } from "react";
import "../styles/coursedetails.css";
import beginnerImage from "../assets/images/beginar.png";
import intermediateImage from "../assets/images/intermidate.png";
import professionalImage from "../assets/images/professional.png";

function CourseDetails() {
  const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner

  const handleWeekChange = (week) => {
    setActiveWeek(week);
  };

  const renderAccordion = (category, image) => (
    <div className="accordion mt-md-4 mt-3" id={`accordion-${category}`}>
      {["Resources", "Notes", "Knowledge"].map((title, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading-${category}-${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${category}-${index}`}
              aria-expanded="true"
              aria-controls={`collapse-${category}-${index}`}
            >
              {category} - {title}
            </button>
          </h2>
          <div
            id={`collapse-${category}-${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading-${category}-${index}`}
            data-bs-parent={`#accordion-${category}`}
          >
            <div className="accordion-body">
              <div className="row">
                {["Reading List", "Notes", "Knowledge"].map((subTitle, subIndex) => (
                  <div className="col-md-4" key={subIndex}>
                    {/* <div className="courses-details shadow p-2">
                      <div className="course-videos">
                        <img className="obj_fit" src={image} alt="" />
                      </div> */}
                      <div className="courses-details shadow p-2">
  <div className="course-videos">
    {category === "Beginner" && index === 0 ? (
      <video controls width="100%">
        <source src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/valourwealth.mp4" type="video/mp4" />
      </video>
    ) : (
      <img className="obj_fit" src={image} alt="" />
    )}
  </div>

                      <div className="courses-details-body">
                        <h5 className="courses-details-title">{subTitle}</h5>
                        <p className="courses-details-text">
                          Relevant information for {subTitle.toLowerCase()}.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 p-0">
          <div className="sidebar-left-course">
            <h5 className="mb-0 fw-bold">Wealth Academy</h5>
          </div>
          <div className="sidebar-menu">
            {["Beginner", "Intermediate", "Professional"].map((week) => (
              <div
                key={week}
                className={`sidebar-item ${activeWeek === week ? "active" : ""}`}
                onClick={() => handleWeekChange(week)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>{week}</span>
                  <span className="chevron">›</span>
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Content */}
        <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 p-3">
          {activeWeek === "Beginner" && (
            <div className="course-content-section">
              <h2>Beginner - Introduction to Wealth Management</h2>
              {renderAccordion("Beginner", beginnerImage)}
            </div>
          )}

          {activeWeek === "Intermediate" && (
            <div className="content-section">
              <h2>Intermediate - Risk Management</h2>
              {renderAccordion("Intermediate", intermediateImage)}
            </div>
          )}

          {activeWeek === "Professional" && (
            <div className="content-section">
              <h2>Professional - Investment Strategies</h2>
              {renderAccordion("Professional", professionalImage)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default CourseDetails;















// CourseDetails.jsx

// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/coursedetails.css";
// import course from "../assets/images/defaualt-img.webp";

// const API_URL = process.env.REACT_APP_API_URL;

// function CourseDetails() {
//   const [activeWeek, setActiveWeek] = useState("Beginner");
//   const [levels, setLevels] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [selectedLevelId, setSelectedLevelId] = useState(null);

//   useEffect(() => {
//     const fetchCourseLevels = async () => {
//       try {
//         const courseId = 1; // Replace with the dynamic course ID as needed
//         const response = await axios.get(`${API_URL}/api/courses/${courseId}/levels/`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setLevels(response.data);
//       } catch (error) {
//         console.error("Error fetching course levels:", error);
//       }
//     };
//     fetchCourseLevels();
//   }, []);

//   useEffect(() => {
//     if (selectedLevelId) {
//       const fetchLevelVideos = async () => {
//         try {
//           const response = await axios.get(`${API_URL}/api/levels/${selectedLevelId}/videos/`, {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//           });
//           setVideos(response.data);
//         } catch (error) {
//           console.error("Error fetching videos:", error);
//         }
//       };
//       fetchLevelVideos();
//     }
//   }, [selectedLevelId]);

//   const handleWeekChange = (week, levelId) => {
//     setActiveWeek(week);
//     setSelectedLevelId(levelId);
//   };

//   const renderAccordion = () => (
//     <div className="accordion mt-md-4 mt-3">
//       {videos.map((video, index) => (
//         <div className="accordion-item" key={index}>
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target={`#collapse-${index}`}
//               aria-expanded="true"
//               aria-controls={`collapse-${index}`}
//             >
//               {video.title} {video.is_locked && "(Locked)"}
//             </button>
//           </h2>
//           <div
//             id={`collapse-${index}`}
//             className="accordion-collapse collapse show"
//           >
//             <div className="accordion-body">
//               <div className="courses-details shadow p-2">
//                 <div className="course-videos">
//                   <img className="obj_fit" src={course} alt="" />
//                 </div>
//                 <div className="courses-details-body">
//                   <h5 className="courses-details-title">{video.title}</h5>
//                   <p className="courses-details-text">{video.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <nav className="col-md-3 col-lg-2 p-0">
//           <div className="sidebar-left-course">
//             <h5 className="mb-0 fw-bold">Wealth Academy</h5>
//           </div>
//           <div className="sidebar-menu">
//             {levels.map((level) => (
//               <div
//                 key={level.id}
//                 className={`sidebar-item ${activeWeek === level.name ? "active" : ""}`}
//                 onClick={() => handleWeekChange(level.name, level.id)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span>{level.name}</span>
//                   <span className="chevron">›</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </nav>

//         <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 p-3">
//           <div className="course-content-section">
//             {renderAccordion()}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;
