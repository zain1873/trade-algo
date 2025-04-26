import React, { useState } from "react";
import SessionManagement from "./SessionManagement";
import "../DashboardSidebarComp/styles/platinum.css";

const ScheduleCall = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedAnalyst, setSelectedAnalyst] = useState(null);

  // Current month data
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonthDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day =
        new Date(currentYear, currentMonth, 0).getDate() -
        (firstDayOfMonth - i) +
        1;
      prevMonthDays.push(
        <div key={`prev-${i}`} className="calendar-day prev-month">
          {day}
        </div>
      );
    }

    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate === i;
      currentMonthDays.push(
        <div
          key={`current-${i}`}
          className={`calendar-day current-month ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
        </div>
      );
    }

    const nextMonthDays = [];
    const totalCells = 42; // 6 weeks * 7 days
    const remainingCells =
      totalCells - (prevMonthDays.length + currentMonthDays.length);

    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push(
        <div key={`next-${i}`} className="calendar-day next-month">
          {i}
        </div>
      );
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
  };

  const getMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[currentMonth]} ${currentYear}`;
  };

  const timeSlots = [
    { id: 1, time: "09:00 AM" },
    { id: 2, time: "10:00 AM" },
    { id: 3, time: "11:00 AM" },
    { id: 4, time: "02:00 PM" },
    { id: 5, time: "03:00 PM" },
    { id: 6, time: "04:00 PM" },
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <div className="phone-icon">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <div className="schedule-title">
          <h2>Schedule 1-on-1 Calls</h2>
          <p>Book exclusive sessions with our expert analysts</p>
        </div>
      </div>

      <div className="schedule-box">
        <div className="schedule-box-header">
          <h3>Schedule 1-on-1 Call</h3>
          <p>You have 10 hours of call credits remaining</p>
        </div>

        <div className="schedule-box-content">
          <div className="calendar-section">
            <h4>Select Date</h4>
            <div className="calendar">
              <div className="calendar-header">
                <button className="nav-btn">&lt;</button>
                <div className="month-year">{getMonth()}</div>
                <button className="nav-btn">&gt;</button>
              </div>
              <div className="calendar-weekdays">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div className="calendar-days">{generateCalendar()}</div>
            </div>
          </div>

          <div className="time-analyst-section">
            <div className="time-slot-section">
              <h4>Select Time Slot</h4>
              <div className="time-slots">
                {timeSlots.map((slot, index) =>
                  index % 2 === 0 ? (
                    <div key={slot.id} className="time-slot-row">
                      <div
                        className={`time-slot ${
                          selectedTimeSlot === slot.time ? "selected" : ""
                        }`}
                        onClick={() => handleTimeSlotSelect(slot.time)}
                      >
                        {slot.time}
                      </div>
                      {timeSlots[index + 1] && (
                        <div
                          className={`time-slot ${
                            selectedTimeSlot === timeSlots[index + 1].time
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleTimeSlotSelect(timeSlots[index + 1].time)
                          }
                        >
                          {timeSlots[index + 1].time}
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <div className="analyst-section">
              <h4>Select Analyst</h4>
              <div className="select-dropdown">
                <select
                  value={selectedAnalyst || ""}
                  onChange={(e) => setSelectedAnalyst(e.target.value)}
                >
                  <option value="" disabled>
                    Select an analyst
                  </option>
                  <option value="analyst1">John Doe</option>
                  <option value="analyst2">Jane Smith</option>
                  <option value="analyst3">Robert Johnson</option>
                </select>
                <div className="select-arrow">
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              <button
                className="schedule-btn"
                disabled={
                  !selectedDate || !selectedTimeSlot || !selectedAnalyst
                }
              >
                Schedule Call (1 Hour Credit)
              </button>
            </div>
          </div>
        </div>
      </div>

      <SessionManagement />
    </div>
  );
};

export default ScheduleCall;
