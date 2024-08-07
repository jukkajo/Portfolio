import React, { useState, useEffect } from 'react';

const FloatingProfile = ({ currentComponent }) => {
  const [speechText, setSpeechText] = useState('');

  useEffect(() => {
    // Update speech text based on the current component
    switch (currentComponent) {
      case 'Info':
        setSpeechText('Welcome to the Info section!');
        break;
      case 'Stack':
        setSpeechText('Check out our tech stack!');
        break;
      case 'Roadmap':
        setSpeechText('Here is our roadmap!');
        break;
      default:
        setSpeechText('Hello!');
    }
  }, [currentComponent]);

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center z-50">
      <img 
        src="path/to/profile-picture.jpg" 
        alt="Profile" 
        className="w-20 h-20 rounded-full border-2 border-black" 
      />
      <div className="mt-2 p-2 bg-white border-2 border-black rounded-lg shadow-md max-w-xs text-center">
        {speechText}
      </div>
    </div>
  );
};

export default FloatingProfile;

