import React, { useState, useEffect } from 'react';
import { profile } from "../assets";

const FloatingProfile = ({ currentComponent }) => {
  const [speechText, setSpeechText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Updating speech text based on the current component
    switch (currentComponent) {
      case "Info":
        setSpeechText('Welcome here!');
        break;
      case 'ThreeScene':
        setSpeechText('You can interact with this scene via mouse drag to rotate and scroll for zoom.');
        break;
      case 'ProfileSummary':
        setSpeechText('Quick overview.');
        break;
      case 'Stack':
        setSpeechText('Not familiar logos? Drag mouse over to display name.');
        break;
      case 'Roadmap':
        setSpeechText('Some things done in past.');
        break;
      default:
        setSpeechText('Welcome here!');
    }
  }, [currentComponent]);

  return (
    <div className="fixed top-[30%] left-[4.35%] transform -translate-y-1/2 flex flex-col items-center z-50">
      <div className="relative">
        {isVisible ? (
          <>
            <button 
              className="absolute top-[-10px] right-[-10px] p-1 text-sm bg-blue-500 text-white rounded"
              onClick={() => setIsVisible(!isVisible)}
            >
              Hide
            </button>
            <img 
              src={profile} 
              alt="Profile" 
              className="w-40 h-40 rounded-full border-2 border-black" 
            />
            <div className="mt-2 p-4 bg-white border-2 border-black rounded-lg shadow-md max-w-xs flex flex-col items-center justify-center text-center">
              <p className="text-black">{speechText}</p>
            </div>
          </>
        ) : (
          <button 
            className="p-2 bg-blue-500 text-white rounded mx-auto"
            onClick={() => setIsVisible(!isVisible)}
          >
            Show me
          </button>
        )}
      </div>
    </div>
  );
};

export default FloatingProfile;

