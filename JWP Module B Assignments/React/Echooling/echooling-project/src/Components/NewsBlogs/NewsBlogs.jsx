import React from "react";
import styles from "./NewsBlogs.module.css";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-1.jpg"; 
import design from "../../assets/design.png";
import userIcon from "../../assets/single-student.png";

const blogData = [
  {
    img: blog1,
    category: "Education",
    title: "Kids future Schools & Corona Prevent to Growth",
    author: "Charlie Doyle",
    date: "April 18",
  },
  {
    img: blog2,
    category: "Education",
    title: "Echooling future Schools & social Innovation",
    author: "Charlie Doyle",
    date: "April 18",
  },
  {
    img: blog3,
    category: "Education",
    title: "7 Learning system design tips For better eLearning",
    author: "Charlie Doyle",
    date: "April 18",
  },
  {
    img: blog4,
    category: "Education",
    title: "Why schools should continue remote study",
    author: "Charlie Doyle",
    date: "April 18",
  },
];

const NewsBlogs = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>
      Echooling News and Blogs
      <br />
      <img src={design} alt="design" className={styles.design} />
    </h2>

    <div className={styles.cards}>
      {blogData.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={item.img} alt={item.title} />
            <span className={styles.badge}>{item.date}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.category}>{item.category}</span>
            <h3 className={styles.titleText}>{item.title}</h3>
            <div className={styles.author}>
              <img src={userIcon} alt="author" />
              <span>{item.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NewsBlogs;
