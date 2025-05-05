// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "../DashboardSidebarComp/styles/mentorship.css";
// // import PlatinumCard from "../DashboardSidebarComp/platinumCard";
// // import SalesContactForm from "./sales-form";

// // const Mentorship = ({ darkMode }) => {
// //   const [userData, setUserData] = useState(null);
// //   const accessToken = localStorage.getItem("accessToken");
// //   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
// //     ? process.env.REACT_APP_API_URL
// //     : process.env.REACT_APP_API_URL + "/";
// //   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;
// //   const [showForm, setShowForm] = useState(false);

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       if (!accessToken) return;

// //       try {
// //         const res = await axios.get(USER_API_URL, {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         });
// //         setUserData(res.data);
// //       } catch (err) {
// //         console.error("Error fetching user:", err);
// //       }
// //     };

// //     fetchUser();
// //   }, [accessToken]);

// //   // ✅ If user is platinum, redirect automatically
// //   useEffect(() => {
// //     if (userData?.subscription_status === "platinum") {
// //       window.location.href = "/platinum-dashboard";
// //     }
// //   }, [userData]);

// //   // ⛔ If user is NOT platinum, show PlatinumCard
// //   if (userData && userData.subscription_status !== "platinum") {
// //     return (
// //       <div className="container mt-5">
// //         <button onClick={() => setShowForm(true)}>Open Sales Form</button>;
// //         {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
// //         <PlatinumCard />
// //       </div>
// //     );
// //   }

// //   //  While loading user data, show nothing or a loader
// //   if (!userData) {
// //     return <div className="text-center mt-5">Loading...</div>;
// //   }

// //   return null;
// // };

// // export default Mentorship;

// import React from "react";
// import platinumIMg from "../DashboardSidebarComp/platinum-1.jpg";
// import platinumIMg1 from "../DashboardSidebarComp/platinum-2.jpg";

// function Platinum() {
//   return (
//     <div className="container mt-4">
//       {/* <PlatinumCard/> */}
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-4">
//             <div class="platinum_img">
//               <img
//                 className="obj_fit"
//                 src={platinumIMg}
//                 alt=""
//                 style={{ borderRadius: "20px" }}
//               />
//             </div>
//           </div>

//           <div class="col-lg-4">
//             <div class="platinum_img">
//               <img
//                 className="obj_fit"
//                 src={platinumIMg1}
//                 alt=""
//                 style={{ borderRadius: "20px" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//
//     </div>
//   );
// }

// export default Platinum;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../DashboardSidebarComp/styles/mentorship.css";
import PlatinumCard from "../DashboardSidebarComp/platinumCard";
import SalesContactForm from "./sales-form";
import platinumImg1 from "../DashboardSidebarComp/platinum-1.jpg";
import platinumImg2 from "../DashboardSidebarComp/platinum-2.jpg";

const Platinum = () => {
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;
      try {
        const res = await axios.get(USER_API_URL, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [accessToken]);

  // ✅ Redirect platinum users
  useEffect(() => {
    if (userData?.subscription_status === "platinum") {
      window.location.href = "/platinum-dashboard";
    }
  }, [userData]);

  // 🟡 Show Platinum sign-up for others
  if (userData && userData.subscription_status !== "platinum") {
    return (
      <div className="container mt-5">
        <div className="row text-center mb-4">
          <h2>Unlock Platinum Access</h2>
          <p className="text-muted">
            Get mentorship, features, and exclusive tools.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <img
              src={platinumImg1}
              className="img-fluid rounded"
              alt="Platinum 1"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <img
              src={platinumImg2}
              className="img-fluid rounded"
              alt="Platinum 2"
            />
          </div>
        </div>
        <div className="text-center my-4">
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Get Started
          </button>
        </div>
        {showForm && <SalesContactForm onClose={() => setShowForm(false)} />}
        <PlatinumCard />
      </div>
    );
  }

  if (!userData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return null;
};

export default Platinum;
