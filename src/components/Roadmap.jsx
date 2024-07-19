import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="From latest to oldest" title="Working History Tree" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-10 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "Ended" ? "ended" : "On Going";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-gradient-to-r from-white to-orange-400" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "Ended" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>

                  {item.text2 && <p className="body-2 mb-6 text-n-3">{item.text2}</p>}

                  {Array.isArray(item.text) && item.text.length > 0 && item.text[0].major ? (
                    <div>
                      <p className="body-2 text-n-3 py-4">{item.text[0].major}</p>
                      <p className="py-3">{item.text[0].heading1}</p>
                      <ul className="list-disc">
                        {item.text[0].list1.map((listItem, index) => (
                          <div className="flex" key={index}>
                            <img src={check2} width={20} height={20} alt="check" className="mr-2" />
                            <li className="body-2 text-n-3">{listItem}</li>
                          </div>
                        ))}
                      </ul>
                      
                      <p className="py-3">{item.text[0].heading2}</p>
                      {item.text[0].heading2  ?
                      <ul className="list-disc" >
                        {item.text[0].list2.map((listItem, index) => (
                          <div className="flex" key={index}>
                            <img src={check2} width={20} height={20} alt="check" className="mr-2" />
                            <li className="body-2 text-n-3">{listItem}</li>
                          </div>
                        ))}
                      </ul>
                      : ''
                      }
                    </div>
                  ) : (
                    <p className="body-2 text-n-3">{item.text}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;

