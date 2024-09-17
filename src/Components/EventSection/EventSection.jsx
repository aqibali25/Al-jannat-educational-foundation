import React from "react";
import "./EventSection.css";
import UpcomingEvents from "./UpcomingEvents";
import ImportantDatesSlider from "./ImportantDatesSlider";
import UmcomingEventImage from "../../assets/UmcomingEventImage.jpg";

const EventDates = [
  {
    image: UmcomingEventImage,
    date: "06-Nov-23",
    heading: "Event Heading 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
  {
    image: UmcomingEventImage,
    date: "05-Oct-23",
    heading: "Event Heading 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
  {
    image: UmcomingEventImage,
    date: "06-Nov-24",
    heading: "Event Heading 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
  {
    image: UmcomingEventImage,
    date: "05-Oct-24",
    heading: "Event Heading 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
  {
    image: UmcomingEventImage,
    date: "06-Nov-25",
    heading: "Event Heading 5",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
  {
    image: UmcomingEventImage,
    date: "05-Oct-25",
    heading: "Event Heading 6",
    description:
      "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit",
  },
];
const EventSection = ({}) => {
  return (
    <section className="event-section container">
      <UpcomingEvents event={EventDates[0]} />
      <ImportantDatesSlider dates={EventDates} />
    </section>
  );
};

export default EventSection;
