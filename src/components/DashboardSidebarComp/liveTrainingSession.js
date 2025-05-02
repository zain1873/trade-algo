// import React, { useState, useRef } from 'react';
// import "../DashboardSidebarComp/styles/live-training-session.css";
// import sessionImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";

// function LiveTrainingSession() {
//   const [isLocked, setIsLocked] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     setIsPlaying(true);
//     setTimeout(() => {
//       videoRef.current?.play();
//     }, 100); // ensure rendering before playing
//   };

//   return (
//     <section className="live-trading-sessions pt-0">
//       <div className="container">
//         <div className="row">
//           <div className="sec_heading">
//             <h2 className="live-session-title">Live Trading Sessions</h2>
//           </div>

//           {/* Video Card */}
//           <div className="col-lg-6">
//             <div className={`session-card ${isLocked ? "locked" : ""}`}>
//               <div className="video-wrapper">
//                 {!isPlaying ? (
//                   <div className="thumbnail-container">
//                     <img src={sessionImg} alt="Video thumbnail" className="session-img" />
//                     <button className="play-button" onClick={handlePlay}>▶</button>
//                   </div>
//                 ) : (
//                   <video
//                     ref={videoRef}
//                     className="session-img"
//                     controls
//                     muted
//                     loop
//                     playsInline
//                     poster={sessionImg}
//                   >
// <source src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/course_videos/live-session-video1.mp4" type="video/mp4" />

//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//               </div>
//               <div className="session-content">
//                 <h5 className="session-title">Daily Livestreams</h5>
//                 <p className="session-host">By IAN</p>
//                 <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
//               </div>
//               {isLocked && <div className="lock-icon">🔒</div>}
//             </div>
//           </div>

//           {/* Image Card */}
//           <div className="col-lg-6">
//             <div className={`session-card ${isLocked ? "locked" : ""}`}>
//               <img src={sessionImg} alt="IAN image" className="session-img" />
//               <div className="session-content">
//                 <h5 className="session-title">Daily Livestreams</h5>
//                 <p className="session-host">By IAN</p>
//                 <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
//               </div>
//               {isLocked && <div className="lock-icon">🔒</div>}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default LiveTrainingSession;

// import React, { useState, useRef } from "react";
// import "../DashboardSidebarComp/styles/live-training-session.css";
// import sessionImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";
// import LiveSessionChat from "./LiveSessionChat";

// function LiveTrainingSession() {
//   const [isLocked, setIsLocked] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     setIsPlaying(true);
//     setTimeout(() => {
//       videoRef.current?.play();
//     }, 100); // ensure rendering before playing
//   };

//   return (
//     <section className="live-trading-sessions pt-0">
//       <div className="container">
//         <div className="row">
//           <div className="sec_heading">
//             <h2 className="live-session-title">Past Live Streams</h2>
//           </div>

//           {/* Video Card */}
//           <div className="col-lg-6">
//             <div className={`session-card ${isLocked ? "locked" : ""}`}>
//               <div className="video-wrapper">
//                 {!isPlaying ? (
//                   <div className="thumbnail-container">
//                     <img
//                       src={sessionImg}
//                       alt="Video thumbnail"
//                       className="session-img"
//                     />
//                     <button className="play-button" onClick={handlePlay}>
//                       ▶
//                     </button>
//                   </div>
//                 ) : (
//                   <video
//                     ref={videoRef}
//                     className="session-img"
//                     controls
//                     muted
//                     loop
//                     playsInline
//                     poster={sessionImg}
//                   >
//                     <source
//                       src="https://pub-e58a5f6126d0464c9b810e772987ba18.r2.dev/course_videos/live-session-video1.mp4"
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//               </div>
//               <div className="session-content">
//                 <h5 className="session-title">Daily Livestreams</h5>
//                 <p className="session-host">By IAN</p>
//                 <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
//               </div>
//               {isLocked && <div className="lock-icon">🔒</div>}
//             </div>
//           </div>

//           {/* Image Card */}
//           <div className="col-lg-6">
//             <div className={`session-card ${isLocked ? "locked" : ""}`}>
//               <img src={sessionImg} alt="IAN image" className="session-img" />
//               <div className="session-content">
//                 <h5 className="session-title">Daily Livestreams</h5>
//                 <p className="session-host">By IAN</p>
//                 <p className="session-time">9:30am - 10:30am EST • Mon - Fri</p>
//               </div>
//               {isLocked && <div className="lock-icon">🔒</div>}
//             </div>
//           </div>
//         </div>
//       </div>

//       <LiveSessionChat />
//     </section>
//   );
// }

// export default LiveTrainingSession;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../DashboardSidebarComp/styles/live-training-session.css";
import sessionImg from "../DashboardSidebarComp/images/live-trading-session-img.jpg";
import LiveSessionChat from "./LiveSessionChat";

function LiveTrainingSession() {
  const [isLocked, setIsLocked] = useState(true);
  const [pastWebinars, setPastWebinars] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);
  const accessToken = localStorage.getItem("accessToken");

  const API_URL = `${process.env.REACT_APP_API_URL}api/webinars/`;

  useEffect(() => {
    const fetchPastWebinars = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const past = res.data
          .filter((w) => w.status === "Outdated")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 2); // ✅ Sirf 2 latest Past Webinars
        setPastWebinars(past);
      } catch (err) {
        console.error("Failed to fetch webinars:", err);
      }
    };
    fetchPastWebinars();
  }, []);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      videoRefs.current[index]?.play();
    }, 100); // video ko delay se play karwana
  };

  return (
    <section className="live-trading-sessions pt-0">
      <div className="container">
        <div className="row">
          <div className="sec_heading">
            <h2 className="live-session-title">Past Live Streams</h2>
          </div>

          {pastWebinars.map((webinar, index) => (
            <div className="col-lg-6 mb-0 p-0 ps-2" key={webinar.id}>
              <div className={`session-card ${isLocked ? "locked" : ""}`}>
                <div className="video-wrapper">
                  {playingIndex !== index ? (
                    <div className="thumbnail-container">
                      <img
                        src={sessionImg}
                        alt="Video thumbnail"
                        className="session-img"
                      />
                      <button
                        className="play-button"
                        onClick={() => handlePlay(index)}
                      >
                        ▶
                      </button>
                    </div>
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="session-img"
                      controls
                      muted
                      loop
                      playsInline
                      poster={sessionImg}
                    >
                      <source src={webinar.recording_link} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                <div className="session-content">
                  <h5 className="session-title">{webinar.title}</h5>
                  <p className="session-host">By {webinar.presenter}</p>
                  <p className="session-time">{webinar.date}</p>
                </div>

                {isLocked && <div className="lock-icon">🔒</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <LiveSessionChat />
    </section>
  );
}

export default LiveTrainingSession;
