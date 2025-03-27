// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import '../styles/academy.css';
// // import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal } from "react-icons/fa";
// // import videoImg from '../assets/images/crypto-latest.png';

// // import ProgressBarsDisplay from '../components/DashboardSidebarComp/ProgressBar';

// // const ValourAcademy = () => {
// //   const { courseId } = useParams();
// //   const [activeSection, setActiveSection] = useState(null);
// //   const [selectedLevel, setSelectedLevel] = useState('beginner');
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [videoUrl, setVideoUrl] = useState(null);
// //   const [courseData, setCourseData] = useState(null);
// //   const [progressData, setProgressData] = useState({
// //     totalProgress: 0,
// //     levelProgress: 0,
// //     videoProgress: 0,
// //   });

// //   const openPopup = (url) => {
// //     setVideoUrl(url);
// //     setShowPopup(true);
// //   };
// //   const closePopup = () => setShowPopup(false);

// //   const toggleSection = (section) => {
// //     setActiveSection(activeSection === section ? null : section);
// //   };

// //   useEffect(() => {
// //     const fetchCourseDetails = async () => {
// //       try {
// //         const token = localStorage.getItem("accessToken");
// //         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         });

// //         const data = await res.json();
// //         setCourseData(data);
// //       } catch (error) {
// //         console.error("Error fetching course data:", error);
// //       }
// //     };

// //     fetchCourseDetails();
// //   }, [courseId]);

// //   useEffect(() => {
// //     const fetchProgress = async () => {
// //       const token = localStorage.getItem("accessToken");
// //       const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       const data = await res.json();
// //       const currentLevel = data.levels.find(lvl => lvl.level.toLowerCase() === selectedLevel);
// //       setProgressData({
// //         totalProgress: data.total_progress,
// //         levelProgress: currentLevel?.percent || 0,
// //         videoProgress: currentLevel?.percent || 0,
// //       });
// //     };

// //     if (courseId) {
// //       fetchProgress();
// //     }
// //   }, [courseId, selectedLevel]);

// //   const getVideosForLevel = (levelName) => {
// //     if (!courseData) return [];
// //     const level = courseData.levels.find((lvl) => lvl.level.toLowerCase() === levelName);
// //     return level ? level.videos : [];
// //   };

// //   const renderVideos = () => {
// //     const videos = getVideosForLevel(selectedLevel);
// //     return (
// //       <div className="container">
// //         <div className="row">
// //           {videos.map((video) => (
// //             <div key={video.id} className="col-lg-4 col-md-6 mb-4">
// //               <div className="video-card">
// //                 <div className="video-thumbnail" style={{ position: "relative" }}>
// //                   {!videoUrl || videoUrl !== video.public_url ? (
// //                     <>
// //                       <img className="obj_fit" src={videoImg} alt={video.title} />
// //                       <button
// //                         onClick={() => setVideoUrl(video.public_url)}
// //                         className="play-button-overlay"
// //                       >
// //                         ▶
// //                       </button>
// //                     </>
// //                   ) : (
// //                     <video 
// //                       controls 
// //                       autoPlay 
// //                       className="w-100 rounded"
// //                       controlsList="nodownload"
// //                       onContextMenu={(e) => e.preventDefault()}
// //                     >
// //                       <source src={video.public_url} type="video/mp4" />
// //                     </video>
// //                   )}
// //                 </div>
// //                 <div className="video-info">
// //                   <h5 className="video-title">{video.title}</h5>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const renderNotes = () => (
// //     <div className="container">
// //       <div className="row">
// //         <div className="col-md-12 text-white">
// //           <p>This section will display course-related notes for the selected level.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderKnowledge = () => (
// //     <div className="container">
// //       <div className="row">
// //         <div className="col-md-12 text-white">
// //           <p>This section will display MCQs or quizzes for the selected level.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="valour-container">
// //       <div className="valour-header">
// //         <div className="header-brand">Valour Academy</div>
// //         <div className="header-login">
// //           <button className="theme_btn">Username</button>
// //         </div>
// //       </div>

// //       <div className="valour-main">
// //         <div className="valour-sidebar">
// //           <div className="sidebar-section">
// //             <div className="sidebar-heading">COURSE LEVELS</div>
// //             <div className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`} onClick={() => setSelectedLevel('beginner')}><span>Beginner</span><i className={`arrow-icon ${selectedLevel === 'beginner' ? 'down' : 'right'}`}></i></div>
// //             <div className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`} onClick={() => setSelectedLevel('intermediate')}><span>Intermediate</span><i className={`arrow-icon ${selectedLevel === 'intermediate' ? 'down' : 'right'}`}></i></div>
// //             <div className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`} onClick={() => setSelectedLevel('professional')}><span>Professional</span><i className={`arrow-icon ${selectedLevel === 'professional' ? 'down' : 'right'}`}></i></div>
// //           </div>
// //         </div>

// //         <div className="valour-content p-0">
// //           {courseData && (
// //             <div className='main_module'>
// //               <div className="content-breadcrumb">
// //                 <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</span>
// //                 <span className="separator">›</span>
// //                 <span>Module 1</span>
// //               </div>
// //               <h1 className="content-title">{courseData.title}</h1>
// //               <p className="content-description">{courseData.description}</p>
// //               <div className="content-info">
// //                 <div className="lesson-count">
// //                   <FaBookReader className="accordion-icon resources" />
// //                   <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
// //                 </div>
// //                 <div className="level-badge">
// //                   <FaSignal className="accordion-icon resources" />
// //                   <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level</span>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           <div className="accordion-container">
// //             <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
// //               <div className="accordion-header" onClick={() => toggleSection('resources')}>
// //                 <div className="accordion-title">
// //                   <FaBookOpen className="accordion-icon resources" />
// //                   <span>Resources</span>
// //                 </div>
// //                 <i className={`arrow-icon ${activeSection === 'resources' ? 'up' : 'down'}`}></i>
// //               </div>
// //               {activeSection === 'resources' && (
// //                 <div className="accordion-content">{renderVideos()}</div>
// //               )}
// //             </div>

// //             <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
// //               <div className="accordion-header" onClick={() => toggleSection('notes')}>
// //                 <div className="accordion-title">
// //                   <FaFileAlt className="accordion-icon resources" />
// //                   <span>Notes</span>
// //                 </div>
// //                 <i className={`arrow-icon ${activeSection === 'notes' ? 'up' : 'down'}`}></i>
// //               </div>
// //               {activeSection === 'notes' && (
// //                 <div className="accordion-content">{renderNotes()}</div>
// //               )}
// //             </div>

// //             <div className={`accordion-item ${activeSection === 'knowledge' ? 'active' : ''}`}>
// //               <div className="accordion-header" onClick={() => toggleSection('knowledge')}>
// //                 <div className="accordion-title">
// //                   <FaLightbulb className="accordion-icon resources" />
// //                   <span>Knowledge</span>
// //                 </div>
// //                 <i className={`arrow-icon ${activeSection === 'knowledge' ? 'up' : 'down'}`}></i>
// //               </div>
// //               {activeSection === 'knowledge' && (
// //                 <div className="accordion-content">{renderKnowledge()}</div>
// //               )}
// //             </div>
// //           </div>

// //           <div className="navigation-controls">
// //             <button className="prev-btn" disabled>Previous Lesson</button>
// //             <button className="next-btn">Next Lesson <i className="arrow-right"></i></button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ValourAcademy;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/academy.css';
// import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal, FaLock } from "react-icons/fa";
// import videoImg from '../assets/images/crypto-latest.png';
// import ProgressBarsDisplay from '../components/DashboardSidebarComp/ProgressBar';

// const ValourAcademy = () => {
//   const { courseId } = useParams();
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState('beginner');
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [courseData, setCourseData] = useState(null);
//   const [progressData, setProgressData] = useState({
//     totalProgress: 0,
//     levelProgress: 0,
//     videoProgress: 0,
//   });
//   const [videoWatched, setVideoWatched] = useState([]);
//   const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);
//     const accessToken = localStorage.getItem("accessToken");
  
//     const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
  
//     const USER_API_URL = `${API_BASE_URL}api/user/`;
    

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         setCourseData(data);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };

    
//     if (!accessToken) {
//       setError("You need to be logged in to view this data.");
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(USER_API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         console.log("User data response:", response.data);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         if (error.response && error.response.status === 401) {
//           setError("Session expired or invalid. Please log in again.");
//           localStorage.removeItem("accessToken");
//         } else {
//           setError("Failed to fetch user data. Please try again later.");
//         }
//       }
//     };

//     fetchUserData();
//     fetchCourseDetails();
//   }, [courseId, accessToken]);

//   useEffect(() => {
//     const fetchProgress = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       const currentLevel = data.levels.find(lvl => lvl.level.toLowerCase() === selectedLevel);
//       setProgressData({
//         totalProgress: data.total_progress,
//         levelProgress: currentLevel?.percent || 0,
//         videoProgress: currentLevel?.percent || 0,
//       });
//       setVideoWatched(currentLevel?.watched_video_ids || []);
//     };

//     if (courseId) {
//       fetchProgress();
//     }
//   }, [courseId, selectedLevel]);

//   const getVideosForLevel = (levelName) => {
//     if (!courseData) return [];
//     const level = courseData.levels.find((lvl) => lvl.level.toLowerCase() === levelName);
//     return level ? level.videos : [];
//   };

//   const renderVideos = () => {
//     const videos = getVideosForLevel(selectedLevel);
//     return (
//       <div className="container">
//         <div className="row">
//           {videos.map((video, index) => {
//             const isUnlocked = index === 0 || videoWatched.includes(videos[index - 1]?.id);
//             return (
//               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
//                 <div className="video-card">
//                   <div className="video-thumbnail" style={{ position: "relative" }}>
//                     {!isUnlocked ? (
//                       <>
//                         <img className="obj_fit" src={videoImg} alt="locked" style={{ filter: "blur(2px)" }} />
//                         <div className="locked-overlay"><FaLock size={24} color="white" /></div>
//                       </>
//                     ) : (
//                       !videoUrl || videoUrl !== video.public_url ? (
//                         <>
//                           <img className="obj_fit" src={videoImg} alt={video.title} />
//                           <button
//                             onClick={() => setVideoUrl(video.public_url)}
//                             className="play-button-overlay"
//                           >
//                             ▶
//                           </button>
//                         </>
//                       ) : (
//                         <video
//                           controls
//                           autoPlay
//                           className="w-100 rounded"
//                           controlsList="nodownload"
//                           onContextMenu={(e) => e.preventDefault()}
//                         >
//                           <source src={video.public_url} type="video/mp4" />
//                         </video>
//                       )
//                     )}
//                   </div>
//                   <div className="video-info">
//                     <h5 className="video-title">{video.title}</h5>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const renderNotes = () => (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 text-white">
//           <p>This section will display course-related notes for the selected level.</p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderKnowledge = () => (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 text-white">
//           <p>This section will display MCQs or quizzes for the selected level.</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="valour-container">
//       <div className="valour-header">
//         <div className="header-brand">Valour Academy</div>
//         <div className="header-login">
//             <h5 className={`mb-0 ${darkMode ? 'text-white' : ''}`}>{userData ? userData.username : 'Null'}</h5>
//         </div>
//       </div>

//       <div className="valour-main">
//         <div className="valour-sidebar">
//           <div className="sidebar-section">
//             <div className="sidebar-heading">COURSE LEVELS</div>
//             <div className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`} onClick={() => setSelectedLevel('beginner')}><span>Beginner</span><i className={`arrow-icon ${selectedLevel === 'beginner' ? 'down' : 'right'}`}></i></div>
//             <div className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`} onClick={() => setSelectedLevel('intermediate')}><span>Intermediate</span><i className={`arrow-icon ${selectedLevel === 'intermediate' ? 'down' : 'right'}`}></i></div>
//             <div className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`} onClick={() => setSelectedLevel('professional')}><span>Professional</span><i className={`arrow-icon ${selectedLevel === 'professional' ? 'down' : 'right'}`}></i></div>
//           </div>
//         </div>

//         <div className="valour-content p-0">
//           {courseData && (
//             <div className='main_module'>
//               <div className="content-breadcrumb">
//                 <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</span>
//                 <span className="separator">›</span>
//                 {/* <span>Module 1</span> */}
//               </div>
//               <h1 className="content-title">{courseData.title}</h1>
//               <p className="content-description">{courseData.description}</p>
//               <div className="content-info">
//                 <div className="lesson-count">
//                   <FaBookReader className="accordion-icon resources" />
//                   <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
//                 </div>
//                 <div className="level-badge">
//                   <FaSignal className="accordion-icon resources" />
//                   <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="accordion-container">
//             <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('resources')}>
//                 <div className="accordion-title">
//                   <FaBookOpen className="accordion-icon resources" />
//                   <span>Resources</span>
//                 </div>
//                 <i className={`arrow-icon ${activeSection === 'resources' ? 'up' : 'down'}`}></i>
//               </div>
//               {activeSection === 'resources' && (
//                 <div className="accordion-content">{renderVideos()}</div>
//               )}
//             </div>

//             <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('notes')}>
//                 <div className="accordion-title">
//                   <FaFileAlt className="accordion-icon resources" />
//                   <span>Notes</span>
//                 </div>
//                 <i className={`arrow-icon ${activeSection === 'notes' ? 'up' : 'down'}`}></i>
//               </div>
//               {activeSection === 'notes' && (
//                 <div className="accordion-content">{renderNotes()}</div>
//               )}
//             </div>

//             <div className={`accordion-item ${activeSection === 'knowledge' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('knowledge')}>
//                 <div className="accordion-title">
//                   <FaLightbulb className="accordion-icon resources" />
//                   <span>Knowledge</span>
//                 </div>
//                 <i className={`arrow-icon ${activeSection === 'knowledge' ? 'up' : 'down'}`}></i>
//               </div>
//               {activeSection === 'knowledge' && (
//                 <div className="accordion-content">{renderKnowledge()}</div>
//               )}
//             </div>
//           </div>

//           {/* <div className="navigation-controls">
//             <button className="prev-btn" disabled>Previous Lesson</button>
//             <button className="next-btn">Next Lesson <i className="arrow-right"></i></button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValourAcademy;

// ==============================================================================================================

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/academy.css';
// import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal, FaLock } from "react-icons/fa";
// import videoImg from '../assets/images/crypto-latest.png';
// import ProgressBarsDisplay from '../components/DashboardSidebarComp/ProgressBar';

// const ValourAcademy = () => {
//   const { courseId } = useParams();
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState('beginner');
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [courseData, setCourseData] = useState(null);
//   const [progressData, setProgressData] = useState({
//     totalProgress: 0,
//     levelProgress: 0,
//     videoProgress: 0,
//   });
//   const [videoWatched, setVideoWatched] = useState([]);
//   const [notes, setNotes] = useState([]);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         setCourseData(data);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   useEffect(() => {
//     const fetchProgress = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       const currentLevel = data.levels.find(lvl => lvl.level.toLowerCase() === selectedLevel);
//       setProgressData({
//         totalProgress: data.total_progress,
//         levelProgress: currentLevel?.percent || 0,
//         videoProgress: currentLevel?.percent || 0,
//       });
//       setVideoWatched(currentLevel?.watched_video_ids || []);
//     };

//     if (courseId) {
//       fetchProgress();
//     }
//   }, [courseId, selectedLevel]);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
  
//         // Get level object by matching selectedLevel name
//         const levelObj = courseData?.levels.find(
//           (lvl) => lvl.level.toLowerCase() === selectedLevel
//         );
  
//         if (!levelObj) return;
  
//         const res = await fetch(
//           `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
  
//         const data = await res.json();
//         setNotes(data);
//       } catch (err) {
//         console.error("Failed to fetch notes:", err);
//       }
//     };
  
//     if (courseData) {
//       fetchNotes();
//     }
//   }, [courseId, selectedLevel, courseData]);
  

//   const getVideosForLevel = (levelName) => {
//     if (!courseData) return [];
//     const level = courseData.levels.find((lvl) => lvl.level.toLowerCase() === levelName);
//     return level ? level.videos : [];
//   };

//   const renderVideos = () => {
//     const videos = getVideosForLevel(selectedLevel);
//     return (
//       <div className="container">
//         <div className="row">
//           {videos.map((video, index) => {
//             const isUnlocked = index === 0 || videoWatched.includes(videos[index - 1]?.id);
//             return (
//               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
//                 <div className="video-card">
//                   <div className="video-thumbnail" style={{ position: "relative" }}>
//                     {!isUnlocked ? (
//                       <>
//                         <img className="obj_fit" src={videoImg} alt="locked" style={{ filter: "blur(2px)" }} />
//                         <div className="locked-overlay"><FaLock size={24} color="white" /></div>
//                       </>
//                     ) : (
//                       !videoUrl || videoUrl !== video.public_url ? (
//                         <>
//                           <img className="obj_fit" src={videoImg} alt={video.title} />
//                           <button
//                             onClick={() => setVideoUrl(video.public_url)}
//                             className="play-button-overlay"
//                           >
//                             ▶
//                           </button>
//                         </>
//                       ) : (
//                         <video
//                           controls
//                           autoPlay
//                           className="w-100 rounded"
//                           controlsList="nodownload"
//                           onContextMenu={(e) => e.preventDefault()}
//                         >
//                           <source src={video.public_url} type="video/mp4" />
//                         </video>
//                       )
//                     )}
//                   </div>
//                   <div className="video-info">
//                     <h5 className="video-title">{video.title}</h5>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const renderNotes = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           {notes.length > 0 ? (
//             notes.map((note) => (
//               <div key={note.id} className="col-md-6 text-white mb-3">
//                 <div className="note-card p-3 bg-dark rounded">
//                   <h5>{note.title}</h5>
//                   <p>{note.content}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-white">
//               <p>No notes found for this level.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  

//   return (
//     <div className="valour-container">
//       <div className="valour-header">
//         <div className="header-brand">Valour Academy</div>
//         <div className="header-login">
//           <button className="theme_btn">Username</button>
//         </div>
//       </div>

//       <div className="valour-main">
//         <div className="valour-sidebar">
//           <div className="sidebar-section">
//             <div className="sidebar-heading">COURSE LEVELS</div>
//             <div className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`} onClick={() => setSelectedLevel('beginner')}><span>Beginner</span><i className={`arrow-icon ${selectedLevel === 'beginner' ? 'down' : 'right'}`}></i></div>
//             <div className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`} onClick={() => setSelectedLevel('intermediate')}><span>Intermediate</span><i className={`arrow-icon ${selectedLevel === 'intermediate' ? 'down' : 'right'}`}></i></div>
//             <div className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`} onClick={() => setSelectedLevel('professional')}><span>Professional</span><i className={`arrow-icon ${selectedLevel === 'professional' ? 'down' : 'right'}`}></i></div>
//           </div>
//         </div>

//         <div className="valour-content p-0">
//           {courseData && (
//             <div className='main_module'>
//               <div className="content-breadcrumb">
//                 <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</span>
//                 <span className="separator">›</span>
//                 <span>Module 1</span>
//               </div>
//               <h1 className="content-title">{courseData.title}</h1>
//               <p className="content-description">{courseData.description}</p>
//               <div className="content-info">
//                 <div className="lesson-count">
//                   <FaBookReader className="accordion-icon resources" />
//                   <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
//                 </div>
//                 <div className="level-badge">
//                   <FaSignal className="accordion-icon resources" />
//                   <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="accordion-container">
//             <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('resources')}>
//                 <div className="accordion-title">
//                   <FaBookOpen className="accordion-icon resources" />
//                   <span>Resources</span>
//                 </div>
//                 <i className={`arrow-icon ${activeSection === 'resources' ? 'up' : 'down'}`}></i>
//               </div>
//               {activeSection === 'resources' && (
//                 <div className="accordion-content">{renderVideos()}</div>
//               )}
//             </div>

//             <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('notes')}>
//                 <div className="accordion-title">
//                   <FaFileAlt className="accordion-icon resources" />
//                   <span>Notes</span>
//                 </div>
//                 <i className={`arrow-icon ${activeSection === 'notes' ? 'up' : 'down'}`}></i>
//               </div>
//               {activeSection === 'notes' && (
//                 <div className="accordion-content">{renderNotes()}</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValourAcademy;

// ==================================================================================================================================




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/academy.css';
// import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal, FaLock } from "react-icons/fa";
// import videoImg from '../assets/images/crypto-latest.png';
// import ProgressBarsDisplay from '../components/DashboardSidebarComp/ProgressBar';

// const ValourAcademy = () => {
//   const { courseId } = useParams();
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedLevel, setSelectedLevel] = useState('beginner');
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [courseData, setCourseData] = useState(null);
//   const [progressData, setProgressData] = useState({
//     totalProgress: 0,
//     levelProgress: 0,
//     videoProgress: 0,
//   });
//   const [videoWatched, setVideoWatched] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [mcqs, setMcqs] = useState([]);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [grade, setGrade] = useState(null);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         setCourseData(data);
//       } catch (error) {
//         console.error("Error fetching course data:", error);
//       }
//     };
//     fetchCourseDetails();
//   }, [courseId]);

//   useEffect(() => {
//     const fetchProgress = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       const currentLevel = data.levels.find(lvl => lvl.level.toLowerCase() === selectedLevel);
//       setProgressData({
//         totalProgress: data.total_progress,
//         levelProgress: currentLevel?.percent || 0,
//         videoProgress: currentLevel?.percent || 0,
//       });
//       setVideoWatched(currentLevel?.watched_video_ids || []);
//     };
//     if (courseId) {
//       fetchProgress();
//     }
//   }, [courseId, selectedLevel]);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const levelObj = courseData?.levels.find((lvl) => lvl.level.toLowerCase() === selectedLevel);
//         if (!levelObj) return;
//         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         setNotes(data);
//       } catch (err) {
//         console.error("Failed to fetch notes:", err);
//       }
//     };
//     if (courseData) {
//       fetchNotes();
//     }
//   }, [courseId, selectedLevel, courseData]);

//   useEffect(() => {
//     const fetchMCQs = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const levelObj = courseData?.levels.find((lvl) => lvl.level.toLowerCase() === selectedLevel);
//         if (!levelObj) return;
//         const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await res.json();
//         setMcqs(data);
//       } catch (err) {
//         console.error("Failed to fetch MCQs:", err);
//       }
//     };
//     if (courseData) {
//       fetchMCQs();
//     }
//   }, [courseId, selectedLevel, courseData]);

//   const getVideosForLevel = (levelName) => {
//     if (!courseData) return [];
//     const level = courseData.levels.find((lvl) => lvl.level.toLowerCase() === levelName);
//     return level ? level.videos : [];
//   };

//   const renderVideos = () => {
//     const videos = getVideosForLevel(selectedLevel);
//     return (
//       <div className="container">
//         <div className="row">
//           {videos.map((video, index) => {
//             const isUnlocked = index === 0 || videoWatched.includes(videos[index - 1]?.id);
//             return (
//               <div key={video.id} className="col-lg-4 col-md-6 mb-4">
//                 <div className="video-card">
//                   <div className="video-thumbnail" style={{ position: "relative" }}>
//                     {!isUnlocked ? (
//                       <>
//                         <img className="obj_fit" src={videoImg} alt="locked" style={{ filter: "blur(2px)" }} />
//                         <div className="locked-overlay"><FaLock size={24} color="white" /></div>
//                       </>
//                     ) : (
//                       !videoUrl || videoUrl !== video.public_url ? (
//                         <>
//                           <img className="obj_fit" src={videoImg} alt={video.title} />
//                           <button onClick={() => setVideoUrl(video.public_url)} className="play-button-overlay">▶</button>
//                         </>
//                       ) : (
//                         <video controls autoPlay className="w-100 rounded" controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
//                           <source src={video.public_url} type="video/mp4" />
//                         </video>
//                       )
//                     )}
//                   </div>
//                   <div className="video-info">
//                     <h5 className="video-title">{video.title}</h5>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const renderNotes = () => (
//     <div className="container">
//       <div className="row">
//         {notes.length > 0 ? (
//           notes.map((note) => (
//             <div key={note.id} className="col-md-6 text-white mb-3">
//               <div className="note-card p-3 bg-dark rounded">
//                 <h5>{note.title}</h5>
//                 <p>{note.content}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-white">
//             <p>No notes found for this level.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   const handleAnswer = (questionId, answer) => {
//     setUserAnswers({ ...userAnswers, [questionId]: answer });
//   };

//   const submitQuiz = () => {
//     const total = mcqs.length;
//     const correct = mcqs.filter(q => userAnswers[q.id] === q.correct_answer).length;
//     const percent = Math.round((correct / total) * 100);
//     setGrade(percent);
//   };

//   const renderKnowledge = () => (
//     <div className="container">
//       <div className="row">
//         {mcqs.length === 0 ? (
//           <div className="col-12 text-white">
//             <p>No quiz available for this level.</p>
//           </div>
//         ) : (
//           <div className="col-12 text-white">
//             {mcqs.map((q) => (
//               <div key={q.id} className="mb-4 p-3 bg-dark rounded">
//                 <h5>{q.question}</h5>
//                 {(q.options || []).map((opt, idx) => (
//                   <div key={idx}>
//                     <input
//                       type="radio"
//                       name={`question-${q.id}`}
//                       value={opt}
//                       checked={userAnswers[q.id] === opt}
//                       onChange={() => handleAnswer(q.id, opt)}
//                     /> {opt}
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <button className="btn btn-success" onClick={submitQuiz}>Submit Quiz</button>
//             {grade !== null && (
//               <p className="mt-3">You scored: <strong>{grade}%</strong>. {grade >= 50 ? 'You can proceed to the next level!' : 'Please retake the quiz.'}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="valour-container">
//       <div className="valour-header">
//         <div className="header-brand">Valour Academy</div>
//         <div className="header-login">
//           <button className="theme_btn">Username</button>
//         </div>
//       </div>

//       <div className="valour-main">
//         <div className="valour-sidebar">
//           <div className="sidebar-section">
//             <div className="sidebar-heading">COURSE LEVELS</div>
//             <div className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`} onClick={() => setSelectedLevel('beginner')}><span>Beginner</span></div>
//             <div className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`} onClick={() => setSelectedLevel('intermediate')}><span>Intermediate</span></div>
//             <div className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`} onClick={() => setSelectedLevel('professional')}><span>Professional</span></div>
//           </div>
//         </div>

//         <div className="valour-content p-0">
//           <div className="accordion-container">
//             <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('resources')}>
//                 <div className="accordion-title">
//                   <FaBookOpen className="accordion-icon resources" />
//                   <span>Resources</span>
//                 </div>
//               </div>
//               {activeSection === 'resources' && <div className="accordion-content">{renderVideos()}</div>}
//             </div>

//             <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('notes')}>
//                 <div className="accordion-title">
//                   <FaFileAlt className="accordion-icon resources" />
//                   <span>Notes</span>
//                 </div>
//               </div>
//               {activeSection === 'notes' && <div className="accordion-content">{renderNotes()}</div>}
//             </div>

//             <div className={`accordion-item ${activeSection === 'knowledge' ? 'active' : ''}`}>
//               <div className="accordion-header" onClick={() => toggleSection('knowledge')}>
//                 <div className="accordion-title">
//                   <FaLightbulb className="accordion-icon resources" />
//                   <span>Knowledge</span>
//                 </div>
//               </div>
//               {activeSection === 'knowledge' && <div className="accordion-content">{renderKnowledge()}</div>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValourAcademy;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/academy.css';
import { FaBookOpen, FaFileAlt, FaLightbulb, FaBookReader, FaSignal, FaLock } from "react-icons/fa";
import videoImg from '../assets/images/crypto-latest.png';
import ProgressBarsDisplay from '../components/DashboardSidebarComp/ProgressBar';

const ValourAcademy = () => {
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [videoUrl, setVideoUrl] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0,
  });
  const [videoWatched, setVideoWatched] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [grade, setGrade] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    fetchCourseDetails();
  }, [courseId]);

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const currentLevel = data.levels.find(lvl => lvl.level.toLowerCase() === selectedLevel);
      setProgressData({
        totalProgress: data.total_progress,
        levelProgress: currentLevel?.percent || 0,
        videoProgress: currentLevel?.percent || 0,
      });
      setVideoWatched(currentLevel?.watched_video_ids || []);
    };
    if (courseId) {
      fetchProgress();
    }
  }, [courseId, selectedLevel]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const levelObj = courseData?.levels.find((lvl) => lvl.level.toLowerCase() === selectedLevel);
        if (!levelObj) return;
        const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Failed to fetch notes:", err);
      }
    };
    if (courseData) {
      fetchNotes();
    }
  }, [courseId, selectedLevel, courseData]);

  useEffect(() => {
    const fetchMCQs = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const levelObj = courseData?.levels.find((lvl) => lvl.level.toLowerCase() === selectedLevel);
        if (!levelObj) return;
        const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setMcqs(data);
      } catch (err) {
        console.error("Failed to fetch MCQs:", err);
      }
    };
    if (courseData) {
      fetchMCQs();
    }
  }, [courseId, selectedLevel, courseData]);

  const getVideosForLevel = (levelName) => {
    if (!courseData) return [];
    const level = courseData.levels.find((lvl) => lvl.level.toLowerCase() === levelName);
    return level ? level.videos : [];
  };

  const renderVideos = () => {
    const videos = getVideosForLevel(selectedLevel);
    return (
      <div className="container">
        <div className="row">
          {videos.map((video, index) => {
            const isUnlocked = index === 0 || videoWatched.includes(videos[index - 1]?.id);
            return (
              <div key={video.id} className="col-lg-4 col-md-6 mb-4">
                <div className="video-card">
                  <div className="video-thumbnail" style={{ position: "relative" }}>
                    {!isUnlocked ? (
                      <>
                        <img className="obj_fit" src={videoImg} alt="locked" style={{ filter: "blur(2px)" }} />
                        <div className="locked-overlay"><FaLock size={24} color="white" /></div>
                      </>
                    ) : (
                      !videoUrl || videoUrl !== video.public_url ? (
                        <>
                          <img className="obj_fit" src={videoImg} alt={video.title} />
                          <button onClick={() => setVideoUrl(video.public_url)} className="play-button-overlay">▶</button>
                        </>
                      ) : (
                        <video controls autoPlay className="w-100 rounded" controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
                          <source src={video.public_url} type="video/mp4" />
                        </video>
                      )
                    )}
                  </div>
                  <div className="video-info">
                    <h5 className="video-title">{video.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNotes = () => (
    <div className="container">
      <div className="row">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="col-md-6 text-white mb-3">
              <div className="note-card p-3 bg-dark rounded">
                <h5>{note.title}</h5>
                <p>{note.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-white">
            <p>No notes found for this level.</p>
          </div>
        )}
      </div>
    </div>
  );

  const handleAnswer = (questionId, answer) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const submitQuiz = () => {
    const total = mcqs.length;
    const correct = mcqs.filter(q => userAnswers[q.id] === q.correct_answer).length;
    const percent = Math.round((correct / total) * 100);
    setGrade(percent);
  };

  const renderKnowledge = () => (
    <div className="container">
      <div className="row">
        {mcqs.length === 0 ? (
          <div className="col-12 text-white">
            <p>No quiz available for this level.</p>
          </div>
        ) : (
          <div className="col-12 text-white">
            {mcqs.map((q) => (
              <div key={q.id} className="mb-4 p-3 bg-dark rounded">
                <h5>{q.question}</h5>
                {(q.options || []).map((opt, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={userAnswers[q.id] === opt}
                      onChange={() => handleAnswer(q.id, opt)}
                    /> {opt}
                  </div>
                ))}
              </div>
            ))}
            <button className="btn btn-success" onClick={submitQuiz}>Submit Quiz</button>
            {grade !== null && (
              <p className="mt-3">You scored: <strong>{grade}%</strong>. {grade >= 50 ? 'You can proceed to the next level!' : 'Please retake the quiz.'}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="valour-container">
      <div className="valour-header">
        <div className="header-brand">Valour Academy</div>
        <div className="header-login">
          <button className="theme_btn">Username</button>
        </div>
      </div>

      <div className="valour-main">
        <div className="valour-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-heading">COURSE LEVELS</div>
            <div className={`sidebar-item ${selectedLevel === 'beginner' ? 'active' : ''}`} onClick={() => setSelectedLevel('beginner')}><span>Beginner</span></div>
            <div className={`sidebar-item ${selectedLevel === 'intermediate' ? 'active' : ''}`} onClick={() => setSelectedLevel('intermediate')}><span>Intermediate</span></div>
            <div className={`sidebar-item ${selectedLevel === 'professional' ? 'active' : ''}`} onClick={() => setSelectedLevel('professional')}><span>Professional</span></div>
          </div>
        </div>

        <div className="valour-content p-0">
          {courseData && (
            <div className='main_module'>
              <div className="content-breadcrumb">
                <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</span>
                <span className="separator">›</span>
                <span>Module 1</span>
              </div>
              <h1 className="content-title">{courseData.title}</h1>
              <p className="content-description">{courseData.description}</p>
              <div className="content-info">
                <div className="lesson-count">
                  <FaBookReader className="accordion-icon resources" />
                  <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
                </div>
                <div className="level-badge">
                  <FaSignal className="accordion-icon resources" />
                  <span>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level</span>
                </div>
              </div>
            </div>
          )}

          <div className="accordion-container">
            <div className={`accordion-item ${activeSection === 'resources' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleSection('resources')}>
                <div className="accordion-title">
                  <FaBookOpen className="accordion-icon resources" />
                  <span>Resources</span>
                </div>
                <i className={`arrow-icon ${activeSection === 'resources' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'resources' && (
                <div className="accordion-content">{renderVideos()}</div>
              )}
            </div>

            <div className={`accordion-item ${activeSection === 'notes' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleSection('notes')}>
                <div className="accordion-title">
                  <FaFileAlt className="accordion-icon resources" />
                  <span>Notes</span>
                </div>
                <i className={`arrow-icon ${activeSection === 'notes' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'notes' && (
                <div className="accordion-content">{renderNotes()}</div>
              )}
            </div>

            <div className={`accordion-item ${activeSection === 'knowledge' ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleSection('knowledge')}>
                <div className="accordion-title">
                  <FaLightbulb className="accordion-icon resources" />
                  <span>Knowledge</span>
                </div>
                <i className={`arrow-icon ${activeSection === 'knowledge' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'knowledge' && (
                <div className="accordion-content">{renderKnowledge()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValourAcademy;
