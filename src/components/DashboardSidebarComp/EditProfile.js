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


import React, { useState, useEffect } from 'react';

function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");
  const API_BASE = process.env.REACT_APP_API_URL || "https://valourwealthdjango-production.up.railway.app";

  // Fetch existing profile info
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${API_BASE}api/user/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUsername(data?.user?.username || "");
          setName(data?.user?.first_name || "");
          setCountry(data?.country || "");
          setState(data?.state || "");
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, [API_BASE, token]);

  // Update profile API call
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}api/user/profile/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          country,
          state,
          // name field only if backend accepts it
        }),
      });

      if (res.ok) {
        alert("✅ Profile updated successfully!");
      } else {
        const data = await res.json();
        alert("❌ Failed to update profile.");
        console.error(data);
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
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

                {/* Public Info */}
                <div className="mb-5">
                  <h5 className="text-muted mb-3">Public Info (displayed in chat rooms)</h5>
                  <div className="mb-3 edit-form">
                    <label htmlFor="chatUsername" className="form-label">Chat Username</label>
                    <div className="d-flex gap-3 align-items-start">
                      <input
                        type="text"
                        className="form-input"
                        id="chatUsername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <button className="theme_btn text-white" disabled>
                        Update Username
                      </button>
                    </div>
                  </div>
                </div>

                {/* Private Info */}
                <div>
                  <h5 className="text-muted mb-3">Private Info</h5>

                  <div className="mb-3 edit-form">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex gap-3 align-items-start">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-input"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select
                      className="form-input"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Select Country</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select
                      className="form-input"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Select State</option>
                      <option value="Greater London">Greater London</option>
                      <option value="Manchester">Manchester</option>
                      <option value="Birmingham">Birmingham</option>
                      <option value="Liverpool">Liverpool</option>
                    </select>
                  </div>

                  <div className="d-flex gap-3">
                    <button className="theme_btn text-white" onClick={handleUpdate} disabled={loading}>
                      {loading ? "Updating..." : "Update Profile"}
                    </button>
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
