import React from 'react';
import styles from './PopularCourses.module.css';
import course1 from '../../assets/course-1.png';
import course2 from '../../assets/course-2.png';
import course3 from '../../assets/course-3.png';
import course4 from '../../assets/course-4.png';
import iconStudents from '../../assets/student-icon.png';
import design from '../../assets/design.png';


const courses = [
  {
    image: course1,
    title: 'Dave conservatoire is the Entirely free online',
    lessons: 5,
    students: 56,
    price: 72.0,
  },
  {
    image: course2,
    title: 'Strategy law and Organization foundation',
    lessons: 4,
    students: 77,
    price: 68.0,
  },
  {
    image: course3,
    title: 'Python for Data Science & Machine Learning',
    lessons: 4,
    students: 77,
    price: 68.0,
  },
  {
    image: course4,
    title: 'The complete web develop Ment bootcamp.',
    lessons: 4,
    students: 77,
    price: 68.0,
  },
];

const PopularCourses = () => {
  return (
    <section className={styles.section}>
      
      <h2 className={styles.title}>Popular Courses <br />
        <img src={design} className={styles.Design} alt="decorative line" />
        
      </h2>
      <div className={styles.design}></div>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.image} alt="Course Thumbnail" className={styles.thumbnail} />
            <div className={styles.details}>
              <div className={styles.topRow}>
                <span className={styles.dot}>•</span>
                <span className={styles.category}>UX Design</span>
                <span className={styles.dot}>•</span>
                <span className={styles.lessons}>{course.lessons} Lessons</span>
              </div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <div className={styles.bottomRow}>
                <span className={styles.students}>
                  <img src={iconStudents} alt="Students Icon" />
                  {course.students} Students
                </span>
                <span className={styles.price}>${course.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.viewAll}>View All Courses →</button>
      </div>
    </section>
  );
};

export default PopularCourses;
