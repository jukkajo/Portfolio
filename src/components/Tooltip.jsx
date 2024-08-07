import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
      <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;

