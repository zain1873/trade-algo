// const AISuggestions = () => {
//   // Sample data for AI suggestions
//   const suggestions = [
//     {
//       id: 1,
//       title: "Exposure",
//       description: "Your portfolio currently down",
//       impact: "High Impact",
//       impactLevel: "high",
//     },
//   ];

//   return (
//     <>
//       <div className="d-flex align-items-center mb-4">
//         <h2 className="ai-suggestions-title">
//           AI-Powered Portfolio Suggestions
//         </h2>
//         <div className="info-icon ms-2">
//           <i className="bi bi-info-circle"></i>
//         </div>
//       </div>

//       <div className="suggestions-container">
//         {suggestions.map((suggestion) => (
//           <div key={suggestion.id} className="suggestion-card">
//             <div className="suggestion-header">
//               {/* <div className="suggestion-icon-title">
//                 <div
//                   className={`suggestion-icon ${suggestion.impactLevel}-icon`}
//                 >
//                   <i className="bi bi-lightbulb"></i>
//                 </div>
//                 <h3 className="suggestion-title">{suggestion.title}</h3>
//               </div> */}
//               <div className={`impact-badge ${suggestion.impactLevel}-impact`}>
//                 {suggestion.impact}
//               </div>
//             </div>

//             <p className="suggestion-description">{suggestion.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AISuggestions;

import axios from "axios";
import { useEffect, useState } from "react";

const AISuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAISuggestions = async () => {
      setLoading(true);
      setError(null);

      try {
        // If you use JWT in localStorage:
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(
          "https://valourwealthdjango-production.up.railway.app/api/portfolio/ai-suggestions/",
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );

        // Expecting response.data to hold an array of suggestion strings or objects
        // e.g. { recommendations: ["Trim ...", "Add ...", ...] }
        const data = response.data;
        if (Array.isArray(data.recommendations)) {
          setSuggestions(
            data.recommendations.map((text, idx) => ({
              id: idx + 1,
              description: text,
              impact: "",
            }))
          );
        } else if (Array.isArray(data)) {
          setSuggestions(data.map((item, idx) => ({ id: idx + 1, ...item })));
        } else {
          setError("Unexpected API response");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load AI suggestions.");
      } finally {
        setLoading(false);
      }
    };

    fetchAISuggestions();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h2 className="ai-suggestions-title">Portfolio Pulse</h2>
        <div className="info-icon ms-2">
          <i className="bi bi-info-circle"></i>
        </div>
      </div>

      {loading && <p>Loading AI suggestions...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="suggestions-container">
        {suggestions.map((sugg) => (
          <div key={sugg.id} className="suggestion-card">
            {sugg.impact && (
              <div className={`impact-badge ${sugg.impactLevel}-impact`}>
                {sugg.impact}
              </div>
            )}
            <p className="suggestion-description">{sugg.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AISuggestions;
