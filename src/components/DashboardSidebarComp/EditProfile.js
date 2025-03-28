import React, { useState } from 'react';

function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="edit-profile py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Profile Settings</h4>
                
                {/* Public Information */}
                <div className="mb-5">
                  <h5 className="text-muted mb-3">Publicly displayed information (This information will be displayed in chat rooms)</h5>
                  
                  <div className="mb-3 edit-form">
                    <label htmlFor="chatUsername" className="form-label">Chat Username</label>
                    <div className="d-flex gap-3 align-items-start">
                      <input 
                        type="text" 
                        className="form-input" 
                        id="chatUsername" 
                      />
                      <button className="theme_btn text-white">Update Username</button>
                    </div>
                  </div>
                </div>

                {/* Private Information */}
                <div>
                  <h5 className="text-muted mb-3">The information will not be publicly displayed</h5>
                  
                  <div className="mb-3 edit-form">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex gap-3 align-items-start">
                      <div className="input-group">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="form-input" 
                          id="password" 
                        />
                      </div>
                      <button className="theme_btn text-white">Update Password</button>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      id="name" 
                      defaultValue="Ahmed Mohamed" 
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-input" id="country" defaultValue="United Kingdom">
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-input" id="state" defaultValue="Greater London">
                      <option value="Greater London">Greater London</option>
                      <option value="Manchester">Manchester</option>
                      <option value="Birmingham">Birmingham</option>
                      <option value="Liverpool">Liverpool</option>
                    </select>
                  </div>
                  
                  <div className="d-flex gap-3">
                    <button className="theme_btn text-white">Update Profile</button>
                    <button className="btn btn-danger">DELETE ACCOUNT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//   ? process.env.REACT_APP_API_URL
//   : process.env.REACT_APP_API_URL + "/";

// const USER_API_URL = `${API_BASE_URL}api/user/`;

// function EditProfile({ darkMode }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     first_name: '',
//     country: '',
//     state: ''
//   });
//   const accessToken = localStorage.getItem("accessToken");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(USER_API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setUserData(response.data);
//         setFormData({
//           username: response.data.username || '',
//           password: '',
//           first_name: response.data.first_name || '',
//           country: response.data.country || '',
//           state: response.data.state || ''
//         });
//       } catch (error) {
//         console.error("Failed to fetch user profile:", error);
//       }
//     };

//     fetchUserData();
//   }, [accessToken]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const payload = { ...formData };
//       if (!payload.password) delete payload.password;
//       const response = await axios.put(USER_API_URL, payload, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       alert("Profile updated successfully.");
//     } catch (error) {
//       console.error("Failed to update profile:", error);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(USER_API_URL, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       alert("Account deleted.");
//       localStorage.removeItem("accessToken");
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Failed to delete account:", error);
//       alert("Failed to delete account.");
//     }
//   };

//   return (
//     <section className="edit-profile py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-9">
//             <div className="card shadow-sm">
//               <div className="card-body p-4">
//                 <h4 className="mb-4">Profile Settings</h4>

//                 <div className="mb-5">
//                   <h5 className="text-muted mb-3">Publicly displayed information (This information will be displayed in chat rooms)</h5>
//                   <div className="mb-3 edit-form">
//                     <label htmlFor="username" className="form-label">Chat Username</label>
//                     <div className="d-flex gap-3 align-items-start">
//                       <input type="text" className="form-input" id="username" value={formData.username} onChange={handleChange} />
//                       <button className="theme_btn text-white" onClick={handleUpdate}>Update Username</button>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h5 className="text-muted mb-3">The information will not be publicly displayed</h5>

//                   <div className="mb-3 edit-form">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <div className="d-flex gap-3 align-items-start">
//                       <input type={showPassword ? "text" : "password"} className="form-input" id="password" value={formData.password} onChange={handleChange} />
//                       <button className="theme_btn text-white" onClick={handleUpdate}>Update Password</button>
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="first_name" className="form-label">Name</label>
//                     <input type="text" className="form-input" id="first_name" value={formData.first_name} onChange={handleChange} />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="country" className="form-label">Country</label>
//                     <select className="form-input" id="country" value={formData.country} onChange={handleChange}>
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="United States">United States</option>
//                       <option value="Canada">Canada</option>
//                       <option value="Australia">Australia</option>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label htmlFor="state" className="form-label">State</label>
//                     <select className="form-input" id="state" value={formData.state} onChange={handleChange}>
//                       <option value="Greater London">Greater London</option>
//                       <option value="Manchester">Manchester</option>
//                       <option value="Birmingham">Birmingham</option>
//                       <option value="Liverpool">Liverpool</option>
//                     </select>
//                   </div>

//                   <div className="d-flex gap-3">
//                     <button className="theme_btn text-white" onClick={handleUpdate}>Update Profile</button>
//                     <button className="btn btn-danger" onClick={handleDelete}>DELETE ACCOUNT</button>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EditProfile;
