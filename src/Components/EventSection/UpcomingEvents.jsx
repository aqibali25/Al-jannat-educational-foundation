import React from "react";
import "../Styles/UpcomingEvents.css";

const UpcomingEvents = ({ event }) => {
  return (
    <div className="eventImageContainer">
      <img src={event.image} alt={event.heading} />
      <span>{event.date}</span>
      <div className="text">
        <h3>
          Event Heading<p>{event.description}</p>
        </h3>
      </div>
    </div>
  );
};
export default UpcomingEvents;
