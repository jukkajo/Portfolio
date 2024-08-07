import React from 'react';
import { check } from "../assets";
import { languageIcons, cloudanddbcons, frameworkicons, stackNames } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Stack";
import '../index.css';
import Heading from "./Heading";
import Tooltip from "./Tooltip"; // Import the Tooltip component

const Stack = () => {
  return (
    <Section crosses>
      <div>
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Some Of The Familiar Technologies"
        />

        <div className="container lg:flex">
          <div className="lg:ml-auto xl:w-[38rem] mt-4 mr-20">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[10rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <p className="body-2 text-2xl mx-auto">
                      {stackNames[5]["languages"]}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {languageIcons.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute transform rotate-${index * (360 / languageIcons.length)} origin-center`}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * (360 / languageIcons.length)}deg) translateY(11rem) rotate(${-index * (360 / languageIcons.length)}deg)`,
                    }}
                  >
                    <Tooltip text={app.title}>
                      <div className="bg-white relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl flex items-center justify-center">
                        <img
                          className="block"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </Tooltip>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-4 mr-20">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[10rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <p className="body-2 text-2xl mx-auto">
                      {stackNames[2]["frameworks"]}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {frameworkicons.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute transform rotate-${index * (360 / frameworkicons.length)} origin-center`}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * (360 / frameworkicons.length)}deg) translateY(11rem) rotate(${-index * (360 / frameworkicons.length)}deg)`,
                    }}
                  >
                    <Tooltip text={app.title}>
                      <div className="bg-white relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl flex items-center justify-center">
                        <img
                          className="block"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </Tooltip>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          <div className="lg:ml-auto xl:w-[40rem] mt-4">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[10rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <p className="body-2 text-2xl mx-auto">
                      {stackNames[0]["cloudanddbs"]}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {cloudanddbcons.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute transform rotate-${index * (360 / cloudanddbcons.length)} origin-center`}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * (360 / cloudanddbcons.length)}deg) translateY(11rem) rotate(${-index * (360 / cloudanddbcons.length)}deg)`,
                    }}
                  >
                    <Tooltip text={app.title}>
                      <div className="bg-white relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl flex items-center justify-center">
                        <img
                          className="block"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </Tooltip>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Stack;

