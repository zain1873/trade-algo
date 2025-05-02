import React, { useState } from 'react';

function ViewChallenge() {
  const [answer, setAnswer] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Sample challenge data (you would fetch this from API in real app)
  const challenge = {
    deadline: "May 10, 2025",
    points: 50,
    difficulty: "Intermediate"
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a backend
    console.log('Submitting:', { answer, screenshot });
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setAnswer('');
      setScreenshot(null);
      setPreviewUrl('');
    }, 3000);
  };

  return (
    <div className="challenge-container">
      <div className="challenge-header-details">
        <h2>{challenge.title}</h2>
        <div className="challenge-meta">
          <span className="badge-challenge bg-primary me-2">Deadline: {challenge.deadline}</span>
          <span className="badge-challenge bg-success me-2">{challenge.points} Points</span>
          <span className="badge-challenge bg-warning">{challenge.difficulty}</span>
        </div>
      </div>

      <div className="challenge-description-details">
        <h4>Challenge Description:</h4>
        <p>{challenge.description}</p>
      </div>

      <div className="submission-form">
        <h4>Your Submission</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 challenge-form">
            <label htmlFor="answerText" className="form-label">Your Answer:</label>
            <textarea 
              id="answerText" 
              className="form-control" 
              rows="6" 
              value={answer}
              onChange={handleAnswerChange}
              placeholder="Type your answer here..."
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="screenshotUpload" className="form-label">Upload Screenshot:</label>
            <input 
              type="file" 
              className="form-control" 
              id="screenshotUpload" 
              accept="image/*"
              onChange={handleScreenshotChange}
              required
            />
            
            {previewUrl && (
              <div className="screenshot-preview mt-2">
                <h5>Preview:</h5>
                <img src={previewUrl} alt="Screenshot preview" className="img-thumbnail" />
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="btn btn-primary submit-btn"
            disabled={submitted}
          >
            {submitted ? 'Submitted!' : 'Submit Answer'}
          </button>
          
          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Your challenge answer has been submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ViewChallenge;