// import React, { useState } from 'react';

// function EditProfile() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <section className="edit-profile py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-9">
//             <div className="card shadow-sm">
//               <div className="card-body p-4">
//                 <h4 className="mb-4">Profile Settings</h4>
                
//                 {/* Public Information */}
//                 <div className="mb-5">
//                   <h5 className="text-muted mb-3">Publicly displayed information (This information will be displayed in chat rooms)</h5>
                  
//                   <div className="mb-3 edit-form">
//                     <label htmlFor="chatUsername" className="form-label">Chat Username</label>
//                     <div className="d-flex gap-3 align-items-start">
//                       <input 
//                         type="text" 
//                         className="form-input" 
//                         id="chatUsername" 
//                       />
//                       <button className="theme_btn text-white">Update Username</button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Private Information */}
//                 <div>
//                   <h5 className="text-muted mb-3">The information will not be publicly displayed</h5>
                  
//                   <div className="mb-3 edit-form">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <div className="d-flex gap-3 align-items-start">
//                       <div className="input-group">
//                         <input 
//                           type={showPassword ? "text" : "password"} 
//                           className="form-input" 
//                           id="password" 
//                         />
//                       </div>
//                       <button className="theme_btn text-white">Update Password</button>
//                     </div>
//                   </div>
                  
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input 
//                       type="text" 
//                       className="form-input" 
//                       id="name" 
//                       defaultValue="Ahmed Mohamed" 
//                     />
//                   </div>
                  
//                   <div className="mb-3">
//                     <label htmlFor="country" className="form-label">Country</label>
//                     <select className="form-input" id="country" defaultValue="United Kingdom">
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="United States">United States</option>
//                       <option value="Canada">Canada</option>
//                       <option value="Australia">Australia</option>
//                     </select>
//                   </div>
                  
//                   <div className="mb-4">
//                     <label htmlFor="state" className="form-label">State</label>
//                     <select className="form-input" id="state" defaultValue="Greater London">
//                       <option value="Greater London">Greater London</option>
//                       <option value="Manchester">Manchester</option>
//                       <option value="Birmingham">Birmingham</option>
//                       <option value="Liverpool">Liverpool</option>
//                     </select>
//                   </div>
                  
//                   <div className="d-flex gap-3">
//                     <button className="theme_btn text-white">Update Profile</button>
//                     <button className="btn btn-danger">DELETE ACCOUNT</button>
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

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    country: '',
    state: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`https://valourwealthdjango-production.up.railway.app/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setProfileData(data);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("accessToken");
    const formData = new FormData();
    for (const key in profileData) {
      if (profileData[key]) {
        formData.append(key, profileData[key]);
      }
    }
    const res = await fetch(`https://valourwealthdjango-production.up.railway.app/api/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (res.ok) {
      alert("Profile updated successfully");
    } else {
      alert("Failed to update profile");
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(`https://valourwealthdjango-production.up.railway.app/api/user`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      localStorage.clear();
      navigate("/login");
    } else {
      alert("Failed to delete account");
    }
  };

  return (
    <section className="edit-profile py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Profile Settings</h4>
                <div className="mb-5">
                  <h5 className="text-muted mb-3">Publicly displayed information</h5>
                  <div className="mb-3 edit-form">
                    <label htmlFor="username" className="form-label">Chat Username</label>
                    <div className="d-flex gap-3 align-items-start">
                      <input 
                        type="text" 
                        className="form-input" 
                        id="username" 
                        value={profileData.username}
                        onChange={handleChange}
                      />
                      <button className="theme_btn text-white" onClick={handleUpdate}>Update Username</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-muted mb-3">Private Information</h5>
                  <div className="mb-3 edit-form">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex gap-3 align-items-start">
                      <div className="input-group">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="form-input" 
                          id="password"
                          value={profileData.password || ''}
                          onChange={handleChange}
                        />
                      </div>
                      <button className="theme_btn text-white" onClick={handleUpdate}>Update Password</button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      id="first_name" 
                      value={profileData.first_name || ''}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      id="last_name" 
                      value={profileData.last_name || ''}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-input" id="country" value={profileData.country} onChange={handleChange}>
                      <option value="">Select Country</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-input" id="state" value={profileData.state} onChange={handleChange}>
                      <option value="">Select State</option>
                      <option value="Greater London">Greater London</option>
                      <option value="Manchester">Manchester</option>
                      <option value="Birmingham">Birmingham</option>
                      <option value="Liverpool">Liverpool</option>
                    </select>
                  </div>

                  <div className="d-flex gap-3">
                    <button className="theme_btn text-white" onClick={handleUpdate}>Update Profile</button>
                    <button className="btn btn-danger" onClick={handleDelete}>DELETE ACCOUNT</button>
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
