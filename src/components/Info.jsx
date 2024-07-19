import { Profile } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Info";
import ClipPath from "../assets/svg/ClipPath";
import { check } from "../assets";

const Info = () => {
  return (
    <Section id="features">
      <Heading
        className="md:max-w-md lg:max-w-2xl"
        title="About"
      />
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Profile/Summary"
        />


        <div className="flex flex-wrap gap-10 mb-10">
          {Profile.map((item) => (
            <div
              className="block z-40 relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                
                
              {Array.isArray(item.text) ? (
  <ul>
    {item.text.map((item, index) => (
      <div className="flex">
      <img src={check} width={20} height={20} alt="check" className="mr-2"/>
      <li key={index}  className="body-2 text-n-3">{item}</li>
      </div>
    ))}
  </ul>
) : (
  <p className="body-2 mb-6 text-n-3">{item.text}</p>
)}

              {item.text2 ? <p className="body-2 mb-6 text-n-3">{item.text2}</p> : ''}
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#Profile)" }}
              >
                <div className="absolute z-20 inset-0 opacity-0 transition-opacity hover:opacity-40">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={300}
                      height={295}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Info;
