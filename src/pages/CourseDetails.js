import { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaBookReader,
  FaFileAlt,
  FaLightbulb,
  FaLock,
  FaSignal,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import videoImg from "../assets/images/crypto-latest.png";
import ProgressBarsDisplay from "../components/DashboardSidebarComp/ProgressBar";
import "../styles/academy.css";

const ValourAcademy = () => {
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [videoUrl, setVideoUrl] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [progressData, setProgressData] = useState({
    totalProgress: 0,
    levelProgress: 0,
    videoProgress: 0,
  });
  const [videoWatched, setVideoWatched] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mcqs, setMcqs] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [grade, setGrade] = useState(null);

  const [passedLevels, setPassedLevels] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const currentLevel = data.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      setProgressData({
        totalProgress: data.total_progress,
        levelProgress: currentLevel?.percent || 0,
        videoProgress: currentLevel?.percent || 0,
      });
      setVideoWatched(currentLevel?.watched_video_ids || []);
      setPassedLevels(data.passed_levels.map((lvl) => lvl.toLowerCase())); // ✅ Add this line
    };

    if (courseId) fetchProgress();
  }, [courseId, selectedLevel]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const res = await fetch(
          `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          // If backend returns error, throw it manually
          const text = await res.text(); // because JSON parsing will crash
          throw new Error(`Server error ${res.status}: ${text}`);
        }

        const data = await res.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course details:", error.message);
      }
    };

    // const fetchCourseDetails = async () => {
    //   const token = localStorage.getItem("accessToken");
    //   const res = await fetch(
    //     `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await res.json();
    //   setCourseData(data);
    // };
    fetchCourseDetails();
  }, [courseId]);

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const currentLevel = data.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      setProgressData({
        totalProgress: data.total_progress,
        levelProgress: currentLevel?.percent || 0,
        videoProgress: currentLevel?.percent || 0,
      });
      setVideoWatched(currentLevel?.watched_video_ids || []);
    };
    if (courseId) fetchProgress();
  }, [courseId, selectedLevel]);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("accessToken");
      const levelObj = courseData?.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      if (!levelObj) return;
      const res = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/notes/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setNotes(data);
    };
    if (courseData) fetchNotes();
  }, [courseId, selectedLevel, courseData]);

  useEffect(() => {
    const fetchMCQs = async () => {
      const token = localStorage.getItem("accessToken");
      const levelObj = courseData?.levels.find(
        (lvl) => lvl.level.toLowerCase() === selectedLevel
      );
      if (!levelObj) return;
      const res = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setMcqs(data);
    };
    if (courseData) fetchMCQs();
  }, [courseId, selectedLevel, courseData]);

  const getVideosForLevel = (levelName) => {
    if (!courseData) return [];
    const level = courseData.levels.find(
      (lvl) => lvl.level.toLowerCase() === levelName
    );
    return level ? level.videos : [];
  };

  const handleAnswer = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  // const submitQuiz = () => {
  //   const total = mcqs.length;
  //   const correct = mcqs.filter(
  //     (q) => userAnswers[q.id] === q.correct_answer
  //   ).length;
  //   const percent = Math.round((correct / total) * 100);
  //   setGrade(percent);
  // };

  // const isLevelUnlocked = (level) => {
  //   if (level === "beginner") return true;
  //   if (level === "intermediate")
  //     return grade >= 50 && selectedLevel === "beginner";
  //   if (level === "professional")
  //     return grade >= 50 && selectedLevel === "intermediate";
  //   return false;
  // };

  const submitQuiz = async () => {
    const token = localStorage.getItem("accessToken");

    const levelObj = courseData?.levels.find(
      (lvl) => lvl.level.toLowerCase() === selectedLevel
    );
    if (!levelObj) return;

    try {
      const res = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/levels/${levelObj.id}/mcqs/submit/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: userAnswers }),
        }
      );

      const data = await res.json();
      setGrade(Math.round(data.score));

      // 💡 Re-fetch progress to update passedLevels
      const progressRes = await fetch(
        `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const progressData = await progressRes.json();
      setPassedLevels(
        progressData.passed_levels.map((lvl) => lvl.toLowerCase())
      );
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const isLevelUnlocked = (level) => {
    if (level === "beginner") return true;
    if (level === "intermediate") return passedLevels.includes("beginner");
    if (level === "professional") return passedLevels.includes("intermediate");
    return false;
  };

  const isVideoUnlocked = (index) => {
    return true; // All videos are unlocked
  };

  const areAllVideosWatched = () => {
    return true; // So notes unlock immediately
  };

  const canAccessNotes = () => areAllVideosWatched();
  const canAccessMCQs = () => canAccessNotes();
  const renderVideos = () => {
    const videos = getVideosForLevel(selectedLevel);

    const markVideoWatched = async (videoId) => {
      const token = localStorage.getItem("accessToken");
      try {
        await fetch(
          `https://valourwealthdjango-production.up.railway.app/videos/${videoId}/watch/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const res = await fetch(
          `https://valourwealthdjango-production.up.railway.app/courses/${courseId}/progress/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        const currentLevel = data.levels.find(
          (lvl) => lvl.level.toLowerCase() === selectedLevel
        );
        setProgressData({
          totalProgress: data.total_progress,
          levelProgress: currentLevel?.percent || 0,
          videoProgress: currentLevel?.percent || 0,
        });
        setVideoWatched(currentLevel?.watched_video_ids || []);
      } catch (error) {
        console.error("Error marking video watched:", error);
      }
    };

    return (
      <div className="container">
        <div className="row">
          {videos.map((video, index) => {
            const isUnlocked = isVideoUnlocked(index);
            const currentVideoUrl = video.public_url;
            console.log("Current video URL:", currentVideoUrl);

            return (
              <div key={video.id} className="col-lg-4 col-md-6 mb-4">
                <div className="video-card">
                  <div
                    className="video-thumbnail"
                    style={{ position: "relative" }}
                  >
                    {isUnlocked ? (
                      !videoUrl || videoUrl !== currentVideoUrl ? (
                        <>
                          {/* <img className="obj_fit" src={videoImg} alt={video.title} /> */}
                          <img
                            className="obj_fit"
                            src={video.thumbnail_url || videoImg}
                            alt={video.title}
                          />
                          <button
                            onClick={() => setVideoUrl(currentVideoUrl)}
                            className="play-button-overlay"
                          >
                            ▶
                          </button>
                        </>
                      ) : (
                        <video
                          controls
                          // autoPlay
                          className="w-100 rounded"
                          controlsList="nodownload"
                          onContextMenu={(e) => e.preventDefault()}
                          onEnded={() => markVideoWatched(video.id)}
                        >
                          <source src={currentVideoUrl} />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <>
                        <img
                          className="obj_fit blur"
                          src={video.thumbnail_url || videoImg}
                          alt="Locked"
                        />
                        <div className="locked-overlay">
                          <FaLock />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="video-info">
                    <h5 className="video-title">{video.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNotes = () => {
    if (!canAccessNotes()) {
      return (
        <div className="container text-center text-white">
          <p>
            <FaLock /> Complete all videos to unlock notes.
          </p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {notes.length ? (
            notes.map((note) => (
              <div key={note.id} className="col-md-6 text-white mb-3">
                <div className="note-card p-3 bg-dark rounded">
                  <h5>{note.title}</h5>
                  <p style={{ whiteSpace: "pre-line", marginBottom: 0 }}>
                    {note.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-white">
              <p>No notes found for this level.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderKnowledge = () => {
    if (!canAccessMCQs()) {
      return (
        <div className="container text-center text-white">
          <p>
            <FaLock /> Please view notes before attempting the quiz.
          </p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {mcqs.length === 0 ? (
            <div className="col-12 text-white">
              <p>No quiz available for this level.</p>
            </div>
          ) : (
            <div className="col-12 text-white">
              {mcqs.map((q) => (
                <div key={q.id} className="mb-4 p-3 bg-dark rounded">
                  <h5>{q.question}</h5>
                  {[q.option_a, q.option_b, q.option_c, q.option_d].map(
                    (opt, idx) => {
                      const optionKey = ["A", "B", "C", "D"][idx];
                      return (
                        <div key={optionKey} className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name={`question-${q.id}`}
                            id={`question-${q.id}-option-${optionKey}`}
                            value={optionKey}
                            checked={userAnswers[q.id] === optionKey}
                            onChange={() => handleAnswer(q.id, optionKey)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`question-${q.id}-option-${optionKey}`}
                          >
                            {opt}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
              ))}
              <button className="btn btn-success" onClick={submitQuiz}>
                Submit Quiz
              </button>
              {grade !== null && (
                <p className="mt-3">
                  You scored: <strong>{grade}%</strong>.{" "}
                  {grade >= 50
                    ? "You can proceed to the next level!"
                    : "Please retake the quiz."}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="valour-container">
      <div className="valour-header">
        <div className="header-brand">Valour Academy</div>
      </div>
      <div className="valour-main">
        <div className="valour-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-heading">COURSE LEVELS</div>
            {["beginner", "intermediate", "professional"].map((level) => {
              const unlocked = isLevelUnlocked(level);
              return (
                <div
                  key={level}
                  className={`sidebar-item ${
                    selectedLevel === level ? "active" : ""
                  }`}
                  onClick={() => unlocked && setSelectedLevel(level)}
                  style={{
                    opacity: unlocked ? 1 : 0.4,
                    cursor: unlocked ? "pointer" : "not-allowed",
                  }}
                >
                  <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                  {!unlocked && <FaLock style={{ marginLeft: "10px" }} />}
                  <i
                    className={`arrow-icon ${
                      selectedLevel === level ? "down" : "right"
                    }`}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
        <div className="valour-content p-0">
          {courseData && (
            <div className="main_module">
              <div className="content-breadcrumb">
                <span>
                  {selectedLevel.charAt(0).toUpperCase() +
                    selectedLevel.slice(1)}
                </span>
                <span className="separator">›</span>
                <span>Module 1</span>
              </div>
              <h1 className="content-title">{courseData.title}</h1>
              <p className="content-description">{courseData.description}</p>
              <div className="content-info">
                <div className="lesson-count">
                  <FaBookReader className="accordion-icon resources" />
                  <span>{getVideosForLevel(selectedLevel).length} Lessons</span>
                </div>
                <div className="level-badge">
                  <FaSignal className="accordion-icon resources" />
                  <span>
                    {selectedLevel.charAt(0).toUpperCase() +
                      selectedLevel.slice(1)}{" "}
                    Level
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="accordion-container">
            {["resources", "notes", "knowledge"].map((section) => (
              <div
                key={section}
                className={`accordion-item ${
                  activeSection === section ? "active" : ""
                }`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleSection(section)}
                >
                  <div className="accordion-title">
                    {section === "resources" && (
                      <FaBookOpen className="accordion-icon resources" />
                    )}
                    {section === "notes" && (
                      <FaFileAlt className="accordion-icon resources" />
                    )}
                    {section === "knowledge" && (
                      <FaLightbulb className="accordion-icon resources" />
                    )}
                    <span>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </div>
                  <i
                    className={`arrow-icon ${
                      activeSection === section ? "up" : "down"
                    }`}
                  ></i>
                </div>
                {activeSection === section && (
                  <div className="accordion-content">
                    {section === "resources" && renderVideos()}
                    {section === "notes" && renderNotes()}
                    {section === "knowledge" && renderKnowledge()}
                    {/* <ProgressBarsDisplay courseId={courseId} /> 👈 pass it as prop */}
                  </div>
                )}
              </div>
            ))}
          </div>
          <ProgressBarsDisplay courseId={courseId} /> {/* 👈 pass it as prop */}
        </div>
      </div>
    </div>
  );
};

export default ValourAcademy;
