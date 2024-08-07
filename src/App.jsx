import React, { useState, useEffect } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Info from "./components/Info";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import ProfileSummary from './components/ProfileSummary';
import FloatingProfile from './components/FloatingProfile'; 
import ThreeScene from './components/ThreeScene'; 
import { Profile } from './constants';

const componentThresholds = {
  Info: 0,
  ThreeScene: 0,
  Stack: 70,
  Roadmap: 0,
  ProfileSummary: 20,
};

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Info');

  useEffect(() => {
    const components = {
      Info: document.querySelector('#info'),
      ThreeScene: document.querySelector('#threeScene'),
      Stack: document.querySelector('#stack'),
      Roadmap: document.querySelector('#roadmap'),
      ProfileSummary: document.querySelector('#profileSummary'),
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calculate the scroll percentage
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      // Determine the component in view
      let activeComponent = 'Info';
      let maxIntersection = 0;

      for (const [key, element] of Object.entries(components)) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = rect.bottom + window.scrollY;

          // Calculate the intersection height and percentage
          const intersectionTop = Math.max(0, Math.min(elementBottom, scrollTop + winHeight) - elementTop);
          const intersectionHeight = Math.min(elementBottom, scrollTop + winHeight) - Math.max(elementTop, scrollTop);
          const intersectionPercent = (intersectionHeight / rect.height) * 100;

          // Check if the intersection percentage meets the threshold for the component
          if (intersectionPercent >= componentThresholds[key] && intersectionPercent > maxIntersection) {
            maxIntersection = intersectionPercent;
            activeComponent = key;
          }
        }
      }

      setCurrentComponent(activeComponent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div id="info">
          <Info />
        </div>
        <div id="threeScene">
          <ThreeScene /> 
        </div>
        <div id="profileSummary">
          <ProfileSummary Profile={Profile} />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <Footer />
      </div>

      <FloatingProfile currentComponent={currentComponent} />
      <ButtonGradient />
    </>
  );
};

export default App;

