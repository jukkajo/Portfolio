import { useState } from 'react';
import { Profile } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Info";
import ClipPath from "../assets/svg/ClipPath";
import { check } from "../assets";

const Info = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <Section id="features">
      <div className="container relative">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Where have I arrived?"
        />
        <div className="space-y-4"> {/* This adds space between paragraphs */}
          <p className="text-lg">
            This my portfolio. Aim here is to demo basic frontend development skills, provide an overview of my tech stack and share some overall vibes. This site is built with React.js (+ bunch of other technologies) and styled with tailwind-css. Thanks for visiting and feel free to roam around!
          </p>
          <button className="text-lg text-blue-500 cursor-pointer underline" onClick={handleClick}>
            Psst, page loading? (click me)
          </button>
          {showMessage && (
            <p className="text-lg">
              (With lower network speeds, it may take a moment to load 3D-space on this page.)
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Info;

