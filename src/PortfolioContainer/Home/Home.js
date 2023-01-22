import React from 'react';
import './Home.css';
import Profile from './Profile';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Navbar/Navbar';
export default function Home() {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
