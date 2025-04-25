// import React from 'react';
// import './styles/products.css';

// const Products = () => {
//   return (
//     <div className="finance-dashboard container-fluid p-4">
//       <div className="row g-4">
//         <div class="dashboard-title text-center">
//           <h2 className='text-center fw-bold product-p'>ValourWealth Products</h2>
//           <p
//           style={{
//             width: "530px",
//             textAlign: "center",
//             margin: "auto",
//           }}
//           className="text-gray-400 text-base sm:text-lg product-p"
//         >
//           Discover our comprehensive suite of premium financial products and services
//           designed to elevate your trading and investment experience.
//         </p>

//         </div>
//         {/* Row 1 */}
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i style={{color: "blue"}} className="bi bi-file-text"></i>
//               </div>
//               <h3 className="card-title">Resources</h3>
//               <p className="card-text">Access a comprehensive library of educational materials, guides, and research reports.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-book"></i>
//                   <span>Trading guides</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-graph-up"></i>
//                   <span>Market research</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Browse Library
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i className="bi bi-currency-dollar"></i>
//               </div>
//               <h3 className="card-title">ValourWealth Products</h3>
//               <p className="card-text">Discover our suite of premium financial products designed for serious investors and traders.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-star-fill"></i>
//                   <span>Premium offerings</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-unlock"></i>
//                   <span>Exclusive access</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   View Products
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i style={{color: "gold"}} className="bi bi-bank"></i>
//               </div>
//               <h3 className="card-title">Wealth Management Series</h3>
//               <p className="card-text">Comprehensive wealth management solutions for high-net-worth individuals seeking long-term growth.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-wallet2"></i>
//                   <span>Portfolio management</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-shield-check"></i>
//                   <span>Wealth preservation</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Explore Series
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Row 2 */}
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-image mb-4">
//                 <div className="emerald-icon"></div>
//               </div>
//               <h3 className="card-title">Emerald Inc.</h3>
//               <p className="card-text">Elite investment opportunities through our premium Emerald tier services and exclusive offerings.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-gem text-emerald"></i>
//                   <span>Elite opportunities</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-lock text-emerald"></i>
//                   <span>Exclusive investments</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center text-emerald">
//                   Discover Elite
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100 platinum-card">
//             <div className="card-body">
//               <div className="card-image mb-4">
//                 <div className="platinum-icon"></div>
//               </div>
//               <h3 className="card-title">Platinum Program</h3>
//               <p className="card-text">Our flagship program offering personalized coaching and premium resources for serious traders.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-person-check"></i>
//                   <span>One-on-one coaching</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-star"></i>
//                   <span>Premium resources</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Join Program
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-image mb-4">
//                 <div className="trading-academy-image">
//                   <div className="academy-level-icons">
//                     <span className="level-icon beginner">Beginner</span>
//                     <span className="level-icon intermediate">Intermediate</span>
//                     <span className="level-icon advanced">Advanced</span>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="card-title">Trading Academy</h3>
//               <p className="card-text">Structured educational programs to develop your trading skills from beginner to advanced levels.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-journal-check"></i>
//                   <span>Structured curriculum</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-person-workspace"></i>
//                   <span>Expert instructors</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Start Learning
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Row 3 */}
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-image mb-4">
//                 <div className="mentorship-image">
//                   <div className="mentor-icons">
//                     <i className="bi bi-person-fill"></i>
//                     <div className="connection-line">
//                       <div className="slider-dot"></div>
//                     </div>
//                     <i className="bi bi-person-fill"></i>
//                   </div>
//                 </div>
//               </div>
//               <h3 className="card-title">1 on 1 Mentorship</h3>
//               <p className="card-text">Personalized mentorship with experienced traders tailored to your specific goals.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-compass"></i>
//                   <span>Personalized guidance</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-graph-up-arrow"></i>
//                   <span>Strategy development</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Connect Now
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Add placeholders for remaining 3 cards that are not visible in the screenshot */}
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i className="bi bi-bar-chart-line"></i>
//               </div>
//               <h3 className="card-title">Market Analytics</h3>
//               <p className="card-text">Advanced market analytics and insights to help you make informed trading decisions.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-graph-up"></i>
//                   <span>Real-time data</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-lightning-charge"></i>
//                   <span>Quick insights</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Explore Analytics
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i className="bi bi-people"></i>
//               </div>
//               <h3 className="card-title">Community Forum</h3>
//               <p className="card-text">Join our exclusive community of traders and investors to share insights and strategies.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-chat-dots"></i>
//                   <span>Expert discussions</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-pin-angle"></i>
//                   <span>Trading ideas</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   Join Community
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-4">
//           <div className="card bg-dark text-white h-100">
//             <div className="card-body">
//               <div className="card-icon mb-4">
//                 <i className="bi bi-calendar-event"></i>
//               </div>
//               <h3 className="card-title">Exclusive Events</h3>
//               <p className="card-text">Access to exclusive webinars, conferences, and networking events with industry experts.</p>
              
//               <div className="feature-list">
//                 <div className="feature-item">
//                   <i className="bi bi-laptop"></i>
//                   <span>Live webinars</span>
//                 </div>
//                 <div className="feature-item">
//                   <i className="bi bi-people-fill"></i>
//                   <span>Networking sessions</span>
//                 </div>
//               </div>
              
//               <div className="card-action">
//                 <a href="#" className="d-flex align-items-center">
//                   View Schedule
//                   <i className="bi bi-chevron-right ms-2"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;




import React from "react"
import {
  FileText,
  DollarSign,
  Shield,
  Diamond,
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  BarChart2,
  Briefcase,
} from "lucide-react"
import './styles/products.css';

const cardData = [
  {
    id: 1,
    title: "Resources",
    description: "Access a comprehensive library of educational materials, guides, and research reports.",
    icon: <FileText className="card-icon" />,
    features: [
      { icon: <FileText size={16} />, text: "Trading guides" },
      { icon: <BarChart2 size={16} />, text: "Market research" },
    ],
    ctaText: "Browse Library",
    accentColor: "#6c757d",
    bgGradient: "linear-gradient(145deg, #2c3034 0%, #212529 100%)",
  },
  {
    id: 2,
    title: "ValourWealth Products",
    description: "Discover our suite of premium financial products designed for serious investors and traders.",
    icon: <DollarSign className="card-icon" />,
    features: [
      { icon: <Award size={16} />, text: "Premium offerings" },
      { icon: <Shield size={16} />, text: "Exclusive access" },
    ],
    ctaText: "View Products",
    accentColor: "#0d6efd",
    bgGradient: "linear-gradient(145deg, #1e2a3b 0%, #141e30 100%)",
  },
  {
    id: 3,
    title: "Wealth Management Series",
    description: "Comprehensive wealth management solutions for high-net-worth individuals seeking long-term growth.",
    icon: <Briefcase className="card-icon" />,
    features: [
      { icon: <DollarSign size={16} />, text: "Portfolio management" },
      { icon: <Shield size={16} />, text: "Wealth preservation" },
    ],
    ctaText: "Explore Series",
    accentColor: "#6f42c1",
    bgGradient: "linear-gradient(145deg, #2c2440 0%, #1c1429 100%)",
  },
  {
    id: 4,
    title: "Emerald Inc.",
    description: "Elite investment opportunities through our premium Emerald tier services and exclusive offerings.",
    icon: <Diamond className="card-icon" />,
    features: [
      { icon: <Diamond size={16} />, text: "Elite opportunities" },
      { icon: <Shield size={16} />, text: "Exclusive investments" },
    ],
    ctaText: "Discover Elite",
    accentColor: "#20c997",
    bgGradient: "linear-gradient(145deg, #0f2e25 0%, #0d1f1a 100%)",
  },
  {
    id: 5,
    title: "Platinum Program",
    description: "Our flagship program offering personalized coaching and premium resources for serious traders.",
    icon: <Shield className="card-icon" />,
    features: [
      { icon: <Users size={16} />, text: "One-on-one coaching" },
      { icon: <Award size={16} />, text: "Premium resources" },
    ],
    ctaText: "Join Program",
    accentColor: "#adb5bd",
    bgGradient: "linear-gradient(145deg, #2b3035 0%, #1a1e22 100%)",
  },
  {
    id: 6,
    title: "Trading Academy",
    description: "Structured educational programs to develop your trading skills from beginner to advanced levels.",
    icon: <GraduationCap className="card-icon" />,
    features: [
      { icon: <FileText size={16} />, text: "Structured curriculum" },
      { icon: <Users size={16} />, text: "Expert instructors" },
    ],
    ctaText: "Start Learning",
    accentColor: "#0dcaf0",
    bgGradient: "linear-gradient(145deg, #0f2d3d 0%, #0a1c25 100%)",
  },
  {
    id: 7,
    title: "1 on 1 Mentorship",
    description: "Personalized mentorship with experienced traders tailored to your specific goals and needs.",
    icon: <Users className="card-icon" />,
    features: [
      { icon: <Users size={16} />, text: "Personalized guidance" },
      { icon: <TrendingUp size={16} />, text: "Strategy development" },
    ],
    ctaText: "Connect Now",
    accentColor: "#6c757d",
    bgGradient: "linear-gradient(145deg, #2c3034 0%, #212529 100%)",
  },
  {
    id: 8,
    title: "Market Analysis",
    description: "In-depth market analysis and insights to help you make informed investment decisions.",
    icon: <BarChart2 className="card-icon" />,
    features: [
      { icon: <TrendingUp size={16} />, text: "Technical analysis" },
      { icon: <FileText size={16} />, text: "Market reports" },
    ],
    ctaText: "Access Analysis",
    accentColor: "#fd7e14",
    bgGradient: "linear-gradient(145deg, #3d2c14 0%, #2b1f0e 100%)",
  },
  {
    id: 9,
    title: "Risk Management",
    description: "Advanced tools and strategies to protect your investments and minimize potential losses.",
    icon: <Shield className="card-icon" />,
    features: [
      { icon: <Shield size={16} />, text: "Portfolio protection" },
      { icon: <TrendingUp size={16} />, text: "Risk assessment" },
    ],
    ctaText: "Explore Tools",
    accentColor: "#dc3545",
    bgGradient: "linear-gradient(145deg, #3d1a1d 0%, #2b1315 100%)",
  },
  {
    id: 10,
    title: "Investment Strategies",
    description: "Curated investment strategies designed to meet various financial goals and risk tolerances.",
    icon: <TrendingUp className="card-icon" />,
    features: [
      { icon: <Briefcase size={16} />, text: "Diversified portfolios" },
      { icon: <Award size={16} />, text: "Performance tracking" },
    ],
    ctaText: "View Strategies",
    accentColor: "#198754",
    bgGradient: "linear-gradient(145deg, #0f2e1d 0%, #0a1f14 100%)",
  },
]

const FinancialCards = () => {
  return (
   <div class="container">
     <div className="row g-4">
      {cardData.map((card) => (
        <div key={card.id} className="col-md-6 col-lg-4">
          <div
            className="financial-card h-100"
            style={{
              background: card.bgGradient,
              borderColor: card.accentColor,
            }}
          >
            <div className="card-icon-wrapper" style={{ backgroundColor: card.accentColor + "20" }}>
              {React.cloneElement(card.icon, { color: card.accentColor })}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-features">
              {card.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon" style={{ color: card.accentColor }}>
                    {feature.icon}
                  </span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="card-cta-wrapper">
              <a href="#" className="card-cta" style={{ color: card.accentColor }}>
                {card.ctaText} <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default FinancialCards
