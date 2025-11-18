import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Academics from './Components/Academics/Academics';
import Welcome from './Components/Welcome/Welcome';
import CampusLife from './Components/CampusLife/CampusLife';
import PopularCourses from './Components/PopularCourses/PopularCourses';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import Students from './Components/Students/Students';
import NewsBlogs from './Components/NewsBlogs/NewsBlogs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Academics />
      <Welcome />
      <CampusLife />
      <PopularCourses />
      <UpcomingEvents />
      <Students />
      <NewsBlogs />
      <Footer />
    </>
  );
}

export default App;
