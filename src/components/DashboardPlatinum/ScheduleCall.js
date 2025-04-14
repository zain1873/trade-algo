import React from 'react';

const ScheduleCall = () => {
  return (
    <div className="container">
      <h2 className="mb-4 text-white">Book a 1-on-1 Call</h2>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://calendly.com/zain-saleem155/new-meeting-1"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Schedule"
        ></iframe>
      </div>
    </div>
  );
};

export default ScheduleCall;
