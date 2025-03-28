// import React from 'react'
// import "../DashboardSidebarComp/styles/DashboardData.css"; 
// import HistoricalDataFlow from './HistoricalDataFlow';
// import ProgressBar from './ProgressBar';
// import LiveTrainingSession from './liveTrainingSession';


// function DashboardData({darkMode}) {
//       return (
//         <div className="container">
//            <div className="dashboard-header">
//           <div className="header-content">
//             <div className="header-left">
//               <h2>
//                 Hello, <span className="highlight">ValourWealth</span>
//               </h2>
//               <p>
//                 Here are the top stocks handpicked by our AI from over 10,000
//                 tickers in the <span className="underline">Stock Exchange</span>
//               </p>
//               <p>Choose from the available styles of trading that will suit your needs</p>
//               {/* <div className="buttons">
//                 <button className="btn primary_btn">Intraday Trading</button>
//                 <button className=" btn-outline">Swing Trading</button>
//               </div> */}
//             </div>
//             <div className="header-right">
//               <button className="date-btn">Date: February 24th, 2025</button>
//             </div>
//           </div>         
//         </div>  
//         <LiveTrainingSession />
//         <ProgressBar />
//         <HistoricalDataFlow  darkMode={darkMode}/>
//         </div>
    
//       );
//       };

// export default DashboardData




// import React, { useEffect, useState } from 'react';
// import "../DashboardSidebarComp/styles/DashboardData.css"; 
// import HistoricalDataFlow from './HistoricalDataFlow';
// import ProgressBar from './ProgressBar';
// import LiveTrainingSession from './liveTrainingSession';
// import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//   ? process.env.REACT_APP_API_URL
//   : process.env.REACT_APP_API_URL + "/";

// const USER_API_URL = `${API_BASE_URL}api/user/`;

// function DashboardData({ darkMode }) {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const accessToken = localStorage.getItem("accessToken");
  
//   useEffect(() => {
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
//   }, [accessToken]);

//   return (
//     <div className="container">
//       <div className="dashboard-header">
//         <div className="header-content">
//           <div className="header-left">
//             <h2>
//               Hello! <span className="highlight">{userData ? userData.username : "ValourWealth"}</span>
//             </h2>
//             <p>
//               Here are the top stocks handpicked by our AI from over 10,000 tickers in the Stock Exchange
//             </p>
//             <p>Choose from the available styles of trading that will suit your needs</p>
//           </div>
//           <div className="header-right">
//             <button className="date-btn">
//               Date: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             </button>
//           </div>
//         </div>         
//       </div>  
//       {error && <p className="error-message">{error}</p>}
//       <LiveTrainingSession />
//       <ProgressBar />
//       <HistoricalDataFlow darkMode={darkMode} />
//     </div>
//   );
// }

// export default DashboardData;


import React, { useEffect, useState } from 'react';
import "../DashboardSidebarComp/styles/DashboardData.css"; 
import HistoricalDataFlow from './HistoricalDataFlow';
import ProgressBar from './ProgressBar';
import LiveTrainingSession from './liveTrainingSession';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
  ? process.env.REACT_APP_API_URL
  : process.env.REACT_APP_API_URL + "/";

const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

function DashboardData({ darkMode }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      setError("You need to be logged in to view this data.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(USER_API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("User data response:", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          setError("Session expired or invalid. Please log in again.");
          localStorage.removeItem("accessToken");
        } else {
          setError("Failed to fetch user data. Please try again later.");
        }
      }
    };

    fetchUserData();
  }, [accessToken]);

  return (
    <div className="container">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h2>
              Hello! <span className="highlight">{userData?.username || "ValourWealth"}</span>
            </h2>
            <p>
              Here are the top stocks handpicked by our AI from over 10,000 tickers in the Stock Exchange
            </p>
            <p>Choose from the available styles of trading that will suit your needs</p>
          </div>
          <div className="header-right">
            <button className="date-btn">
              Date: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </button>
          </div>
        </div>         
      </div>  
      {error && <p className="error-message">{error}</p>}
      <LiveTrainingSession />
      <ProgressBar />
      <HistoricalDataFlow darkMode={darkMode} />
    </div>
  );
}

export default DashboardData;
