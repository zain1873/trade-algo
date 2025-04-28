// import React, { useState } from "react";
// import FeatureVotingTabs from "./FeatureVotingTabs";

// function FeatureVoting() {
//   const [featureTitle, setFeatureTitle] = useState("");
//   const [featureDescription, setFeatureDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ featureTitle, featureDescription });
//     // Reset form
//     setFeatureTitle("");
//     setFeatureDescription("");
//   };

//   return (
//     <div className="feature-voting-container">
//       <div className="header">
//         <div className="icon-container">
//           <i className="bi bi-check-square"></i>
//         </div>
//         <div className="title-container">
//           <h1>Early Access & Voting</h1>
//           <p>
//             Shape the future of our platform with your exclusive voting power
//           </p>
//         </div>
//       </div>

//       <div className="form-container">
//         <div className="card p-0">
//           <div className="card-body">
//             <h2 className="form-title text-white">Submit a Feature Request</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="featureTitle" className="form-label">
//                   Feature Title
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="featureTitle"
//                   placeholder="Enter a clear, concise title for your feature request"
//                   value={featureTitle}
//                   onChange={(e) => setFeatureTitle(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="featureDescription" className="form-label">
//                   Feature Description
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="featureDescription"
//                   rows="5"
//                   placeholder="Describe the feature in detail, including how it would benefit platinum members"
//                   value={featureDescription}
//                   onChange={(e) => setFeatureDescription(e.target.value)}
//                   required
//                 ></textarea>
//               </div>
//               <div className="d-grid">
//                 <button
//                   type="submit"
//                   className="btn submit-btn-feature text-white"
//                 >
//                   <i className="bi bi-lightbulb me-2"></i>
//                   Submit Feature Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <FeatureVotingTabs />
//     </div>
//   );
// }

// export default FeatureVoting;

import React, { useState } from "react";
import axios from "axios";
import FeatureVotingTabs from "./FeatureVotingTabs";
import "../DashboardSidebarComp/styles/mentorship.css"; // apka styling import already tha

function FeatureVoting() {
  const [featureTitle, setFeatureTitle] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        FEATURE_API_URL,
        {
          title: featureTitle,
          description: featureDescription,
          deadline: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from today
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Feature submitted successfully:", res.data);
      alert("✅ Feature Request Submitted Successfully!");

      setFeatureTitle("");
      setFeatureDescription("");
    } catch (error) {
      console.error(
        "Error submitting feature:",
        error.response?.data || error.message
      );
      alert("❌ Failed to submit feature. Please try again.");
    }
  };

  return (
    <div className="feature-voting-container">
      <div className="header">
        <div className="icon-container">
          <i className="bi bi-check-square"></i>
        </div>
        <div className="title-container">
          <h1>Early Access & Voting</h1>
          <p>
            Shape the future of our platform with your exclusive voting power
          </p>
        </div>
      </div>

      <div className="form-container">
        <div className="card p-0">
          <div className="card-body">
            <h2 className="form-title text-white">Submit a Feature Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="featureTitle" className="form-label">
                  Feature Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="featureTitle"
                  placeholder="Enter a clear, concise title for your feature request"
                  value={featureTitle}
                  onChange={(e) => setFeatureTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="featureDescription" className="form-label">
                  Feature Description
                </label>
                <textarea
                  className="form-control"
                  id="featureDescription"
                  rows="5"
                  placeholder="Describe the feature in detail, including how it would benefit platinum members"
                  value={featureDescription}
                  onChange={(e) => setFeatureDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn submit-btn-feature text-white"
                >
                  <i className="bi bi-lightbulb me-2"></i>
                  Submit Feature Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FeatureVotingTabs />
    </div>
  );
}

export default FeatureVoting;
