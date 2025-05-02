// im>ort axios from "axios";
// import { useEffect } from "react";
// import React, { useState, useRef } from "react";
// import "../styles/platinumDashboard.css";
// import WeeklyBriefing from "../components/DashboardPlatinum/WeeklyBriefing";
// import Leaderboard from "../components/DashboardPlatinum/Leaderboard";
// import MarketNews from "../components/DashboardPlatinum/MarketNews";
// import Wabinars from "../components/DashboardPlatinum/Wabinars";
// import TradingChallenges from "../components/DashboardPlatinum/TradingChallenge";
// import ScheduleCall from "../components/DashboardPlatinum/ScheduleCall";
// import PortfolioHeatmap from "../components/DashboardPlatinum/PortfolioHeatmap";
// import FeatureVoting from "../components/DashboardPlatinum/FeatureVoting";
// import PlatinumMembershipNFT from "../components/DashboardPlatinum/MembershipNft";
// import JournalPage from "../components/DashboardPlatinum/JournalPage";

// const PlatinumDashboard = () => {
// const [activeSection, setActiveSection] = useState("dashboard");
// const collapseRef = useRef(null); // 👈 ref for collapse

// const handleNavClick = (key) => {
//   setActiveSection(key);
//   // Close collapse in mobile view
//   if (collapseRef.current?.classList.contains("show")) {
//     collapseRef.current.classList.remove("show");
//   }
// };
// const [adminProfilePhotoUrl, setAdminProfilePhotoUrl] = useState("");

// const [userData, setUserData] = useState(null);
// const [messages, setMessages] = useState([]);
// const [input, setInput] = useState("");
// const [conversationId, setConversationId] = useState(null);

//   // Fetch on load and poll
//   useEffect(() => {
//     fetchMessages();
//     const interval = setInterval(fetchMessages, 5000); // auto-refresh
//     return () => clearInterval(interval);
//   }, []);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;

//       try {
//         const res = await axios.get(USER_API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Failed to fetch user", err);
//       }
//     };

//     fetchUser();
//   }, [accessToken]);

//   useEffect(() => {
//     const fetchAdminPhoto = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/user/admin-profile/`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setAdminProfilePhotoUrl(res.data.profile_photo);
//       } catch (error) {
//         console.warn("Admin profile photo not found");
//       }
//     };

//     fetchAdminPhoto();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}api/chat/my-conversations/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });

//       if (res.data.length > 0) {
//         const convo = res.data[0];
//         setConversationId(convo.id);
//         setMessages(convo.messages);
//       }
//     } catch (err) {
//       console.error("❌ Error fetching messages", err);
//     }
//   };

//   // Send message
//   const sendMessage = async () => {
//     if (!input.trim() || !conversationId) return;

//     try {
//       await axios.post(
//         `${API_BASE_URL}api/chat/send/`,
//         {
//           conversation: conversationId,
//           content: input,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       setInput("");
//       fetchMessages(); // Refresh messages
//     } catch (err) {
//       console.error("❌ Error sending message", err.response?.data || err);
//     }
//   };

//   return (
//     <div className="platinum-dashboard">
//       {/* Top Navbar */}

//       <nav className="navbar navbar-platinum navbar-expand-lg navbar-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand fw-bold" href="#">
//             PLATINUMTRADE
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarNav"
//             ref={collapseRef}
//           >
//             <ul className="navbar-nav me-auto">
//               {/* Always keep Dashboard */}
//               <li className="nav-item">
//                 <a
//                   className={`nav-link ${
//                     activeSection === "dashboard" ? "active" : ""
//                   }`}
//                   href="#"
//                   onClick={() => handleNavClick("dashboard")}
//                 >
//                   Dashboard
//                 </a>
//               </li>

//               {/* New Items */}
//               {[
//                 // { key: "briefing", label: "Weekly Briefing" },
//                 { key: "webinars", label: "Webinars" },
//                 { key: "challenges", label: "Trading Challenges" },
//                 { key: "portfolio-heatmap", label: "Portfolio Heatmap" },
//                 // { key: "leaderboard", label: "Leaderboard" },
//                 // { key: "schedule-call", label: "Private Coaching" },
//                 { key: "news", label: "News" },
//               ].map(({ key, label }) => (
//                 <li className="nav-item" key={key}>
//                   <a
//                     className={`nav-link ${
//                       activeSection === key ? "active" : ""
//                     }`}
//                     href="#"
//                     onClick={() => handleNavClick(key)}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}

//               {/* ✅ Premium Features Dropdown */}
//               <ul className="navbar-nav">
//                 <li className="nav-item dropdown premium-dropdown">
//                   <a
//                     className="nav-link dropdown-toggle text-white fw-bold"
//                     href="#"
//                     id="premiumDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Premium Features
//                   </a>
//                   <ul
//                     className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
//                     aria-labelledby="premiumDropdown"
//                   >
//                     <li className="dropdown-header">Platinum Exclusives</li>

//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("briefing")}
//                       >
//                         <i className="bi bi-file-earmark-text me-2"></i> Weekly
//                         Briefing
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("webinars")}
//                       >
//                         <i className="bi bi-easel me-2"></i> Webinars
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("news")}
//                       >
//                         <i className="bi bi-newspaper me-2"></i> News
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("leaderboard")}
//                       >
//                         <i className="bi bi-trophy me-2"></i> Leaderboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("challenges")}
//                       >
//                         <i className="bi bi-bar-chart-line me-2"></i> Trading
//                         Challenges
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("schedule-call")}
//                       >
//                         <i className="bi bi-person-workspace me-2"></i> Private
//                         Coaching
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("feature-voting")}
//                       >
//                         <i className="bi bi-stars me-2"></i> Feature Voting
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("membership-nft")}
//                       >
//                         <i className="bi bi-gem me-2"></i> Membership NFT
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("journal-page")}
//                       >
//                         <i className="bi bi-bar-chart-line me-2"></i> Trade
//                         Journal
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </ul>

//             <div className="d-flex align-items-center position-relative profile-wrapper">
//               {/* Notifications */}
//               <div className="position-relative me-3">
//                 <i className="bi bi-bell fs-5 text-light"></i>
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
//                   3
//                 </span>
//               </div>
//               {/* Messages */}
//               <div className="position-relative me-3">
//                 <i className="bi bi-chat fs-5 text-light"></i>
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
//                   5
//                 </span>
//               </div>
//               {/* Avatar and Custom Dropdown */}
//               <div className="position-relative profile-wrapper">
//                 <div
//                   className="profile-avatar"
//                   id="profileAvatar"
//                   onClick={() => {
//                     const dropdown =
//                       document.querySelector(".profile-dropdown");
//                     dropdown.classList.toggle("show");
//                   }}
//                 >
//                   <span>P</span>
//                 </div>
//                 <div className="profile-dropdown">
//                   <a href="#" className="dropdown-item">
//                     Edit Profile
//                   </a>
//                   <a href="#" className="dropdown-item text-danger">
//                     Logout
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container-fluid p-4">
//         {activeSection === "dashboard" && (
//           <>
//             <div className="row header-section mb-4">
//               <div className="col-md-8">
//                 <h1>Good Afternoon, Platinum Member</h1>
//                 <p className="text-white">
//                   Welcome to your exclusive platinum dashboard. Access premium
//                   features, connect with analysts, and elevate your trading
//                   experience.
//                 </p>
//                 <div className="d-flex flex-wrap align-items-center mt-3">
//                   <span className="badge platinum-badge me-3 mb-2">
//                     Platinum Status
//                   </span>
//                   <div className="call-credits me-3 mb-2">
//                     <i className="bi bi-clock me-1"></i>
//                     <span>Call Credits: 10 hours remaining</span>
//                   </div>
//                   <a href="#" className="benefits-link mb-2">
//                     View Benefits <i className="bi bi-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               <div className="col-md-4 d-flex justify-content-end align-items-start">
//                 <div className="large-profile-avatar">
//                   <span>P</span>
//                 </div>
//               </div>
//             </div>

//             {/* Dashboard Tabs */}
//             <div className="tabs-container mb-4">
//               <div className="nav-tabs">
//                 <button
//                   className={`tab-button ${
//                     activeDashboardTab === "market" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveDashboardTab("market")}
//                 >
//                   Dashboard
//                 </button>
//                 <button
//                   className={`tab-button ${
//                     activeDashboardTab === "schedule-Calls" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveDashboardTab("schedule-Calls")}
//                 >
//                   Schedule Calls
//                 </button>
//                 <button
//                   className={`tab-button ${
//                     activeDashboardTab === "webinars" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveDashboardTab("webinars")}
//                 >
//                   Webinars
//                 </button>
//                 <button
//                   className={`tab-button ${
//                     activeDashboardTab === "leaderboard" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveDashboardTab("leaderboard")}
//                 >
//                   Leaderboard
//                 </button>
//               </div>
//             </div>

//             {/* Dashboard Tab Content */}
//             {activeDashboardTab === "market" && (
//               <div className="row">
//                 <div className="col-lg-7 mb-4">
//                   <div className="card insight-card platinum-card">
//                     <div className="card-body">
//                       <h5 className="card-title mb-4 text-start">
//                         Market Insights
//                       </h5>
//                       <div className="chart-placeholder mb-4">
//                         <svg viewBox="0 0 600 120" className="w-100">
//                           <path
//                             d="M0,60 C100,40 200,80 300,60 C400,40 500,70 600,60"
//                             fill="none"
//                             stroke="#2a3042"
//                             strokeWidth="2"
//                             strokeDasharray="5,5"
//                           />
//                         </svg>
//                       </div>
//                       <div className="market-data">
//                         {[
//                           {
//                             pair: "EUR/USD",
//                             bid: "1.0850",
//                             ask: "1.0852",
//                             trend: "up",
//                           },
//                           {
//                             pair: "GBP/USD",
//                             bid: "1.2450",
//                             ask: "1.2452",
//                             trend: "down",
//                           },
//                           {
//                             pair: "USD/JPY",
//                             bid: "135.50",
//                             ask: "135.52",
//                             trend: "up",
//                           },
//                           {
//                             pair: "BTC/USD",
//                             bid: "63,245.00",
//                             ask: "63,250.00",
//                             trend: "up",
//                           },
//                         ].map(({ pair, bid, ask, trend }) => (
//                           <div className="market-row" key={pair}>
//                             <div className="market-cell currency">
//                               <i
//                                 className={`bi bi-arrow-${
//                                   trend === "up" ? "up" : "down"
//                                 }-right ${
//                                   trend === "up"
//                                     ? "text-success"
//                                     : "text-danger"
//                                 } me-2`}
//                               ></i>
//                               <span>{pair}</span>
//                             </div>
//                             <div className="market-cell">
//                               <div className="price-label">Bid</div>
//                               <div className="price-value">{bid}</div>
//                             </div>
//                             <div className="market-cell">
//                               <div className="price-label">Ask</div>
//                               <div className="price-value">{ask}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 mb-4">
//                   <div className="card chat-card">
//                     <div className="card-body">
//                       <h5 className="card-title mb-4">Chat with Analysts</h5>
//                       <div className="chat-container">
//                         {messages.map((msg) => {
//                           const isCurrentUser =
//                             msg.sender_name === userData?.username;
//                           const isAdmin = !isCurrentUser;

//                           return (
//                             <div
//                               key={msg.id}
//                               className={`chat-message d-flex flex-column ${
//                                 isCurrentUser
//                                   ? "align-items-end"
//                                   : "align-items-start"
//                               } mb-3`}
//                             >
//                               <div className="d-flex align-items-end">
//                                 {!isCurrentUser && (
//                                   <img
//                                     src={
//                                       adminProfilePhotoUrl ||
//                                       "/default-admin.png"
//                                     }
//                                     className="chat-avatar me-2"
//                                     alt="admin"
//                                   />
//                                 )}

//                                 <div className={`message-bubble text-white`}>
//                                   <div className="sender-name text-white fw-bold mb-1">
//                                     {isCurrentUser
//                                       ? "You"
//                                       : msg.sender_name || "Admin"}
//                                   </div>
//                                   <div className="message-text">
//                                     {msg.content}
//                                   </div>
//                                   <div className="message-time text-end mt-1 small">
//                                     {new Date(msg.timestamp).toLocaleTimeString(
//                                       [],
//                                       {
//                                         hour: "2-digit",
//                                         minute: "2-digit",
//                                         hour12: true,
//                                       }
//                                     )}
//                                   </div>
//                                 </div>

//                                 {isCurrentUser && (
//                                   <img
//                                     src={
//                                       userData?.profile_photo ||
//                                       "/default-user.png"
//                                     }
//                                     className="chat-avatar ms-2"
//                                     alt="me"
//                                   />
//                                 )}
//                               </div>
//                             </div>
//                           );
//                         })}

//                         <div className="chat-input-container mt-2">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Type your message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyDown={(e) => {
//                               if (e.key === "Enter") {
//                                 e.preventDefault();
//                                 sendMessage();
//                               }
//                             }}
//                           />

//                           <button className="send-button" onClick={sendMessage}>
//                             <i className="bi bi-send-fill"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {activeDashboardTab === "schedule-Calls" && <ScheduleCall />}
//             {activeDashboardTab === "webinars" && <Wabinars />}
//             {activeDashboardTab === "leaderboard" && <Leaderboard />}
//           </>
//         )}

//         {/* Placeholder for Other Sections */}
//         {activeSection === "briefing" && <WeeklyBriefing />}
//         {activeSection === "challenges" && <TradingChallenges />}
//         {activeSection === "leaderboard" && <Leaderboard />}
//         {activeSection === "news" && <MarketNews />}
//         {activeSection === "schedule-call" && <ScheduleCall />}
//         {activeSection === "webinars" && <Wabinars />}
//         {activeSection === "portfolio-heatmap" && <PortfolioHeatmap />}
//         {activeSection === "feature-voting" && <FeatureVoting />}
//         {activeSection === "membership-nft" && <PlatinumMembershipNFT />}
//         {activeSection === "journal-page" && <JournalPage />}
//       </div>
//     </div>
//   );
// };

// export default PlatinumDashboard;

// import axios from "axios";
// import { useEffect } from "react";
// import React, { useState, useRef } from "react";
// import "../styles/platinumDashboard.css";
// import WeeklyBriefing from "../components/DashboardPlatinum/WeeklyBriefing";
// import Leaderboard from "../components/DashboardPlatinum/Leaderboard";
// import MarketNews from "../components/DashboardPlatinum/MarketNews";
// import Wabinars from "../components/DashboardPlatinum/Wabinars";
// import TradingChallenges from "../components/DashboardPlatinum/TradingChallenge";
// import ScheduleCall from "../components/DashboardPlatinum/ScheduleCall";
// import PortfolioHeatmap from "../components/DashboardPlatinum/PortfolioHeatmap";
// import FeatureVoting from "../components/DashboardPlatinum/FeatureVoting";
// import PlatinumMembershipNFT from "../components/DashboardPlatinum/MembershipNft";
// import JournalPage from "../components/DashboardPlatinum/JournalPage";
// import EditProfile from "../components/DashboardSidebarComp/EditProfile";

// const PlatinumDashboard = () => {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const collapseRef = useRef(null);
//   const [adminProfilePhotoUrl, setAdminProfilePhotoUrl] = useState("");
//   const [userData, setUserData] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [conversationId, setConversationId] = useState(null);
//   const [activeDashboardTab, setActiveDashboardTab] = useState("market");
//   const [showEditProfile, setShowEditProfile] = useState(false);

//   const [unreadMessages, setUnreadMessages] = useState(0);
//   const [unreadNotifications, setUnreadNotifications] = useState(0);
//   const [showMessagesPopup, setShowMessagesPopup] = useState(false);
//   const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

//   const handleNavClick = (key) => {
//     setActiveSection(key);
//     if (collapseRef.current?.classList.contains("show")) {
//       collapseRef.current.classList.remove("show");
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//     const interval = setInterval(fetchMessages, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;
//       try {
//         const res = await axios.get(USER_API_URL, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Failed to fetch user", err);
//       }
//     };
//     fetchUser();
//   }, [accessToken]);

//   useEffect(() => {
//     const fetchAdminPhoto = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/user/profile/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setAdminProfilePhotoUrl(res.data.profile_photo_url);
//       } catch (error) {
//         console.warn("Admin profile photo not found");
//       }
//     };
//     fetchAdminPhoto();
//   }, []);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}api/chat/my-conversations/`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       if (res.data.length > 0) {
//         const convo = res.data[0];
//         setConversationId(convo.id);
//         setMessages(convo.messages);
//       }
//     } catch (err) {
//       console.error("\u274C Error fetching messages", err);
//     }
//   };

//   const sendMessage = async () => {
//     if (!input.trim() || !conversationId) return;
//     try {
//       await axios.post(
//         `${API_BASE_URL}api/chat/send/`,
//         { conversation: conversationId, content: input },
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );
//       setInput("");
//       fetchMessages();
//     } catch (err) {
//       console.error("\u274C Error sending message", err.response?.data || err);
//     }
//   };

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}api/chat/unread-count/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUnreadMessages(res.data.unread_messages);
//         setUnreadNotifications(res.data.unread_notifications);
//       } catch (err) {
//         console.error("Count fetch error", err);
//       }
//     };

//     fetchCounts();
//     const interval = setInterval(fetchCounts, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="platinum-dashboard">
//       {/* Top Navbar */}

//       {showEditProfile && (
//         <div className="edit-profile-modal">
//           <EditProfile />
//           <div className="text-center mt-3">
//             <button
//               className="btn btn-danger"
//               onClick={() => setShowEditProfile(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <nav className="navbar navbar-platinum navbar-expand-lg navbar-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand fw-bold" href="#">
//             PLATINUMTRADE
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse"
//             id="navbarNav"
//             ref={collapseRef}
//           >
//             <ul className="navbar-nav me-auto">
//               {/* Always keep Dashboard */}
//               <button
//                 className={`tab-button ${
//                   activeDashboardTab === "market" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveDashboardTab("market")}
//               >
//                 Dashboard
//               </button>

//               {/* New Items */}
//               {[
//                 // { key: "briefing", label: "Weekly Briefing" },
//                 { key: "webinars", label: "Webinars" },
//                 { key: "challenges", label: "Trading Challenges" },
//                 { key: "portfolio-heatmap", label: "Portfolio Heatmap" },
//                 // { key: "leaderboard", label: "Leaderboard" },
//                 // { key: "schedule-call", label: "Private Coaching" },
//                 { key: "news", label: "News" },
//               ].map(({ key, label }) => (
//                 <li className="nav-item" key={key}>
//                   <a
//                     className={`nav-link ${
//                       activeSection === key ? "active" : ""
//                     }`}
//                     href="#"
//                     onClick={() => handleNavClick(key)}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}

//               {/*  Premium Features Dropdown */}
//               <ul className="navbar-nav">
//                 <li className="nav-item dropdown premium-dropdown">
//                   <a
//                     className="nav-link dropdown-toggle text-white fw-bold"
//                     href="#"
//                     id="premiumDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Premium Features
//                   </a>
//                   <ul
//                     className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
//                     aria-labelledby="premiumDropdown"
//                   >
//                     <li className="dropdown-header">Platinum Exclusives</li>

//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("briefing")}
//                       >
//                         <i className="bi bi-file-earmark-text me-2"></i> Weekly
//                         Briefing
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("webinars")}
//                       >
//                         <i className="bi bi-easel me-2"></i> Webinars
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("news")}
//                       >
//                         <i className="bi bi-newspaper me-2"></i> News
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("leaderboard")}
//                       >
//                         <i className="bi bi-trophy me-2"></i> Leaderboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("challenges")}
//                       >
//                         <i className="bi bi-bar-chart-line me-2"></i> Trading
//                         Challenges
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("schedule-call")}
//                       >
//                         <i className="bi bi-person-workspace me-2"></i> Private
//                         Coaching
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("feature-voting")}
//                       >
//                         <i className="bi bi-stars me-2"></i> Feature Voting
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("membership-nft")}
//                       >
//                         <i className="bi bi-gem me-2"></i> Membership NFT
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="dropdown-item"
//                         href="#"
//                         onClick={() => handleNavClick("journal-page")}
//                       >
//                         <i className="bi bi-bar-chart-line me-2"></i> Trade
//                         Journal
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </ul>

//             <div className="d-flex align-items-center position-relative profile-wrapper">
//               {/* Notifications */}
//               <div
//                 className="position-relative me-3"
//                 onClick={() =>
//                   setShowNotificationsPopup(!showNotificationsPopup)
//                 }
//               >
//                 <i className="bi bi-bell fs-5 text-light"></i>
//                 {unreadNotifications > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
//                     {unreadNotifications}
//                   </span>
//                 )}
//               </div>

//               {/* Messages */}
//               <div
//                 className="position-relative me-3"
//                 onClick={() => setShowMessagesPopup(!showMessagesPopup)}
//               >
//                 <i className="bi bi-chat fs-5 text-light"></i>
//                 {unreadMessages > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
//                     {unreadMessages}
//                   </span>
//                 )}
//               </div>

//               {/* Avatar and Custom Dropdown */}
//               <div className="position-relative profile-wrapper">
//                 <div
//                   className="profile-avatar"
//                   id="profileAvatar"
//                   onClick={() => {
//                     const dropdown =
//                       document.querySelector(".profile-dropdown");
//                     dropdown.classList.toggle("show");
//                   }}
//                 >
//                   {userData?.profile_photo_url ? (
//                     <img
//                       src={userData.profile_photo_url}
//                       alt="Profile"
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                         borderRadius: "50%",
//                       }}
//                     />
//                   ) : (
//                     <span>P</span>
//                   )}
//                 </div>

//                 {/* <div
//                   className="profile-avatar"
//                   id="profileAvatar"
//                   onClick={() => {
//                     const dropdown =
//                       document.querySelector(".profile-dropdown");
//                     dropdown.classList.toggle("show");
//                   }}
//                 >
//                   <span>P</span>
//                 </div> */}
//                 <div className="profile-dropdown">
//                   <a
//                     href="#"
//                     className="dropdown-item"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setShowEditProfile(true);
//                     }}
//                   >
//                     Edit Profile
//                   </a>

//                   <a href="#" className="dropdown-item text-danger">
//                     Logout
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "../styles/platinumDashboard.css";
import WeeklyBriefing from "../components/DashboardPlatinum/WeeklyBriefing";
import Leaderboard from "../components/DashboardPlatinum/Leaderboard";
import MarketNews from "../components/DashboardPlatinum/MarketNews";
import Wabinars from "../components/DashboardPlatinum/Wabinars";
import TradingChallenges from "../components/DashboardPlatinum/TradingChallenge";
import ScheduleCall from "../components/DashboardPlatinum/ScheduleCall";
import PortfolioHeatmap from "../components/DashboardPlatinum/PortfolioHeatmap";
import FeatureVoting from "../components/DashboardPlatinum/FeatureVoting";
import PlatinumMembershipNFT from "../components/DashboardPlatinum/MembershipNft";
import JournalPage from "../components/DashboardPlatinum/JournalPage";
import EditProfile from "../components/DashboardSidebarComp/EditProfile";

const PlatinumDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const collapseRef = useRef(null);
  const [adminProfilePhotoUrl, setAdminProfilePhotoUrl] = useState("");
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [activeDashboardTab, setActiveDashboardTab] = useState("market");
  const [showEditProfile, setShowEditProfile] = useState(false);

  const [unreadMessages, setUnreadMessages] = useState(0);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [callCredits, setCallCredits] = useState(null);

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  const handleNavClick = (key) => {
    setActiveSection(key);
    if (collapseRef.current?.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  };

  const handleNotificationsClick = () => {
    setShowNotificationsPopup(!showNotificationsPopup);
    setShowMessagesPopup(false);
    setShowProfileDropdown(false);
  };

  const handleMessagesClick = () => {
    setShowMessagesPopup(!showMessagesPopup);
    setShowNotificationsPopup(false);
    setShowProfileDropdown(false);
  };

  useEffect(() => {
    const fetchCallCredits = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(`${API_BASE_URL}api/callcredits/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (res.data.length > 0) {
          setCallCredits(res.data[0].hours_remaining);
        }
      } catch (error) {
        console.error("Failed to fetch call credits", error);
      }
    };

    fetchCallCredits();
  }, [accessToken]);

  const handleAvatarClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotificationsPopup(false);
    setShowMessagesPopup(false);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(USER_API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };
    fetchUser();
  }, [accessToken]);

  useEffect(() => {
    const fetchAdminPhoto = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/user/profile/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setAdminProfilePhotoUrl(res.data.profile_photo_url);
      } catch (error) {
        console.warn("Admin profile photo not found");
      }
    };
    fetchAdminPhoto();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}api/chat/my-conversations/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (res.data.length > 0) {
        const convo = res.data[0];
        setConversationId(convo.id);
        setMessages(convo.messages);
      }
    } catch (err) {
      console.error("\u274C Error fetching messages", err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !conversationId) return;
    try {
      await axios.post(
        `${API_BASE_URL}api/chat/send/`,
        { conversation: conversationId, content: input },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setInput("");
      fetchMessages();
    } catch (err) {
      console.error("\u274C Error sending message", err.response?.data || err);
    }
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}api/chat/unread-count/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUnreadMessages(res.data.unread_messages);
        setUnreadNotifications(res.data.unread_notifications);
      } catch (err) {
        console.error("Count fetch error", err);
      }
    };

    fetchCounts();
    const interval = setInterval(fetchCounts, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="platinum-dashboard">
      {/* Your Full Existing Navbar Code */}

      <nav className="navbar navbar-platinum navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            PLATINUMTRADE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav me-auto">
              {/* Always keep Dashboard */}
              <button
                className={`tab-button ${
                  activeDashboardTab === "market" ? "active" : ""
                }`}
                onClick={() => setActiveDashboardTab("market")}
              >
                Dashboard
              </button>

              {/* New Items */}
              {[
                // { key: "briefing", label: "Weekly Briefing" },
                { key: "webinars", label: "Webinars" },
                { key: "challenges", label: "Trading Challenges" },
                { key: "portfolio-heatmap", label: "Portfolio Heatmap" },
                // { key: "leaderboard", label: "Leaderboard" },
                // { key: "schedule-call", label: "Private Coaching" },
                { key: "news", label: "News" },
              ].map(({ key, label }) => (
                <li className="nav-item" key={key}>
                  <a
                    className={`nav-link ${
                      activeSection === key ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleNavClick(key)}
                  >
                    {label}
                  </a>
                </li>
              ))}

              {/*  Premium Features Dropdown */}
              <ul className="navbar-nav">
                <li className="nav-item dropdown premium-dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    href="#"
                    id="premiumDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Premium Features
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    aria-labelledby="premiumDropdown"
                  >
                    <li className="dropdown-header">Platinum Exclusives</li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("briefing")}
                      >
                        <i className="bi bi-file-earmark-text me-2"></i> Weekly
                        Briefing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("webinars")}
                      >
                        <i className="bi bi-easel me-2"></i> Webinars
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("news")}
                      >
                        <i className="bi bi-newspaper me-2"></i> News
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("leaderboard")}
                      >
                        <i className="bi bi-trophy me-2"></i> Leaderboard
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("challenges")}
                      >
                        <i className="bi bi-bar-chart-line me-2"></i> Trading
                        Challenges
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("schedule-call")}
                      >
                        <i className="bi bi-person-workspace me-2"></i> Private
                        Coaching
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("feature-voting")}
                      >
                        <i className="bi bi-stars me-2"></i> Feature Voting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("membership-nft")}
                      >
                        <i className="bi bi-gem me-2"></i> Membership NFT
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleNavClick("journal-page")}
                      >
                        <i className="bi bi-bar-chart-line me-2"></i> Trade
                        Journal
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>

            <div className="d-flex align-items-center position-relative">
              {/* Notifications Bell */}
              <div
                className="position-relative me-3"
                onClick={handleNotificationsClick}
              >
                <i className="bi bi-bell fs-5 text-light"></i>
                {unreadNotifications > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                    {unreadNotifications}
                  </span>
                )}
                {showNotificationsPopup && (
                  <div className="popup-box">
                    {" "}
                    {/* Notification Popup */}
                    <div>No new notifications</div>
                  </div>
                )}
              </div>

              {/* Messages Chat */}
              <div
                className="position-relative me-3"
                onClick={handleMessagesClick}
              >
                <i className="bi bi-chat fs-5 text-light"></i>
                {unreadMessages > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                    {unreadMessages}
                  </span>
                )}
                {showMessagesPopup && (
                  <div className="popup-box">
                    {" "}
                    {/* Messages Popup */}
                    <div>No new messages</div>
                  </div>
                )}
              </div>

              {/* Profile Avatar */}
              <div className="position-relative profile-wrapper">
                <div
                  className="profile-avatar"
                  id="profileAvatar"
                  onClick={handleAvatarClick}
                >
                  {userData?.profile_photo_url ? (
                    <img
                      src={userData.profile_photo_url}
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <span>P</span>
                  )}
                </div>

                {showProfileDropdown && (
                  <div className="profile-dropdown">
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowEditProfile(true);
                      }}
                    >
                      Edit Profile
                    </a>
                    <a href="#" className="dropdown-item text-danger">
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showEditProfile && (
        <div className="edit-profile-modal">
          <EditProfile />
          <div className="text-center">
            <button
              className="btn btn-danger"
              onClick={() => setShowEditProfile(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-fluid p-4">
        {activeSection === "dashboard" && (
          <>
            <div className="row header-section mb-4">
              <div className="col-md-8">
                <h1>Good Afternoon, Platinum Member</h1>
                <p className="text-white">
                  Welcome to your exclusive platinum dashboard. Access premium
                  features, connect with analysts, and elevate your trading
                  experience.
                </p>
                <div className="d-flex flex-wrap align-items-center mt-3">
                  <div className="call-credits me-3 mb-2">
                    <i className="bi bi-clock me-1"></i>
                    <span>
                      Call Credits:{" "}
                      {callCredits !== null
                        ? `${callCredits} hours remaining`
                        : "Loading..."}
                    </span>
                  </div>

                  <a href="#" className="benefits-link mb-2">
                    View Benefits <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-end align-items-start">
                <div className="large-profile-avatar">
                  {userData?.profile_photo_url ? (
                    <img
                      src={userData.profile_photo_url}
                      alt="Profile"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <span>P</span>
                  )}
                </div>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="tabs-container mb-4">
              <div className="nav-tabs">
                <button
                  className="tab-button"
                  onClick={() => setActiveDashboardTab("market")}
                  // className={`tab-button ${
                  //   activeDashboardTab === "market" ? "active" : ""
                  // }`}
                  // onClick={() => setActiveDashboardTab("market")}
                >
                  Dashboard
                </button>
                <button
                  className="tab-button"
                  // className={`tab-button ${
                  //   activeDashboardTab === "schedule-Calls" ? "active" : ""
                  // }`}
                  onClick={() => setActiveDashboardTab("schedule-Calls")}
                >
                  Schedule Calls
                </button>
                <button
                  className="tab-button"
                  // className={`tab-button ${
                  //   activeDashboardTab === "webinars" ? "active" : ""
                  // }`}
                  onClick={() => setActiveDashboardTab("webinars")}
                >
                  Webinars
                </button>
                <button
                  className="tab-button"
                  // className={`tab-button ${
                  //   activeDashboardTab === "leaderboard" ? "active" : ""
                  // }`}
                  onClick={() => setActiveDashboardTab("leaderboard")}
                >
                  Leaderboard
                </button>
              </div>
            </div>

            {/* Dashboard Tab Content */}
            {activeDashboardTab === "market" && (
              <div className="row">
                <div className="col-lg-7 mb-4">
                  <div className="card insight-card platinum-card">
                    <div className="card-body">
                      <h5 className="card-title mb-4 text-start">
                        Market Insights
                      </h5>
                      <div className="chart-placeholder mb-4">
                        <svg viewBox="0 0 600 120" className="w-100">
                          <path
                            d="M0,60 C100,40 200,80 300,60 C400,40 500,70 600,60"
                            fill="none"
                            stroke="#2a3042"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                        </svg>
                      </div>
                      <div className="market-data">
                        {[
                          {
                            pair: "EUR/USD",
                            bid: "1.0850",
                            ask: "1.0852",
                            trend: "up",
                          },
                          {
                            pair: "GBP/USD",
                            bid: "1.2450",
                            ask: "1.2452",
                            trend: "down",
                          },
                          {
                            pair: "USD/JPY",
                            bid: "135.50",
                            ask: "135.52",
                            trend: "up",
                          },
                          {
                            pair: "BTC/USD",
                            bid: "63,245.00",
                            ask: "63,250.00",
                            trend: "up",
                          },
                        ].map(({ pair, bid, ask, trend }) => (
                          <div className="market-row" key={pair}>
                            <div className="market-cell currency">
                              <i
                                className={`bi bi-arrow-${
                                  trend === "up" ? "up" : "down"
                                }-right ${
                                  trend === "up"
                                    ? "text-success"
                                    : "text-danger"
                                } me-2`}
                              ></i>
                              <span>{pair}</span>
                            </div>
                            <div className="market-cell">
                              <div className="price-label">Bid</div>
                              <div className="price-value">{bid}</div>
                            </div>
                            <div className="market-cell">
                              <div className="price-label">Ask</div>
                              <div className="price-value">{ask}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-4">
                  <div className="card chat-card">
                    <div className="card-body">
                      <h5 className="card-title mb-4">Platinum member Chat</h5>
                      <div className="chat-container">
                        {messages.map((msg) => {
                          const isCurrentUser =
                            msg.sender_name === userData?.username;
                          const profilePhoto = isCurrentUser
                            ? userData?.profile_photo_url
                            : msg.sender_profile_photo_url;
                          return (
                            <div
                              key={msg.id}
                              className={`chat-message d-flex flex-column ${
                                isCurrentUser
                                  ? "align-items-end"
                                  : "align-items-start"
                              } mb-3`}
                            >
                              <div className="d-flex align-items-end">
                                {/* Other User Avatar (Left) */}
                                {!isCurrentUser && (
                                  <img
                                    src={profilePhoto || "/default-user.png"}
                                    className="chat-avatar me-2"
                                    alt="Sender"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}

                                {/* Message Bubble */}
                                <div className="message-bubble text-white">
                                  <div className="sender-name text-white fw-bold mb-1">
                                    {isCurrentUser ? "You" : msg.sender_name}
                                  </div>
                                  <div className="message-text">
                                    {msg.content}
                                  </div>
                                  <div className="message-time text-end mt-1 small">
                                    {new Date(msg.timestamp).toLocaleTimeString(
                                      [],
                                      {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      }
                                    )}
                                  </div>
                                </div>

                                {/* Current User Avatar (Right) */}
                                {isCurrentUser && (
                                  <img
                                    src={profilePhoto || "/default-user.png"}
                                    className="chat-avatar ms-2"
                                    alt="Me"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          );
                        })}
                        <div className="chat-input-container mt-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                sendMessage();
                              }
                            }}
                          />

                          <button className="send-button" onClick={sendMessage}>
                            <i className="bi bi-send-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeDashboardTab === "schedule-Calls" && <ScheduleCall />}
            {activeDashboardTab === "webinars" && <Wabinars />}
            {activeDashboardTab === "leaderboard" && <Leaderboard />}
          </>
        )}

        {/* Placeholder for Other Sections */}
        {activeSection === "briefing" && <WeeklyBriefing />}
        {activeSection === "challenges" && <TradingChallenges />}
        {activeSection === "leaderboard" && <Leaderboard />}
        {activeSection === "news" && <MarketNews />}
        {activeSection === "schedule-call" && <ScheduleCall />}
        {activeSection === "webinars" && <Wabinars />}
        {activeSection === "portfolio-heatmap" && <PortfolioHeatmap />}
        {activeSection === "feature-voting" && <FeatureVoting />}
        {activeSection === "membership-nft" && <PlatinumMembershipNFT />}
        {activeSection === "journal-page" && <JournalPage />}
      </div>
    </div>
  );
};

export default PlatinumDashboard;
