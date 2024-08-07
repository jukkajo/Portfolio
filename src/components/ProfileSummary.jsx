import { useState, useEffect } from "react";
import { db } from "../../firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import { Profile } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Info";
import ClipPath from "../assets/svg/ClipPath";
import { check, arrow, pinpoint, card6 } from "../assets";

const ProfileSummary = () => {
  const [state, setState] = useState({
    city: "",
    n: "",
    e: "",
    country: "",
  });

  useEffect(() => {
    const fetchLocation = async () => {
      const docRef = doc(db, "metrics", "location"); // Firestore collection and document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setState({
          city: data.city,
          n: data.coords.n,
          e: data.coords.e,
          country: data.country,
        });
      } else {
        console.log("No such document!");
      }
    };

    fetchLocation();
  }, []);

  const { city, n, e, country } = state;

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Profile/Summary" />
        <div className="flex flex-wrap gap-2 mb-10">
          {Profile.map((item) => (
            <div
              className="block z-40 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] min-h-[22rem] w-full md:w-[24rem] h-[22rem] overflow-hidden"
              key={item.id}
            >
              <div className="absolute inset-0 p-2"> {/* Add padding around the image */}
                <img src={card6} className="w-full h-full object-contain" alt="card6" /> {/* Use object-contain to fit the image within the container */}
              </div>
              <div className="relative z-2 flex flex-col p-[2.4rem]">
                <h5 className="h5 mb-5 text-center">{item.title}</h5>

                {Array.isArray(item.text) ? (
                  <ul>
                    {item.text.map((textItem, index) => (
                      <div className="flex items-start" key={index}>
                        <img src={check} width={20} height={20} alt="check" className="mr-2 flex-shrink-0" />
                        <li className="body-2 text-n-3">{textItem}</li>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                )}

                {item.text3 ? (
                  <ul>
                    {item.text3.map((textItem, index) => (
                      <div className="flex items-start" key={index}>
                        <img src={arrow} width={30} height={30} alt="arrow" className="mr-2 flex-shrink-0 pt-2" />
                        <li className="body-2 text-n-3">{textItem}</li>
                      </div>
                    ))}
                  </ul>
                ) : null}

                {item.text2 ? <p className="body-2 mb-6 text-n-3">{item.text2}</p> : null}

                {item.text4 ? (
                  <ul className="list-none p-0 m-0">
                    {item.text4.map((textItem, index) => (
                      <li
                        className={`flex items-center ${index < item.text4.length - 1 ? 'border-b border-gray-300' : ''} py-2`}
                        key={index}
                      >
                        <a
                          href={textItem[1]}
                          className="text-blue-500 hover:text-blue-700 underline relative before:absolute before:w-full before:h-[2px] before:bg-blue-500 before:bottom-0 before:left-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:transform hover:before:scale-x-100 hover:before:origin-left no-underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {textItem[0]}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.id === "0" ? (
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-center">
                      <img src={pinpoint} alt="pinpoint" className="w-[40%] h-[40%]" />
                    </div>
                    <h1>{country}</h1>
                    <h1>{city}</h1>
                    <h2>N: {n} E: {e}</h2>
                  </div>
                ) : null}
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProfileSummary;

