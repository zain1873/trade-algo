// // import React from "react";
// // import "./styles/products.css"; // Import CSS file

// // const products = [
// //   {
// //     title: "ValourWealth TERMINAL",
// //     description: "Experience the full potential of ValourWealth",
// //     buttonText: "Purchase",
// //     imageClass: "card1",
// //   },
// //   {
// //     title: "WS WEALTH SERIES",
// //     description: "Leverage on cutting-edge AI technology with diversification techniques.",
// //     buttonText: "Learn More",
// //     imageClass: "card2",
// //   },
// //   {
// //     title: "EMERALD INCOME ALERTS",
// //     description: "Take Your Trading to the Next Level",
// //     buttonText: "Learn More",
// //     imageClass: "card3",
// //   },
// //   {
// //     title: "PLATINUM PROGRAM",
// //     description: "Profitable Option Trading Made Easy",
// //     buttonText: "Learn More",
// //     imageClass: "card4",
// //   },
// //   {
// //     title: "TRADEGPT",
// //     description: "Empower Your Trading Decisions with AI-Driven Insights",
// //     buttonText: "Learn More",
// //     imageClass: "card5",
// //   },
// //   {
// //     title: "OPTIONS MENTORSHIP",
// //     description: "1 on 1 Mentorship with our analysts and launch your portfolio to new heights",
// //     buttonText: "Learn More",
// //     imageClass: "card6",
// //   },
// //   {
// //     title: "OPTIONS ACADEMY",
// //     description: "Demystify the complexities of trading options",
// //     buttonText: "Learn More",
// //     imageClass: "card7",
// //   },
// // ];

// // const ProductCards = () => {
// //   return (
// //     <div className="container mt-4 blur">
// //       <div className="row">
// //         {products.map((product, index) => (
// //           <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
// //             <div className={`product-card ${product.imageClass}`}>
// //               <h5 className="product-title">{product.title}</h5>
// //               <p className="product-description">{product.description}</p>
// //               <button className="btn product-btn">{product.buttonText}</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCards;

// // this is the final cards
// import React from "react";
// import {
//   FileText,
//   DollarSign,
//   Shield,
//   Diamond,
//   Award,
//   GraduationCap,
//   Users,
//   TrendingUp,
//   BarChart2,
//   Briefcase,
// } from "lucide-react";
// import "./styles/products.css";

// const cardData = [
//   {
//     id: 1,
//     title: "Resources",
//     description:
//       "Access a comprehensive library of educational materials, guides, and research reports.",
//     icon: <FileText className="card-icon" />,
//     features: [
//       { icon: <FileText size={16} />, text: "Trading guides" },
//       { icon: <BarChart2 size={16} />, text: "Market research" },
//     ],
//     ctaText: "Browse Library",
//     accentColor: "#6c757d",
//     bgGradient: "linear-gradient(145deg, #2c3034 0%, #212529 100%)",
//   },
//   {
//     id: 2,
//     title: "ValourWealth Products",
//     description:
//       "Discover our suite of premium financial products designed for serious investors and traders.",
//     icon: <DollarSign className="card-icon" />,
//     features: [
//       { icon: <Award size={16} />, text: "Premium offerings" },
//       { icon: <Shield size={16} />, text: "Exclusive access" },
//     ],
//     ctaText: "View Products",
//     accentColor: "#0d6efd",
//     bgGradient: "linear-gradient(145deg, #1e2a3b 0%, #141e30 100%)",
//   },
//   {
//     id: 3,
//     title: "Wealth Management Series",
//     description:
//       "Comprehensive wealth management solutions for high-net-worth individuals seeking long-term growth.",
//     icon: <Briefcase className="card-icon" />,
//     features: [
//       { icon: <DollarSign size={16} />, text: "Portfolio management" },
//       { icon: <Shield size={16} />, text: "Wealth preservation" },
//     ],
//     ctaText: "Explore Series",
//     accentColor: "#6f42c1",
//     bgGradient: "linear-gradient(145deg, #2c2440 0%, #1c1429 100%)",
//   },
//   {
//     id: 4,
//     title: "Emerald Inc.",
//     description:
//       "Elite investment opportunities through our premium Emerald tier services and exclusive offerings.",
//     icon: <Diamond className="card-icon" />,
//     features: [
//       { icon: <Diamond size={16} />, text: "Elite opportunities" },
//       { icon: <Shield size={16} />, text: "Exclusive investments" },
//     ],
//     ctaText: "Discover Elite",
//     accentColor: "#20c997",
//     bgGradient: "linear-gradient(145deg, #0f2e25 0%, #0d1f1a 100%)",
//   },
//   {
//     id: 5,
//     title: "Platinum Program",
//     description:
//       "Our flagship program offering personalized coaching and premium resources for serious traders.",
//     icon: <Shield className="card-icon" />,
//     features: [
//       { icon: <Users size={16} />, text: "One-on-one coaching" },
//       { icon: <Award size={16} />, text: "Premium resources" },
//     ],
//     ctaText: "Join Program",
//     accentColor: "#adb5bd",
//     bgGradient: "linear-gradient(145deg, #2b3035 0%, #1a1e22 100%)",
//   },
//   {
//     id: 6,
//     title: "Trading Academy",
//     description:
//       "Structured educational programs to develop your trading skills from beginner to advanced levels.",
//     icon: <GraduationCap className="card-icon" />,
//     features: [
//       { icon: <FileText size={16} />, text: "Structured curriculum" },
//       { icon: <Users size={16} />, text: "Expert instructors" },
//     ],
//     ctaText: "Start Learning",
//     accentColor: "#0dcaf0",
//     bgGradient: "linear-gradient(145deg, #0f2d3d 0%, #0a1c25 100%)",
//   },
//   {
//     id: 7,
//     title: "1 on 1 Mentorship",
//     description:
//       "Personalized mentorship with experienced traders tailored to your specific goals and needs.",
//     icon: <Users className="card-icon" />,
//     features: [
//       { icon: <Users size={16} />, text: "Personalized guidance" },
//       { icon: <TrendingUp size={16} />, text: "Strategy development" },
//     ],
//     ctaText: "Connect Now",
//     accentColor: "#6c757d",
//     bgGradient: "linear-gradient(145deg, #2c3034 0%, #212529 100%)",
//   },
//   {
//     id: 8,
//     title: "Market Analysis",
//     description:
//       "In-depth market analysis and insights to help you make informed investment decisions.",
//     icon: <BarChart2 className="card-icon" />,
//     features: [
//       { icon: <TrendingUp size={16} />, text: "Technical analysis" },
//       { icon: <FileText size={16} />, text: "Market reports" },
//     ],
//     ctaText: "Access Analysis",
//     accentColor: "#fd7e14",
//     bgGradient: "linear-gradient(145deg, #3d2c14 0%, #2b1f0e 100%)",
//   },
//   {
//     id: 9,
//     title: "Risk Management",
//     description:
//       "Advanced tools and strategies to protect your investments and minimize potential losses.",
//     icon: <Shield className="card-icon" />,
//     features: [
//       { icon: <Shield size={16} />, text: "Portfolio protection" },
//       { icon: <TrendingUp size={16} />, text: "Risk assessment" },
//     ],
//     ctaText: "Explore Tools",
//     accentColor: "#dc3545",
//     bgGradient: "linear-gradient(145deg, #3d1a1d 0%, #2b1315 100%)",
//   },
//   {
//     id: 10,
//     title: "Investment Strategies",
//     description:
//       "Curated investment strategies designed to meet various financial goals and risk tolerances.",
//     icon: <TrendingUp className="card-icon" />,
//     features: [
//       { icon: <Briefcase size={16} />, text: "Diversified portfolios" },
//       { icon: <Award size={16} />, text: "Performance tracking" },
//     ],
//     ctaText: "View Strategies",
//     accentColor: "#198754",
//     bgGradient: "linear-gradient(145deg, #0f2e1d 0%, #0a1f14 100%)",
//   },
// ];

// const FinancialCards = () => {
//   return (
//     <div class="container">
//       <div className="row g-4">
//         {cardData.map((card) => (
//           <div key={card.id} className="col-md-6 col-lg-4">
//             <div
//               className="financial-card h-100"
//               style={{
//                 background: card.bgGradient,
//                 borderColor: card.accentColor,
//               }}
//             >
//               <div
//                 className="card-icon-wrapper"
//                 style={{ backgroundColor: card.accentColor + "20" }}
//               >
//                 {React.cloneElement(card.icon, { color: card.accentColor })}
//               </div>
//               <h3 className="card-title">{card.title}</h3>
//               <p className="card-description">{card.description}</p>
//               <div className="card-features">
//                 {card.features.map((feature, index) => (
//                   <div key={index} className="feature-item">
//                     <span
//                       className="feature-icon"
//                       style={{ color: card.accentColor }}
//                     >
//                       {feature.icon}
//                     </span>
//                     <span className="feature-text">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="card-cta-wrapper">
//                 <a
//                   href="#"
//                   className="card-cta"
//                   style={{ color: card.accentColor }}
//                 >
//                   {card.ctaText} <span>&rarr;</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FinancialCards;

import React from "react";
// import valourThemeCard from "../DashboardSidebarComp/images/products-theme-card.jpeg";
import valourThemeCard from "../DashboardSidebarComp/images/products-theme-card.jpg";
import valourThemeCard2 from "../DashboardSidebarComp/images/products-theme-card2.jpg";

function TradeProducts() {
  return (
    <div className="container">
      <div class="row mt-4">
        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard2}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeProducts;
