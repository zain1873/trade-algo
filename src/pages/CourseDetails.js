// // // "use client";

// // // import { useState } from "react";
// // // import "../styles/coursedetails.css";
// // // import course from "../assets/images/defaualt-img.webp";

// // // function CourseDetails() {
// // //   const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner

// // //   const handleWeekChange = (week) => {
// // //     setActiveWeek(week);
// // //   };

// // //   const renderAccordion = (category) => (
// // //     <div className="accordion mt-md-4 mt-3" id={`accordion-${category}`}>
// // //       {["Resources", "Notes", "Knowledge"].map((title, index) => (
// // //         <div className="accordion-item" key={index}>
// // //           <h2 className="accordion-header" id={`heading-${category}-${index}`}>
// // //             <button
// // //               className="accordion-button"
// // //               type="button"
// // //               data-bs-toggle="collapse"
// // //               data-bs-target={`#collapse-${category}-${index}`}
// // //               aria-expanded="true"
// // //               aria-controls={`collapse-${category}-${index}`}
// // //             >
// // //               {category} - {title}
// // //             </button>
// // //           </h2>
// // //           <div
// // //             id={`collapse-${category}-${index}`}
// // //             className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
// // //             aria-labelledby={`heading-${category}-${index}`}
// // //             data-bs-parent={`#accordion-${category}`}
// // //           >
// // //             <div className="accordion-body">
// // //               <div className="row">
// // //                 {["Reading List", "Notes", "Knowledge"].map((subTitle, subIndex) => (
// // //                   <div className="col-md-4" key={subIndex}>
// // //                     <div className="courses-details shadow p-2">
// // //                       <div className="course-videos">
// // //                         <img className="obj_fit" src={course} alt="" />
// // //                       </div>
// // //                       <div className="courses-details-body">
// // //                         <h5 className="courses-details-title">{subTitle}</h5>
// // //                         <p className="courses-details-text">
// // //                           Relevant information for {subTitle.toLowerCase()}.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="container-fluid">
// // //       <div className="row">
// // //         {/* Sidebar */}
// // //         <nav className="col-md-3 col-lg-2 p-0">
// // //           <div className="sidebar-left-course">
// // //             <h5 className="mb-0 fw-bold">Wealth Academy</h5>
// // //           </div>
// // //           <div className="sidebar-menu">
// // //             {["Beginner", "Intermediate", "Professional"].map((week) => (
// // //               <div
// // //                 key={week}
// // //                 className={`sidebar-item ${activeWeek === week ? "active" : ""}`}
// // //                 onClick={() => handleWeekChange(week)}
// // //                 style={{ cursor: "pointer" }}
// // //               >
// // //                 <div className="d-flex justify-content-between align-items-center">
// // //                   <span>{week}</span>
// // //                   <span className="chevron">›</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </nav>

// // //         {/* Content */}
// // //         <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 p-3">
// // //           {activeWeek === "Beginner" && (
// // //             <div className="course-content-section">
// // //               <h2>Beginner - Introduction to Wealth Management</h2>
// // //               {renderAccordion("Beginner")}
// // //             </div>
// // //           )}

// // //           {activeWeek === "Intermediate" && (
// // //             <div className="content-section">
// // //               <h2>Intermediate - Risk Management</h2>
// // //               {renderAccordion("Intermediate")}
// // //             </div>
// // //           )}

// // //           {activeWeek === "Professional" && (
// // //             <div className="content-section">
// // //               <h2>Professional - Investment Strategies</h2>
// // //               {renderAccordion("Professional")}
// // //             </div>
// // //           )}
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default CourseDetails;


// // // ////////////////

// // "use client";

// // import { useState } from "react";
// // import "../styles/coursedetails.css";
// // import beginnerImage from "../assets/images/beginar.png";
// // import intermediateImage from "../assets/images/intermidate.png";
// // import professionalImage from "../assets/images/professional.png";

// // function CourseDetails() {
// //   const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner

// //   const handleWeekChange = (week) => {
// //     setActiveWeek(week);
// //   };

// //   const renderAccordion = (category, image) => (
// //     <div className="accordion mt-md-4 mt-3" id={`accordion-${category}`}>
// //       {["Resources", "Notes", "Knowledge"].map((title, index) => (
// //         <div className="accordion-item" key={index}>
// //           <h2 className="accordion-header" id={`heading-${category}-${index}`}>
// //             <button
// //               className="accordion-button"
// //               type="button"
// //               data-bs-toggle="collapse"
// //               data-bs-target={`#collapse-${category}-${index}`}
// //               aria-expanded="true"
// //               aria-controls={`collapse-${category}-${index}`}
// //             >
// //               {category} - {title}
// //             </button>
// //           </h2>
// //           <div
// //             id={`collapse-${category}-${index}`}
// //             className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
// //             aria-labelledby={`heading-${category}-${index}`}
// //             data-bs-parent={`#accordion-${category}`}
// //           >
// //             <div className="accordion-body">
// //               <div className="row">
// //                 {["Reading List", "Notes", "Knowledge"].map((subTitle, subIndex) => (
// //                   <div className="col-md-4" key={subIndex}>
// //                     <div className="courses-details shadow p-2">
// //                       <div className="course-videos">
// //                         <img className="obj_fit" src={image} alt="" />
// //                       </div>
// //                       <div className="courses-details-body">
// //                         <h5 className="courses-details-title">{subTitle}</h5>
// //                         <p className="courses-details-text">
// //                           Relevant information for {subTitle.toLowerCase()}.
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   return (
// //     <div className="container-fluid">
// //       <div className="row">
// //         {/* Sidebar */}
// //         <nav className="col-md-3 col-lg-2 p-0">
// //           <div className="sidebar-left-course">
// //             <h5 className="mb-0 fw-bold">Wealth Academy</h5>
// //           </div>
// //           <div className="sidebar-menu">
// //             {["Beginner", "Intermediate", "Professional"].map((week) => (
// //               <div
// //                 key={week}
// //                 className={`sidebar-item ${activeWeek === week ? "active" : ""}`}
// //                 onClick={() => handleWeekChange(week)}
// //                 style={{ cursor: "pointer" }}
// //               >
// //                 <div className="d-flex justify-content-between align-items-center">
// //                   <span>{week}</span>
// //                   <span className="chevron">›</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </nav>

// //         {/* Content */}
// //         <main className="col-md-9 col-lg-10 ms-sm-auto px-md-4 p-3">
// //           {activeWeek === "Beginner" && (
// //             <div className="course-content-section">
// //               <h2>Beginner - Introduction to Wealth Management</h2>
// //               {renderAccordion("Beginner", beginnerImage)}
// //             </div>
// //           )}

// //           {activeWeek === "Intermediate" && (
// //             <div className="content-section">
// //               <h2>Intermediate - Risk Management</h2>
// //               {renderAccordion("Intermediate", intermediateImage)}
// //             </div>
// //           )}

// //           {activeWeek === "Professional" && (
// //             <div className="content-section">
// //               <h2>Professional - Investment Strategies</h2>
// //               {renderAccordion("Professional", professionalImage)}
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CourseDetails;


// // this code is working ==============
//  "use client";

// import { useState } from "react";
// import "../styles/coursedetails.css";
// import beginnerImage from "../assets/images/beginar.png";
// import intermediateImage from "../assets/images/intermidate.png";
// import professionalImage from "../assets/images/professional.png";

// function CourseDetails() {
//   const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner

//   const handleWeekChange = (week) => {
//     setActiveWeek(week);
//   };

//   const renderAccordion = (category, image) => (
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
//                 {/* Render video only for first 'Resources' under Beginner */}
//                 {category === "Beginner" && index === 0 ? (
//                   <div className="col-md-12">
//                     <div className="courses-details shadow p-2">
//                       <div className="course-videos">
//                         <video
//                           controls
//                           autoPlay
//                           muted
//                           width="100%"
//                           onError={(e) => console.log("Video Error:", e)}
//                         >
//                           <source
//                             src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/valourwealth.mp4"
//                             type="video/mp4"
//                           />
//                           Your browser does not support the video tag.
//                         </video>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   // Render Notes & Knowledge normally
//                   ["Notes", "Knowledge"].map((subTitle, subIndex) => (
//                     <div className="col-md-4" key={subIndex}>
//                       <div className="courses-details shadow p-2">
//                         <div className="course-videos">
//                           <img className="obj_fit" src={image} alt="" />
//                         </div>
//                         <div className="courses-details-body">
//                           <h5 className="courses-details-title">{subTitle}</h5>
//                           <p className="courses-details-text">
//                             Relevant information for {subTitle.toLowerCase()}.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
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
//               {renderAccordion("Beginner", beginnerImage)}
//             </div>
//           )}

//           {activeWeek === "Intermediate" && (
//             <div className="content-section">
//               <h2>Intermediate - Risk Management</h2>
//               {renderAccordion("Intermediate", intermediateImage)}
//             </div>
//           )}

//           {activeWeek === "Professional" && (
//             <div className="content-section">
//               <h2>Professional - Investment Strategies</h2>
//               {renderAccordion("Professional", professionalImage)}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default CourseDetails;



// /===========


"use client";

import { useState } from "react";
import "../styles/coursedetails.css";
import beginnerImage from "../assets/images/beginar.png";
import intermediateImage from "../assets/images/intermidate.png";
import professionalImage from "../assets/images/professional.png";

function CourseDetails() {
  const [activeWeek, setActiveWeek] = useState("Beginner"); // Default is Beginner
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleWeekChange = (week) => {
    setActiveWeek(week);
  };

  const handleVideoClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
                {/* Render clickable video only for first 'Resources' under Beginner */}
                {category === "Beginner" && index === 0 ? (
                  <div className="col-md-12">
                    <div className="courses-details shadow p-2">
                      <div className="course-videos" onClick={handleVideoClick} style={{ cursor: "pointer" }}>
                        <img
                          className="obj_fit"
                          src="https://img.icons8.com/ios/50/000000/play-button-circled--v1.png"
                          alt="Play Video"
                        />
                      </div>
                      <div className="courses-details-body">
                        <h5 className="courses-details-title">Resources</h5>
                        <p className="courses-details-text">Click to watch the video.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Render Notes & Knowledge normally
                  ["Notes", "Knowledge"].map((subTitle, subIndex) => (
                    <div className="col-md-4" key={subIndex}>
                      <div className="courses-details shadow p-2">
                        <div className="course-videos">
                          <img className="obj_fit" src={image} alt="" />
                        </div>
                        <div className="courses-details-body">
                          <h5 className="courses-details-title">{subTitle}</h5>
                          <p className="courses-details-text">
                            Relevant information for {subTitle.toLowerCase()}.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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

      {/* Video Popup */}
      {showPopup && (
        <div className="video-popup">
          <div className="video-popup-content">
            <span className="close-popup" onClick={closePopup}>&times;</span>
            <video controls autoPlay width="80%">
              <source src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/valourwealth.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;
