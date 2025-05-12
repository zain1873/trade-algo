import { useEffect, useRef, useState } from "react";
import thumbnail from "../DashboardSidebarComp/images/video_card-overlay.png";
import "../DashboardSidebarComp/styles/OptionAcademyComp.css";

const OptionsAcademy = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("options-academy");

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("Fundamentals");

  // State to track dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to the dropdown menu
  const dropdownRef = useRef(null);

  // Categories for dropdown
  const categories = [
    "Fundamentals",
    "Intermediate",
    "L.E.A.P.S",
    "Cash Secured Puts",
    "Advanced",
  ];

  // Playlist data
  const playlistData = [
    {
      id: 1,
      title: "Intro to Options",
      duration: "13 minutes 54 seconds",
      isPlaying: true,
    },
    {
      id: 2,
      title: "Basic Strategies",
      duration: "18 minutes 9 seconds",
      isPlaying: false,
    },
    {
      id: 3,
      title: "Options Pricing",
      duration: "15 minutes 50 seconds",
      isPlaying: false,
    },
    {
      id: 5,
      title: "Trading Risk",
      duration: "17 minutes 50 seconds",
      isPlaying: false,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Here you would typically fetch the videos for this category
    // This just stays on the dashboard and updates the content
  };

  return (
    <div className="options-academy-container">
      {/* Navigation tabs */}
      <div className="nav-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "options-academy" ? "active" : ""
              }`}
              onClick={() => handleTabChange("options-academy")}
            >
              Crypto
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "livestream" ? "active" : ""
              }`}
              onClick={() => handleTabChange("livestream")}
            >
              Forex
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "support" ? "active" : ""}`}
              onClick={() => handleTabChange("support")}
            >
              Stock
            </button>
          </li>
        </ul>
        <div className="tab-indicator"></div>
      </div>

      {/* Main content area */}
      <div className="tab-content-academy">
        {activeTab === "options-academy" && (
          <div className="options-academy-content">
            <div className="row">
              <div className="col-md-7">
                <div className="intro-section">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
                    </div>
                    {/* <h2 className="options-title mb-3 text-white">Options Academy</h2> */}
                  </div>

                  <div className="video-container-options">
                    <div className="video-wrapper-options">
                      {/* Video Player */}
                      <div className="ratio ratio-16x9">
                        <video controls className="w-100 h-100">
                          <source
                            src="https://example.com/video.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="">
                        <div className="fundamentals-tag">
                          {selectedCategory}: Options Intro (1/10)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tutorial-nav">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button className="nav-link active">Overview</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link">Downloads</button>
                      </li>
                    </ul>
                  </div>

                  <div className="tutorial-details">
                    <div className="duration-info">
                      13 minutes 54 seconds | {selectedCategory}
                    </div>
                    <h4 className="tutorial-heading">Tutorial Description</h4>
                    <p className="tutorial-desc">
                      In this tutorial, we will be covering the following
                      topics:
                    </p>
                    <ul className="tutorial-topics">
                      <li>What Is An Options Contract?</li>
                      <li>Calls and Puts</li>
                      <li>Options Pricing Basics</li>
                      <li>Risk and Reward</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="playlist-section">
                  <div className="playlist-header">
                    <h4>Current Playlist</h4>
                    <div className="custom-dropdown" ref={dropdownRef}>
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        onClick={toggleDropdown}
                      >
                        {selectedCategory}
                      </button>
                      {isDropdownOpen && (
                        <ul className="custom-dropdown-menu">
                          {categories.map((category, index) => (
                            <li key={index}>
                              <button
                                className="custom-dropdown-item"
                                onClick={() => handleCategoryChange(category)}
                              >
                                {category}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="playlist-items">
                    {playlistData.map((item) => (
                      <div
                        key={item.id}
                        className={`playlist-item ${
                          item.isPlaying ? "now-playing" : ""
                        }`}
                      >
                        <div className="playlist-thumbnail">
                          <img src={thumbnail} alt="Thumbnail" />
                          <div className="course-tag">
                            {selectedCategory} Course
                          </div>
                          <div className="academy-tag">Options Academy</div>
                          {item.isPlaying && (
                            <div className="playing-tag">Now Playing</div>
                          )}
                        </div>
                        <div className="playlist-info">
                          <div className="video-title-card">{item.title}</div>
                          <h5 className="text-black">{item.title}</h5>
                          <p>{item.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "livestream" && (
          //  <LiveSessionChat/>
          <div className="options-academy-content">
            <div className="row">
              <div className="col-md-7">
                <div className="intro-section">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
                    </div>
                    <h2 className="options-title mb-3 text-white">
                      Options Academy
                    </h2>
                  </div>

                  <div className="video-container-options">
                    <div className="video-wrapper-options">
                      {/* Video Player */}
                      <div className="ratio ratio-16x9">
                        <video controls className="w-100 h-100">
                          <source
                            src="https://example.com/video.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="">
                        <div className="fundamentals-tag">
                          {selectedCategory}: Options Intro (1/10)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tutorial-nav">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button className="nav-link active">Overview</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link">Downloads</button>
                      </li>
                    </ul>
                  </div>

                  <div className="tutorial-details">
                    <div className="duration-info">
                      13 minutes 54 seconds | {selectedCategory}
                    </div>
                    <h4 className="tutorial-heading">Tutorial Description</h4>
                    <p className="tutorial-desc">
                      In this tutorial, we will be covering the following
                      topics:
                    </p>
                    <ul className="tutorial-topics">
                      <li>What Is An Options Contract?</li>
                      <li>Calls and Puts</li>
                      <li>Options Pricing Basics</li>
                      <li>Risk and Reward</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="playlist-section">
                  <div className="playlist-header">
                    <h4>Current Playlist</h4>
                    <div className="custom-dropdown" ref={dropdownRef}>
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        onClick={toggleDropdown}
                      >
                        {selectedCategory}
                      </button>
                      {isDropdownOpen && (
                        <ul className="custom-dropdown-menu">
                          {categories.map((category, index) => (
                            <li key={index}>
                              <button
                                className="custom-dropdown-item"
                                onClick={() => handleCategoryChange(category)}
                              >
                                {category}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="playlist-items">
                    {playlistData.map((item) => (
                      <div
                        key={item.id}
                        className={`playlist-item ${
                          item.isPlaying ? "now-playing" : ""
                        }`}
                      >
                        <div className="playlist-thumbnail">
                          <img src={thumbnail} alt="Thumbnail" />
                          <div className="course-tag">
                            {selectedCategory} Course
                          </div>
                          <div className="academy-tag">Options Academy</div>
                          {item.isPlaying && (
                            <div className="playing-tag">Now Playing</div>
                          )}
                        </div>
                        <div className="playlist-info">
                          <div className="video-title-card">{item.title}</div>
                          <h5 className="text-black">{item.title}</h5>
                          <p>{item.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="options-academy-content">
            <div className="row">
              <div className="col-md-7">
                <div className="intro-section">
                  <div className="d-flex align-items-center">
                    <div className="logo-container">
                      {/* <img src="/api/placeholder/40/40" alt="Logo" className="logo" /> */}
                    </div>
                    <h2 className="options-title mb-3 text-white">
                      Options Academy
                    </h2>
                  </div>

                  <div className="video-container-options">
                    <div className="video-wrapper-options">
                      {/* Video Player */}
                      <div className="ratio ratio-16x9">
                        <video controls className="w-100 h-100">
                          <source
                            src="https://example.com/video.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="">
                        <div className="fundamentals-tag">
                          {selectedCategory}: Options Intro (1/10)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tutorial-nav">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button className="nav-link active">Overview</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link">Downloads</button>
                      </li>
                    </ul>
                  </div>

                  <div className="tutorial-details">
                    <div className="duration-info">
                      13 minutes 54 seconds | {selectedCategory}
                    </div>
                    <h4 className="tutorial-heading">Tutorial Description</h4>
                    <p className="tutorial-desc">
                      In this tutorial, we will be covering the following
                      topics:
                    </p>
                    <ul className="tutorial-topics">
                      <li>What Is An Options Contract?</li>
                      <li>Calls and Puts</li>
                      <li>Options Pricing Basics</li>
                      <li>Risk and Reward</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="playlist-section">
                  <div className="playlist-header">
                    <h4>Current Playlist</h4>
                    <div className="custom-dropdown" ref={dropdownRef}>
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        type="button"
                        onClick={toggleDropdown}
                      >
                        {selectedCategory}
                      </button>
                      {isDropdownOpen && (
                        <ul className="custom-dropdown-menu">
                          {categories.map((category, index) => (
                            <li key={index}>
                              <button
                                className="custom-dropdown-item"
                                onClick={() => handleCategoryChange(category)}
                              >
                                {category}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="playlist-items">
                    {playlistData.map((item) => (
                      <div
                        key={item.id}
                        className={`playlist-item ${
                          item.isPlaying ? "now-playing" : ""
                        }`}
                      >
                        <div className="playlist-thumbnail">
                          <img src={thumbnail} alt="Thumbnail" />
                          <div className="course-tag">
                            {selectedCategory} Course
                          </div>
                          <div className="academy-tag">Options Academy</div>
                          {item.isPlaying && (
                            <div className="playing-tag">Now Playing</div>
                          )}
                        </div>
                        <div className="playlist-info">
                          <div className="video-title-card">{item.title}</div>
                          <h5 className="text-black">{item.title}</h5>
                          <p>{item.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionsAcademy;
