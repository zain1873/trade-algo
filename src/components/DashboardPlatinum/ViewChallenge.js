// import React, { useState } from "react";

// function ViewChallenge() {
//   const [answer, setAnswer] = useState("");
//   const [screenshot, setScreenshot] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   // Sample challenge data (you would fetch this from API in real app)
//   const challenge = {
//     deadline: "May 10, 2025",
//   };

//   const handleAnswerChange = (e) => {
//     setAnswer(e.target.value);
//   };

//   const handleScreenshotChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setScreenshot(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // In a real app, you would send this data to a backend
//     console.log("Submitting:", { answer, screenshot });

//     // Show success message
//     setSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setSubmitted(false);
//       setAnswer("");
//       setScreenshot(null);
//       setPreviewUrl("");
//     }, 3000);
//   };

//   return (
//     <div className="challenge-container">
//       <div className="challenge-header-details">
//         <h2>{challenge.title}</h2>
//         <div className="challenge-meta">
//           <span className="badge-challenge bg-primary me-2">
//             Deadline: {challenge.deadline}
//           </span>
//         </div>
//       </div>

//       <div className="challenge-description-details">
//         <h4>Challenge Description:</h4>
//         <p>{challenge.description}</p>
//       </div>

//       <div className="submission-form">
//         <h4>Your Submission</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 challenge-form">
//             <label htmlFor="answerText" className="form-label">
//               Your Answer:
//             </label>
//             <textarea
//               id="answerText"
//               className="form-control"
//               rows="6"
//               value={answer}
//               onChange={handleAnswerChange}
//               placeholder="Type your answer here..."
//               required
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="screenshotUpload" className="form-label">
//               Upload Screenshot:
//             </label>
//             <input
//               type="file"
//               className="form-control"
//               id="screenshotUpload"
//               accept="image/*"
//               onChange={handleScreenshotChange}
//               required
//             />

//             {previewUrl && (
//               <div className="screenshot-preview mt-2">
//                 <h5>Preview:</h5>
//                 <img
//                   src={previewUrl}
//                   alt="Screenshot preview"
//                   className="img-thumbnail"
//                 />
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary submit-btn"
//             disabled={submitted}
//           >
//             {submitted ? "Submitted!" : "Submit Answer"}
//           </button>

//           {submitted && (
//             <div className="alert alert-success mt-3" role="alert">
//               Your challenge answer has been submitted successfully!
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ViewChallenge;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewChallenge() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [answer, setAnswer] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchChallenge = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const res = await axios.get(
          `https://valourwealthdjango-production.up.railway.app/api/challenges/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setChallenge(res.data);
      } catch (err) {
        console.error("Failed to load challenge", err);
      }
    };

    fetchChallenge();
  }, [id]);

  const handleAnswerChange = (e) => setAnswer(e.target.value);
  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("answer", answer);
    formData.append("screenshot", screenshot);
    formData.append("challenge", id);

    try {
      await axios.post(
        "https://valourwealthdjango-production.up.railway.app/api/challenge-participants/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setAnswer("");
        setScreenshot(null);
        setPreviewUrl("");
      }, 3000);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Submission failed");
    }
  };

  if (!challenge) return <div>Loading challenge details...</div>;

  return (
    <div className="challenge-container">
      <div className="challenge-header-details">
        <h2>{challenge.title}</h2>
        <div className="challenge-meta">
          <span className="badge-challenge bg-primary me-2">
            Deadline: {challenge.end_date}
          </span>
        </div>
      </div>

      <div className="challenge-description-details">
        <h4>Challenge Description:</h4>
        <p>{challenge.description}</p>
      </div>

      <div className="submission-form">
        <h4>Your Submission</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 challenge-form">
            <label htmlFor="answerText" className="form-label">
              Your Answer:
            </label>
            <textarea
              id="answerText"
              className="form-control"
              rows="6"
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Type your answer here..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="screenshotUpload" className="form-label">
              Upload Screenshot:
            </label>
            <input
              type="file"
              className="form-control"
              id="screenshotUpload"
              accept="image/*"
              onChange={handleScreenshotChange}
              required
            />
            {previewUrl && (
              <div className="screenshot-preview mt-2">
                <h5>Preview:</h5>
                <img
                  src={previewUrl}
                  alt="Screenshot preview"
                  className="img-thumbnail"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={submitted}
          >
            {submitted ? "Submitted!" : "Submit Answer"}
          </button>

          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Your challenge answer has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ViewChallenge;
