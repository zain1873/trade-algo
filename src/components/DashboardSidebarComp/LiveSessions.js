import React from 'react'
import LiveTrainingSession from './liveTrainingSession'

function LiveSessions() {
  return (
    <div className='live-session-cards'>
      <LiveTrainingSession/>
    </div>
  )
}

// export default LiveSessions

//  <div className="container mt-4">
//       <h4 className="section-title mb-3">Courses</h4>
//       {error && <p className="error-message">{error}</p>}
//       <div className="row">
//         {courses.length === 0 ? (
//           <p>No courses available at the moment.</p>
//         ) : (
//           courses.map((course) => (
//             <div key={course.id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card stream_cards shadow-sm">
//                 {/* Show course thumbnail if available, otherwise show placeholder */}
//                 <img
//                   src={course.thumbnail ? `${API_BASE_URL}${course.thumbnail}` : stream_img}
//                   alt="Course Thumbnail"
//                   className="card-img-top"
//                 />
//                 <div className="course-card">
//                   <h4 className="course-title">{course.title}</h4>
//                   <p className="course-desc">{course.description.substring(0, 150)}...</p>
//                   <button className="btn btn-primary" onClick={() => handleViewDetails(course.id)}>
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveSessions;
