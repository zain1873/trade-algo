// import React from 'react';
// import './styles/products.css';
// import product1 from "../DashboardSidebarComp/images/product-image1.png";
// // Assuming you have these additional images
// import product2 from "../DashboardSidebarComp/images/product-img-2.png";
// import product3 from "../DashboardSidebarComp/images/product-image3.png";
// import product4 from "../DashboardSidebarComp/images/product-image4.png";
// import product5 from "../DashboardSidebarComp/images/product-image5.png";
// import product6 from "../DashboardSidebarComp/images/product-image6.png";
// import product7 from "../DashboardSidebarComp/images/product7.png";
// import product8 from "../DashboardSidebarComp/images/product8.png";
// import product9 from "../DashboardSidebarComp/images/product9.png";
// import product10 from "../DashboardSidebarComp/images/product10.png";

// const LiveSessionsCard = () => {
//   // Array of card data
//   const cardData = [
//     {
//       id: 1,
//       image: product1,
//       title: "Live Sessions",
//       description: "Access real-time trading sessions with expert analysts providing market insights and trading opportunities.",
//       features: [
//         { icon: "clock", text: "Real-time market analysis" },
//         { icon: "chart", text: "Expert commentary" }
//       ]
//     },
//     {
//       id: 2,
//       image: product2,
//       title: "Dark Pool",
//       description: "Detailed reports on market trends, economic indicators, and potential investment opportunities.",
//       features: [
//         { icon: "clock", text: "Comprehensive research" },
//         { icon: "chart", text: "Weekly updates" }
//       ]
//     },
//     {
//       id: 3,
//       image: product3,
//       title: "Trading Tools",
//       description: "Receive precise entry and exit points for trades across multiple financial markets.",
//       features: [
//         { icon: "clock", text: "High-probability setups" },
//         { icon: "chart", text: "Instant alerts" }
//       ]
//     },
//     {
//       id: 4,
//       image: product4,
//       title: "Resources",
//       description: "Learn trading strategies and market concepts through our library of videos and articles.",
//       features: [
//         { icon: "clock", text: "On-demand lessons" },
//         { icon: "chart", text: "Beginner to advanced" }
//       ]
//     },
//     {
//       id: 5,
//       image: product5,
//       title: "ValourWealth Products",
//       description: "Tools and guidance for optimizing your investment portfolio for maximum returns.",
//       features: [
//         { icon: "clock", text: "Risk assessment" },
//         { icon: "chart", text: "Custom allocations" }
//       ]
//     },
//     {
//       id: 6,
//       image: product6,
//       title: "Wealth Management Series",
//       description: "Personal mentoring sessions with experienced traders tailored to your needs.",
//       features: [
//         { icon: "clock", text: "Personalized guidance" },
//         { icon: "chart", text: "Flexible scheduling" }
//       ]
//     },
//     {
//       id: 7,
//       image: product7,
//       title: "Emerald Inc",
//       description: "Connect with fellow traders to share ideas, strategies, and market perspectives.",
//       features: [
//         { icon: "clock", text: "Active discussion boards" },
//         { icon: "chart", text: "Weekly Q&A sessions" }
//       ]
//     },
//     {
//       id: 8,
//       image: product8,
//       title: "Platinum Program",
//       description: "Stay informed about upcoming economic events that could impact financial markets.",
//       features: [
//         { icon: "clock", text: "Major market events" },
//         { icon: "chart", text: "Customizable alerts" }
//       ]
//     },
//     {
//       id: 9,
//       image: product9,
//       title: "Trading Academy",
//       description: "Access to proprietary technical indicators designed to identify market trends.",
//       features: [
//         { icon: "clock", text: "Momentum indicators" },
//         { icon: "chart", text: "Pattern recognition" }
//       ]
//     },
//     {
//       id: 10,
//       image: product10,
//       title: "One on One Mentorship",
//       description: "Calculators and tools to help manage position sizing and risk-to-reward ratios.",
//       features: [
//         { icon: "clock", text: "Capital preservation" },
//         { icon: "chart", text: "Position sizing" }
//       ]
//     }
//   ];

//   return (
//     <div className="container">
//       <div className="row">
//         {cardData.map((card) => (
//           <div className="col-lg-4" key={card.id}>
//             <div className="live-sessions-card">
//               <div className="card-top-img">
//                 <img className='obj_fit' src={card.image} alt={card.title} />
//               </div>
//               <div className="card-content">
//                 <h2>{card.title}</h2>
//                 <p>{card.description}</p>
//                 <div className="features">
//                   {card.features.map((feature, index) => (
//                     <div className="feature" key={index}>
//                       <div className={`feature-icon ${feature.icon}`}></div>
//                       <span>{feature.text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="cta-container">
//                   <a href="#" className="cta-button">Watch Now</a>
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M6 12L10 8L6 4" stroke="#A6B8D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LiveSessionsCard;




import React, { useState } from 'react';
import "../DashboardSidebarComp/styles/products.css";
import valourThemeCard from "../DashboardSidebarComp/images/products-theme-card.jpeg";
import valourThemeCard2 from "../DashboardSidebarComp/images/products-theme-card2.jpeg";
import TradeGpt from "../DashboardSidebarComp/images/TradeGPT.png";
import TradingAcademy from "../DashboardSidebarComp/images/Trading Academy.png";
import oneMentorship from "../DashboardSidebarComp/images/1 on 1  Mentrship.png";



function TradeProducts({ darkMode, setActiveTab }) {
  const [activeState, setAciveState] = useState("valour-products");

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("wealth-series")}
            >
              <img
                className="obj_fit"
                src={valourThemeCard}
                alt="Wealth Series"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("platinum")}
            >
              <img
                className="obj_fit"
                src={valourThemeCard2}
                alt="Platinum Program"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("tradegpt")}
            >
              <img
                className="obj_fit"
                src={TradeGpt}
                alt="TradeGPT"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("options-academy")}
            >
              <img
                className="obj_fit"
                src={TradingAcademy}
                alt="Trading Academy"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="valour-products-theme-card"
              onClick={() => setActiveTab("mentorship")}
            >
              <img
                className="obj_fit"
                src={oneMentorship}
                alt="1-on-1 Mentorship"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TradeProducts;
