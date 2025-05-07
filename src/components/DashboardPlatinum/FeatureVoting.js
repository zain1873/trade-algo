// import React, { useState } from "react";
// import axios from "axios";
// import FeatureVotingTabs from "./FeatureVotingTabs";
// import "../DashboardSidebarComp/styles/mentorship.css"; // apka styling import already tha

// function FeatureVoting() {
//   const [featureTitle, setFeatureTitle] = useState("");
//   const [featureDescription, setFeatureDescription] = useState("");

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const FEATURE_API_URL = `${API_BASE_URL}api/features/`;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         FEATURE_API_URL,
//         {
//           title: featureTitle,
//           description: featureDescription,
//           deadline: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from today
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       console.log("Feature submitted successfully:", res.data);
//       alert("✅ Feature Request Submitted Successfully!");

//       setFeatureTitle("");
//       setFeatureDescription("");
//     } catch (error) {
//       console.error(
//         "Error submitting feature:",
//         error.response?.data || error.message
//       );
//       alert("❌ Failed to submit feature. Please try again.");
//     }
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

import React, { useEffect, useState } from "react";
import axios from "axios";

function FeatureVotingTabs() {
  const [activeTab, setActiveTab] = useState("active");
  const [features, setFeatures] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  const fetchFeatures = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}api/features/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFeatures(res.data);
    } catch (error) {
      console.error("Failed to fetch features:", error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  const handleVote = async (id) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}api/features/${id}/vote/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setFeatures((prev) =>
        prev.map((f) =>
          f.id === id ? { ...f, votes_count: f.votes_count + 1 } : f
        )
      );
    } catch (error) {
      if (error.response?.status === 400) {
        alert("You already voted for this feature.");
      } else {
        console.error("Vote failed:", error);
        alert("Failed to vote. Please try again.");
      }
    }
  };

  const filteredFeatures = features.filter((f) =>
    activeTab === "active" ? f.status === "Voting Open" : f.status === "Closed"
  );

  return (
    <div className="tabs-section">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "active" ? "active" : ""}`}
          onClick={() => setActiveTab("active")}
        >
          Active Voting
        </button>
        <button
          className={`tab ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Features
        </button>
      </div>

      <div className="features-list">
        {filteredFeatures.map((feature) => {
          const votePercent = Math.min(
            (feature.votes_count / feature.votes_needed) * 100,
            100
          );
          return (
            <div key={feature.id} className="feature-card">
              <div className="d-flex align-items-start gap-3">
                <div className="vote-box">
                  <button
                    onClick={() => handleVote(feature.id)}
                    className="btn btn-sm btn-outline-light"
                  >
                    <i className="bi bi-arrow-up"></i>
                  </button>
                  <div className="vote-count">{feature.votes_count} votes</div>
                </div>

                <div className="feature-body">
                  <span className="badge bg-primary mb-2">{feature.status}</span>
                  <h5 className="text-white">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>

                  <div className="vote-progress mb-2">
                    <div className="text-white small">
                      {feature.votes_count} of {feature.votes_needed} votes needed
                    </div>
                    <div className="progress" style={{ height: "6px", background: "#333" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${votePercent}%`, backgroundColor: "#fff" }}
                      ></div>
                    </div>
                  </div>

                  <button
                    className="btn btn-sm btn-outline-light mt-2"
                    onClick={() => handleVote(feature.id)}
                  >
                    Add Vote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureVotingTabs;
