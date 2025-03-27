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


import React, { useEffect, useState } from "react";

function EditProfile() {
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const API_BASE = "https://valourwealthdjango-production.up.railway.app/api/user/";

  useEffect(() => {
    fetch(API_BASE, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"), // ✅ match login token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (data.country) fetchStates(data.country);
      });

    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => res.json())
      .then((data) => {
        const countryList = data.data.map((item) => item.name);
        setCountries(countryList.sort());
      });
  }, []);

  const fetchStates = (country) => {
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data?.states) {
          setStates(data.data.states.map((s) => s.name));
        }
      });
  };

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    if (field === "country") {
      fetchStates(value);
      setUser((prev) => ({ ...prev, state: "" }));
    }
  };

  const updateProfile = () => {
    const formData = new FormData();
    for (const key in user) {
      if (user[key] !== null && user[key] !== undefined) {
        formData.append(key, user[key]);
      }
    }

    fetch(API_BASE, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"), // ✅ token from login
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated!");
        if (user.password) {
          alert("Password updated. Please login again.");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
        }
      });
  };

  const deleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    fetch(API_BASE, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then(() => {
      alert("Account deleted.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/signup";
    });
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
                  <h5 className="text-muted mb-3">
                    Publicly displayed information (This will show in chat rooms)
                  </h5>

                  <div className="mb-3 edit-form">
                    <label htmlFor="chatUsername" className="form-label">Chat Username</label>
                    <div className="d-flex gap-3 align-items-start">
                      <input
                        type="text"
                        className="form-input"
                        id="chatUsername"
                        value={user.username || ""}
                        onChange={(e) => handleChange("username", e.target.value)}
                      />
                      <button className="theme_btn text-white" onClick={updateProfile}>
                        Update Username
                      </button>
                    </div>
                  </div>
                </div>

                {/* Private Info */}
                <div>
                  <h5 className="text-muted mb-3">This info will not be publicly displayed</h5>

                  {/* Profile Photo */}
                  <div className="mb-3">
                    <label className="form-label">Profile Photo</label>
                    <input
                      type="file"
                      className="form-input"
                      accept="image/*"
                      onChange={(e) => handleChange("profile_photo", e.target.files[0])}
                    />
                    {user.profile_photo && typeof user.profile_photo === "string" && (
                      <div className="mt-2">
                        <img
                          src={user.profile_photo}
                          alt="Profile"
                          style={{ width: 100, height: 100, borderRadius: "50%" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3 edit-form">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="d-flex gap-3 align-items-start">
                      <div className="input-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-input"
                          id="password"
                          value={user.password || ""}
                          onChange={(e) => handleChange("password", e.target.value)}
                        />
                      </div>
                      <button className="theme_btn text-white" onClick={updateProfile}>
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-input"
                      id="name"
                      value={user.first_name || ""}
                      onChange={(e) => handleChange("first_name", e.target.value)}
                    />
                  </div>

                  {/* Country */}
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select
                      className="form-input"
                      id="country"
                      value={user.country || ""}
                      onChange={(e) => handleChange("country", e.target.value)}
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  {/* State */}
                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select
                      className="form-input"
                      id="state"
                      value={user.state || ""}
                      onChange={(e) => handleChange("state", e.target.value)}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div className="d-flex gap-3">
                    <button className="theme_btn text-white" onClick={updateProfile}>
                      Update Profile
                    </button>
                    <button className="btn btn-danger" onClick={deleteAccount}>
                      DELETE ACCOUNT
                    </button>
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
