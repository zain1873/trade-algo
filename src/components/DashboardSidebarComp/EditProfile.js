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
                          style={{ borderRadius: "0px", overflow: "hidden" }}
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
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-input" id="state" defaultValue="Greater London">
                      <option value="Greater London">Greater London</option>
                      <option value="Manchester">Manchester</option>
                      <option value="Birmingham">Birmingham</option>
                      <option value="Liverpool">Liverpool</option>
                      {/* Add more states as needed */}
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