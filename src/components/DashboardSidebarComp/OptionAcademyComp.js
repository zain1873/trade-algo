// // import { useEffect, useRef, useState } from "react";
// // import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
// // import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

// // const OptionsAcademy = () => {
// //   // State to track the active tab
// //   const [activeTab, setActiveTab] = useState("options-academy");

// //   // State to track the selected category
// //   const [selectedCategory, setSelectedCategory] = useState("Fundamentals");

// //   // State to track dropdown visibility
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   // Reference to the dropdown menu
// //   const dropdownRef = useRef(null);

// //   // Categories for dropdown
// //   const categories = [
// //     "Fundamentals",
// //     "Intermediate",
// //     "L.E.A.P.S",
// //     "Cash Secured Puts",
// //     "Advanced",
// //   ];

// //   // Playlist data
// //   const playlistData = [
// //     {
// //       id: 1,
// //       title: "Intro to Options",

// //       isPlaying: true,
// //     },
// //     {
// //       id: 2,
// //       title: "Basic Strategies",

// //       isPlaying: false,
// //     },
// //     {
// //       id: 3,
// //       title: "Options Pricing",

// //       isPlaying: false,
// //     },
// //     {
// //       id: 5,
// //       title: "Trading Risk",

// //       isPlaying: false,
// //     },
// //   ];

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Function to handle tab changes
// //   const handleTabChange = (tabId) => {
// //     setActiveTab(tabId);
// //   };

// //   // Function to toggle the dropdown
// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   // Function to handle category selection
// //   const handleCategoryChange = (category) => {
// //     setSelectedCategory(category);
// //     setIsDropdownOpen(false);
// //     // Here you would typically fetch the videos for this category
// //     // This just stays on the dashboard and updates the content
// //   };

// //   return (
// //     <div className="options-academy-container">
// //       {/* Navigation tabs */}
// //       <div className="nav-container">
// //         <ul className="nav nav-tabs">
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${
// //                 activeTab === "options-academy" ? "active" : ""
// //               }`}
// //               onClick={() => handleTabChange("options-academy")}
// //             >
// //               Stock
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${
// //                 activeTab === "livestream" ? "active" : ""
// //               }`}
// //               onClick={() => handleTabChange("livestream")}
// //             >
// //               Forex
// //             </button>
// //           </li>
// //           <li className="nav-item">
// //             <button
// //               className={`nav-link ${activeTab === "support" ? "active" : ""}`}
// //               onClick={() => handleTabChange("support")}
// //             >
// //               Crypto
// //             </button>
// //           </li>
// //         </ul>
// //         <div className="tab-indicator"></div>
// //       </div>

// //       {/* Main content area */}
// //       <div className="tab-content-academy">
// //         {activeTab === "options-academy" && (
// //           <div className="options-academy-content">
// //             <div className="row">
// //               <div className="col-md-7">
// //                 <div className="intro-section">
// //                   <div className="d-flex align-items-center">
// //                     <div className="logo-container">
// //                       {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
// //                     </div>
// //                     {/* <h2 className="options-title mb-3 text-white">Options Academy</h2> */}
// //                   </div>

// //                   <div className="video-container-options">
// //                     <div className="video-wrapper-options">
// //                       {/* Video Player */}
// //                       <div className="ratio ratio-16x9">
// //                         <video controls className="w-100 h-100">
// //                           <source
// //                             src="https://example.com/video.mp4"
// //                             type="video/mp4"
// //                           />
// //                           Your browser does not support the video tag.
// //                         </video>
// //                       </div>
// //                       <div className="">
// //                         <div className="fundamentals-tag">
// //                           {selectedCategory}: Options Intro (1/10)
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="tutorial-nav">
// //                     <ul className="nav nav-tabs">
// //                       <li className="nav-item">
// //                         <button className="nav-link active">Overview</button>
// //                       </li>
// //                       <li className="nav-item">
// //                         <button className="nav-link">Downloads</button>
// //                       </li>
// //                     </ul>
// //                   </div>

// //                   <div className="tutorial-details">
// //                     <div className="duration-info">
// //                       13 minutes 54 seconds | {selectedCategory}
// //                     </div>
// //                     <h4 className="tutorial-heading">Tutorial Description</h4>
// //                     <p className="tutorial-desc">
// //                       In this tutorial, we will be covering the following
// //                       topics:
// //                     </p>
// //                     <ul className="tutorial-topics">
// //                       <li>What Is An Options Contract?</li>
// //                       <li>Calls and Puts</li>
// //                       <li>Options Pricing Basics</li>
// //                       <li>Risk and Reward</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-md-5">
// //                 <div className="playlist-section">
// //                   <div className="playlist-header">
// //                     <h4>Current Playlist</h4>
// //                     <div className="custom-dropdown" ref={dropdownRef}>
// //                       <button
// //                         className="btn btn-outline-primary dropdown-toggle"
// //                         type="button"
// //                         onClick={toggleDropdown}
// //                       >
// //                         {selectedCategory}
// //                       </button>
// //                       {isDropdownOpen && (
// //                         <ul className="custom-dropdown-menu">
// //                           {categories.map((category, index) => (
// //                             <li key={index}>
// //                               <button
// //                                 className="custom-dropdown-item"
// //                                 onClick={() => handleCategoryChange(category)}
// //                               >
// //                                 {category}
// //                               </button>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="playlist-items">
// //                     {playlistData.map((item) => (
// //                       <div
// //                         key={item.id}
// //                         className={`playlist-item ${
// //                           item.isPlaying ? "now-playing" : ""
// //                         }`}
// //                       >
// //                         <div className="playlist-thumbnail">
// //                           <img src={thumbnail} alt="Thumbnail" />
// //                           <div className="course-tag">
// //                             {selectedCategory} Course
// //                           </div>
// //                           <div className="academy-tag">Options Academy</div>
// //                           {item.isPlaying && (
// //                             <div className="playing-tag">Now Playing</div>
// //                           )}
// //                         </div>
// //                         <div className="playlist-info">
// //                           <div className="video-title-card">{item.title}</div>
// //                           <h5 className="text-black">{item.title}</h5>
// //                           <p>{item.duration}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === "livestream" && (
// //           //  <LiveSessionChat/>
// //           <div className="options-academy-content">
// //             <div className="row">
// //               <div className="col-md-7">
// //                 <div className="intro-section">
// //                   <div className="d-flex align-items-center">
// //                     <div className="logo-container">
// //                       {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
// //                     </div>
// //                   </div>

// //                   <div className="video-container-options">
// //                     <div className="video-wrapper-options">
// //                       {/* Video Player */}
// //                       <div className="ratio ratio-16x9">
// //                         <video controls className="w-100 h-100">
// //                           <source
// //                             src="https://example.com/video.mp4"
// //                             type="video/mp4"
// //                           />
// //                           Your browser does not support the video tag.
// //                         </video>
// //                       </div>
// //                       <div className="">
// //                         <div className="fundamentals-tag">
// //                           {selectedCategory}: Options Intro (1/10)
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="tutorial-details">
// //                     <h4 className="tutorial-heading">Tutorial Description</h4>
// //                     <p className="tutorial-desc">
// //                       In this tutorial, we will be covering the following
// //                       topics:
// //                     </p>
// //                     <ul className="tutorial-topics">
// //                       <li>What Is An Options Contract?</li>
// //                       <li>Calls and Puts</li>
// //                       <li>Options Pricing Basics</li>
// //                       <li>Risk and Reward</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-md-5">
// //                 <div className="playlist-section">
// //                   <div className="playlist-header">
// //                     <h4>Current Playlist</h4>
// //                     <div className="custom-dropdown" ref={dropdownRef}>
// //                       <button
// //                         className="btn btn-outline-primary dropdown-toggle"
// //                         type="button"
// //                         onClick={toggleDropdown}
// //                       >
// //                         {selectedCategory}
// //                       </button>
// //                       {isDropdownOpen && (
// //                         <ul className="custom-dropdown-menu">
// //                           {categories.map((category, index) => (
// //                             <li key={index}>
// //                               <button
// //                                 className="custom-dropdown-item"
// //                                 onClick={() => handleCategoryChange(category)}
// //                               >
// //                                 {category}
// //                               </button>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="playlist-items">
// //                     {playlistData.map((item) => (
// //                       <div
// //                         key={item.id}
// //                         className={`playlist-item ${
// //                           item.isPlaying ? "now-playing" : ""
// //                         }`}
// //                       >
// //                         <div className="playlist-thumbnail">
// //                           <img src={thumbnail} alt="Thumbnail" />
// //                           <div className="course-tag">
// //                             {selectedCategory} Course
// //                           </div>
// //                           <div className="academy-tag">Options Academy</div>
// //                           {item.isPlaying && (
// //                             <div className="playing-tag">Now Playing</div>
// //                           )}
// //                         </div>
// //                         <div className="playlist-info">
// //                           <div className="video-title-card">{item.title}</div>
// //                           <h5 className="text-black">{item.title}</h5>
// //                           <p>{item.duration}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === "support" && (
// //           <div className="options-academy-content">
// //             <div className="row">
// //               <div className="col-md-7">
// //                 <div className="intro-section">
// //                   <div className="d-flex align-items-center">
// //                     <div className="logo-container">
// //                       {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
// //                     </div>
// //                   </div>

// //                   <div className="video-container-options">
// //                     <div className="video-wrapper-options">
// //                       {/* Video Player */}
// //                       <div className="ratio ratio-16x9">
// //                         <video controls className="w-100 h-100">
// //                           <source
// //                             src="https://example.com/video.mp4"
// //                             type="video/mp4"
// //                           />
// //                           Your browser does not support the video tag.
// //                         </video>
// //                       </div>
// //                       <div className="">
// //                         <div className="fundamentals-tag">
// //                           {selectedCategory}: Options Intro (1/10)
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="tutorial-nav">
// //                     <ul className="nav nav-tabs">
// //                       <li className="nav-item">
// //                         <button className="nav-link active">Overview</button>
// //                       </li>
// //                       <li className="nav-item">
// //                         <button className="nav-link">Downloads</button>
// //                       </li>
// //                     </ul>
// //                   </div>

// //                   <div className="tutorial-details">
// //                     <h4 className="tutorial-heading">Tutorial Description</h4>
// //                     <p className="tutorial-desc">
// //                       In this tutorial, we will be covering the following
// //                       topics:
// //                     </p>
// //                     <ul className="tutorial-topics">
// //                       <li>What Is An Options Contract?</li>
// //                       <li>Calls and Puts</li>
// //                       <li>Options Pricing Basics</li>
// //                       <li>Risk and Reward</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="col-md-5">
// //                 <div className="playlist-section">
// //                   <div className="playlist-header">
// //                     <h4>Current Playlist</h4>
// //                     <div className="custom-dropdown" ref={dropdownRef}>
// //                       <button
// //                         className="btn btn-outline-primary dropdown-toggle"
// //                         type="button"
// //                         onClick={toggleDropdown}
// //                       >
// //                         {selectedCategory}
// //                       </button>
// //                       {isDropdownOpen && (
// //                         <ul className="custom-dropdown-menu">
// //                           {categories.map((category, index) => (
// //                             <li key={index}>
// //                               <button
// //                                 className="custom-dropdown-item"
// //                                 onClick={() => handleCategoryChange(category)}
// //                               >
// //                                 {category}
// //                               </button>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="playlist-items">
// //                     {playlistData.map((item) => (
// //                       <div
// //                         key={item.id}
// //                         className={`playlist-item ${
// //                           item.isPlaying ? "now-playing" : ""
// //                         }`}
// //                       >
// //                         <div className="playlist-thumbnail">
// //                           <img src={thumbnail} alt="Thumbnail" />
// //                           <div className="course-tag">
// //                             {selectedCategory} Course
// //                           </div>
// //                           <div className="academy-tag">Options Academy</div>
// //                           {item.isPlaying && (
// //                             <div className="playing-tag">Now Playing</div>
// //                           )}
// //                         </div>
// //                         <div className="playlist-info">
// //                           <div className="video-title-card">{item.title}</div>
// //                           <h5 className="text-black">{item.title}</h5>
// //                           <p>{item.duration}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OptionsAcademy;

// // OptionsAcademy.jsx
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

// const OptionsAcademy = () => {
//   const [activeTab, setActiveTab] = useState("Stock");
//   const [courses, setCourses] = useState([]);
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";

//   const fetchCourses = async (category) => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}api/beginnerhub/courses/${category}/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setCourses(res.data);
//       if (res.data.length > 0) {
//         const firstCourse = res.data[0];
//         setSelectedCourseId(firstCourse.id);
//         fetchVideos(firstCourse.id);
//       } else {
//         setVideos([]);
//         setSelectedVideo(null);
//       }
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//     }
//   };

//   const fetchVideos = async (courseId) => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       setVideos(res.data);
//       if (res.data.length > 0) setSelectedVideo(res.data[0]);
//     } catch (err) {
//       console.error("Error fetching videos:", err);
//     }
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     fetchCourses(tab);
//   };

//   const handleCourseClick = (courseId) => {
//     setSelectedCourseId(courseId);
//     fetchVideos(courseId);
//   };

//   useEffect(() => {
//     fetchCourses("Stock");
//   }, []);

//   return (
//     <div className="options-academy-container">
//       <div className="nav-container">
//         <ul className="nav nav-tabs">
//           {['Stock', 'Forex', 'Crypto'].map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                 onClick={() => handleTabChange(tab)}
//               >
//                 {tab}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="tab-indicator"></div>
//       </div>

//       <div className="tab-content-academy">
//         <div className="options-academy-content">
//           <div className="row">
//             <div className="col-md-7">
//               <div className="video-container-options">
//                 <div className="video-wrapper-options">
//                   <div className="ratio ratio-16x9">
//                     {selectedVideo ? (
//                       <video controls className="w-100 h-100">
//                         <source src={selectedVideo.video_url} type="video/mp4" />
//                       </video>
//                     ) : (
//                       <p className="text-white">No video selected</p>
//                     )}
//                   </div>
//                   {selectedVideo && (
//                     <div className="fundamentals-tag">
//                       {selectedVideo.title}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {selectedVideo && (
//                 <div className="tutorial-details">
//                   <h4 className="tutorial-heading">Tutorial Description</h4>
//                   <p className="tutorial-desc">{selectedVideo.description}</p>
//                 </div>
//               )}
//             </div>

//             <div className="col-md-5">
//               <div className="playlist-section">
//                 <div className="playlist-header">
//                   <h4>Courses</h4>
//                 </div>
//                 <div className="playlist-items">
//                   {courses.map((course) => (
//                     <div
//                       key={course.id}
//                       className={`playlist-item ${
//                         course.id === selectedCourseId ? "now-playing" : ""
//                       }`}
//                       onClick={() => handleCourseClick(course.id)}
//                     >
//                       <div className="playlist-thumbnail">
//                         <div className="course-tag">{activeTab} Course</div>
//                         {course.id === selectedCourseId && (
//                           <div className="playing-tag">Now Playing</div>
//                         )}
//                       </div>
//                       <div className="playlist-info">
//                         <div className="video-title-card">{course.title}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="playlist-section">
//                 <h4>Videos</h4>
//                 <div className="playlist-items">
//                   {videos.map((video) => (
//                     <div
//                       key={video.id}
//                       className={`playlist-item ${
//                         selectedVideo?.id === video.id ? "now-playing" : ""
//                       }`}
//                       onClick={() => setSelectedVideo(video)}
//                     >
//                       <div className="playlist-thumbnail">
//                         <img
//                           src={video.thumbnail_url || "https://via.placeholder.com/150"}
//                           alt="Thumbnail"
//                         />
//                         {selectedVideo?.id === video.id && (
//                           <div className="playing-tag">Now Playing</div>
//                         )}
//                       </div>
//                       <div className="playlist-info">
//                         <div className="video-title-card">{video.title}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptionsAcademy;

// OptionsAcademy.jsx (fixed layout, integrated API)
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

const OptionsAcademy = () => {
  const [activeTab, setActiveTab] = useState("options-academy");
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";

  const getCategory = () => {
    if (activeTab === "options-academy") return "Stock";
    if (activeTab === "livestream") return "Forex";
    if (activeTab === "support") return "Crypto";
    return "Stock";
  };

  const fetchCourses = async (category) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${category}/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setCourses(res.data);
      if (res.data.length > 0) {
        const firstCourse = res.data[0];
        setSelectedCourseId(firstCourse.id);
        fetchVideos(firstCourse.id);
      } else {
        setVideos([]);
        setSelectedVideo(null);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const fetchVideos = async (courseId) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}api/beginnerhub/courses/${courseId}/videos/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setVideos(res.data);
      if (res.data.length > 0) setSelectedVideo(res.data[0]);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchCourses(getCategory());
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCourseClick = (courseId) => {
    setSelectedCourseId(courseId);
    fetchVideos(courseId);
  };

  return (
    <div className="options-academy-container">
      <div className="nav-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "options-academy" ? "active" : ""
              }`}
              onClick={() => handleTabChange("options-academy")}
            >
              Stock
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "livestream" ? "active" : ""
              }`}
              onClick={() => handleTabChange("livestream")}
            >
              Forex
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "support" ? "active" : ""}`}
              onClick={() => handleTabChange("support")}
            >
              Crypto
            </button>
          </li>
        </ul>
        <div className="tab-indicator"></div>
      </div>

      <div className="tab-content-academy">
        <div className="options-academy-content">
          <div className="row">
            <div className="col-md-7">
              <div className="video-container-options">
                <div className="video-wrapper-options">
                  <div className="ratio ratio-16x9">
                    {selectedVideo ? (
                      <video controls className="w-100 h-100">
                        <source
                          src={selectedVideo.video_url}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <p className="text-white">No video selected</p>
                    )}
                  </div>
                  {selectedVideo && (
                    <div className="fundamentals-tag">
                      {selectedVideo.title}
                    </div>
                  )}
                </div>
              </div>
              {selectedVideo && (
                <div className="tutorial-details">
                  <h4 className="tutorial-heading">Tutorial Description</h4>
                  <p className="tutorial-desc">{selectedVideo.description}</p>
                </div>
              )}
            </div>

            <div className="col-md-5">
              <div className="playlist-section">
                <div className="playlist-header">
                  <h4>Current Playlist</h4>
                  <div className="custom-dropdown" ref={dropdownRef}>
                    <button
                      className="btn btn-outline-primary dropdown-toggle"
                      type="button"
                      onClick={toggleDropdown}
                    >
                      {getCategory()}
                    </button>
                  </div>
                </div>

                <div className="playlist-items">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className={`playlist-item ${
                        course.id === selectedCourseId ? "now-playing" : ""
                      }`}
                      onClick={() => handleCourseClick(course.id)}
                    >
                      <div className="playlist-thumbnail">
                        <img src={thumbnail} alt="Thumbnail" />
                        <div className="course-tag">
                          {course.category} Course
                        </div>
                        <div className="academy-tag">Options Academy</div>
                        {course.id === selectedCourseId && (
                          <div className="playing-tag">Now Playing</div>
                        )}
                      </div>
                      <div className="playlist-info">
                        <div className="video-title-card">{course.title}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {videos.length > 0 && (
                  <>
                    <h4 className="mt-4">Videos</h4>
                    <div className="playlist-items">
                      {videos.map((video) => (
                        <div
                          key={video.id}
                          className={`playlist-item ${
                            selectedVideo?.id === video.id ? "now-playing" : ""
                          }`}
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="playlist-thumbnail">
                            <img
                              src={video.thumbnail_url || thumbnail}
                              alt="Thumbnail"
                            />
                            {selectedVideo?.id === video.id && (
                              <div className="playing-tag">Now Playing</div>
                            )}
                          </div>
                          <div className="playlist-info">
                            <div className="video-title-card">
                              {video.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsAcademy;
