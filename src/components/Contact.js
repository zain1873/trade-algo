// import React from "react";

// const Contact = () => {
//   return (
//     <div className="container my-5">
//       <div className="row shadow-lg rounded">
//         {/* Left Section */}
//         <div className="col-lg-5 d-flex flex-column justify-content-center p-0">
//           <div className="left-contact-sec">
//             <h1 className="mb-3">Get in Touch</h1>
//             <p className="mb-2">
//               Have any questions? Feel free to reach out to us!
//             </p>
//             <p className="mb-2">
//               <a
//                 className="text-white text-decoration-none"
//                 href="mailto:contact@valourwealth.com "
//               >
//                 <strong>Email:</strong> contact@valourwealth.com
//               </a>
//             </p>
//             <p>
//               <a
//                 className="text-white text-decoration-none"
//                 href="tel:+1 414 485 8800"
//               >
//                 {" "}
//                 <strong>Phone:</strong> +1 414 485 8800
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="col-lg-7 bg-white p-5">
//           <h2>Contact Us</h2>
//           <p className="text-muted">We'd love to hear from you!</p>

//           <form id="contactForm">
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="First name"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="Last name"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-input"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <textarea
//                 className="form-input"
//                 rows="4"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="justify-content-center w-100 rounded-pill text-white theme_btn"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";  
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/contact-us/`,
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });

      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("API Error:", error);
      
    }
  };

  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded">
        {/* Left Section */}
        <div className="col-lg-5 d-flex flex-column justify-content-center p-0">
          <div className="left-contact-sec">
            <h1 className="mb-3">Get in Touch</h1>
            <p className="mb-2">Have any questions? Feel free to reach out to us!</p>
            <p className="mb-2">
              <a
                className="text-white text-decoration-none"
                href="mailto:contact@valourwealth.com"
              >
                <strong>Email:</strong> contact@valourwealth.com
              </a>
            </p>
            <p>
              <a
                className="text-white text-decoration-none"
                href="tel:+1 414 485 8800"
              >
                <strong>Phone:</strong> +1 414 485 8800
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7 bg-white p-5">
          <h2>Contact Us</h2>
          <p className="text-muted">We'd love to hear from you!</p>

          {isSubmitted ? (
            <div className="text-center submission-message">
              <h3>Thank you!</h3>
              <p>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="row g-3">
              {error && <p className="text-danger">{error}</p>}

              <div className="col-md-6">
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  placeholder="First name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  placeholder="Last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <textarea
                  name="message"
                  className="form-input"
                  rows="4"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="justify-content-center w-100 rounded-pill text-white theme_btn">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
