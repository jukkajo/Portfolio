import { check } from "../assets";
import { languageIcons, cloudanddbcons, frameworkicons, stackNames } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Stack";
import '../index.css';
import Heading from "./Heading";

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
          className={`transform rotate-${index * (360 / languageIcons.length)} origin-center`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            transform: `translate(-50%, -50%) rotate(${index * (360 / languageIcons.length)}deg) translate(11rem) rotate(${-index * (360 / languageIcons.length)}deg)`,
          }}
        >
          <div className="relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
            <img
              className="m-auto"
              width={app.width}
              height={app.height}
              alt={app.title}
              src={app.icon}
            />
          </div>
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
            {stackNames[5]["languages"]}
          </p>
        </div>
      </div>
    </div> 

    <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {frameworkicons.map((app, index) => (
        <li
          key={app.id}
          className={`transform rotate-${index * (360 / languageIcons.length)} origin-center`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            transform: `translate(-50%, -50%) rotate(${index * (360 / languageIcons.length)}deg) translate(11rem) rotate(${-index * (360 / languageIcons.length)}deg)`,
          }}
        >
          <div className="relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
            <img
              className="m-auto"
              width={app.width}
              height={app.height}
              alt={app.title}
              src={app.icon}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>



        <div className="lg:ml-auto xl:w-[40rem] mt-4">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
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
          className={`transform rotate-${index * (360 / cloudanddbcons.length)} origin-center`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            transform: `translate(-50%, -50%) rotate(${index * (360 / cloudanddbcons.length)}deg) translate(11rem) rotate(${-index * (360 / cloudanddbcons.length)}deg)`,
          }}
        >
          <div className="relative w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl">
            <img
              className="m-auto"
              width={app.width}
              height={app.height}
              alt={app.title}
              src={app.icon}
            />
          </div>
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
