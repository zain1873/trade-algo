// import React from 'react';
// import '../DashboardSidebarComp/styles/progressbar.css';

// const CircularProgressBar = ({ percentage, color }) => {
//   const rotation = percentage * 3.6; 
  
//   return (
//     <div className="circular-progress">
//       <div className="outer-circle">
//         <div className="inner-circle">
//           <div className="percentage">
//             {percentage}<span className="percent-symbol">%</span>
//           </div>
//         </div>
//       </div>
      
//       <div 
//         className="progress-circle" 
//         style={{ 
//           '--percentage': percentage,
//           '--color': color 
//         }}
//       ></div>
//     </div>
//   );
// };

// // const ProgressBarsDisplay = () => {
// //   return (
// //     <div className="container my-5 p-0">
// //     <div className="progress_container shadow p-3">
// //         <div className="sec_heading ">
// //             <h2 className='text-white'>QBTS</h2>
// //         </div>
// //       <div className="row justify-content-center p-3">
      
// //         <div className="col-md-3 text-center">
// //           <CircularProgressBar percentage={0} color="#3CD4A0" />
// //           <h4 className='text-white'>progress</h4>
// //         </div>
// //         <div className="col-md-3 text-center">
// //           <CircularProgressBar percentage={0} color="#9333EA" />
// //           <h4 className='text-white'>Watched</h4>

// //         </div>
// //         <div className="col-md-3 text-center">
// //           <CircularProgressBar percentage={0} color="#F05252" />
// //           <h4 className='text-white'>Success rate</h4>

// //         </div>
// //       </div>
// //       </div>
// //     </div>
// //   );
// // };

// const ProgressBarsDisplay = ({ totalProgress = 0, levelProgress = 0, videoProgress = 0 }) => {
//   return (
//     <div className="container my-5 p-0">
//       <div className="progress_container shadow p-3">
//         <div className="sec_heading">
//           <h2 className='text-white'>QBTS</h2>
//         </div>
//         <div className="row justify-content-center p-3">
//           <div className="col-md-3 text-center">
//             <CircularProgressBar percentage={videoProgress} color="#3CD4A0" />
//             <h4 className='text-white'>Video Progress</h4>
//           </div>
//           <div className="col-md-3 text-center">
//             <CircularProgressBar percentage={levelProgress} color="#9333EA" />
//             <h4 className='text-white'>Level Progress</h4>
//           </div>
//           <div className="col-md-3 text-center">
//             <CircularProgressBar percentage={totalProgress} color="#F05252" />
//             <h4 className='text-white'>Total Course Progress</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressBarsDisplay;

import React, { useEffect, useState } from 'react';
import '../DashboardSidebarComp/styles/progressbar.css';

const CircularProgressBar = ({ percentage, color }) => {
  const rotation = percentage * 3.6; 

  return (
    <div className="circular-progress">
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="percentage">
            {percentage}<span className="percent-symbol">%</span>
          </div>
        </div>
      </div>
      <div 
        className="progress-circle" 
        style={{ 
          '--percentage': percentage,
          '--color': color 
        }}
      ></div>
    </div>
  );
};

const ProgressBarsDisplay = ({ courseId, selectedLevel }) => {
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0,
  });

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token || !courseId) return;

      try {
        const res = await fetch(`https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        const currentLevel = data.levels.find(
          (lvl) => lvl.level.toLowerCase() === selectedLevel?.toLowerCase()
        );

        setProgressData({
          totalProgress: data.total_progress || 0,
          levelProgress: currentLevel?.percent || 0,
          videoProgress: currentLevel?.percent || 0,
        });
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };

    fetchProgress();
  }, [courseId, selectedLevel]);

  return (
    <div className="container my-5 p-0">
      <div className="progress_container shadow p-3">
        <div className="sec_heading">
          <h2 className='text-white'>QBTS</h2>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.videoProgress} color="#3CD4A0" />
            <h4 className='text-white'>Video Progress</h4>
          </div>
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.levelProgress} color="#9333EA" />
            <h4 className='text-white'>Level Progress</h4>
          </div>
          <div className="col-md-3 text-center">
            <CircularProgressBar percentage={progressData.totalProgress} color="#F05252" />
            <h4 className='text-white'>Total Course Progress</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarsDisplay;
