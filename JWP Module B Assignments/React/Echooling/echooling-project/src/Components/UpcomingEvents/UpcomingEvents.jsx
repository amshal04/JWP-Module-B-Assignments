import React from "react"; 
import styles from "./UpcomingEvents.module.css";
import design from '../../assets/design.png';
import location from '../../assets/location.png';

const events = [
  {
    day: '14',
    monthYear: 'April, 2022',
    time: '12:00PM - 01:30PM',
    title: '12 Things Successful <br /> Mompreneurs',
    location: 'New York, USA'
  },
  {
    day: '10',
    monthYear: 'January, 2022',
    time: '10:30AM - 12:00PM',
    title: 'A Better Alternative To <br /> Grading Student Writing',
    location: 'New York, USA'
  },
  {
    day: '14',
    monthYear: 'April, 2022',
    time: '12:00PM - 01:30PM',
    title: '12 Things Successful <br /> Mompreneurs',
    location: 'New York, USA'
  },
  {
    day: '26',
    monthYear: 'March, 2022',
    time: '01:30PM - 02:30PM',
    title: 'Ethics in AI Live Event <br /> Machines Judging.',
    location: 'New York, USA'
  }
];

const UpcomingEvents = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Upcoming Events</h2>
    <img src={design} className={styles.design} alt="decorative design" />
    <div className={styles.cards}>
      {events.map((event, i) => (
        <div key={i} className={styles.eventCard}>
          <div className={styles.dateBox}>
            <h3>{event.day}</h3>
            <p>{event.monthYear}</p>
          </div>
          <div className={styles.eventDetails}>
            <span className={styles.time}>{event.time}</span>
            <h4 className={styles.title}>{event.title}</h4>
            <p className={styles.location}>
                <img src={location} alt="Location Icon" className={styles.locationIcon} />
                {event.location}</p>
            <button className={styles.cta}>Find Out More →</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UpcomingEvents;