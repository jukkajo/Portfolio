import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { gotha } from "../assets";
import { useState, useEffect } from "react";
import { db } from "../../firebase"; // Import Firestore instance
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Firestore functions

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [visitCount, setVisitCount] = useState(0); // State to store visit count
  const [showTooltip, setShowTooltip] = useState(false); // State to manage tooltip visibility

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (id) => {
    enablePageScroll();
    setOpenNavigation(false);

    const element = document.getElementById(id);
    if (element) {
      let offset = 0;
      if (id === "info" || id === "profileSummary" || id === "roadmap") {
        offset = -100; // Ascroll offset for "info" and "profileSummary" sections
      }
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchVisitCount = async () => {
      const docRef = doc(db, "metrics", "visitCounter"); // Firestore collection and document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const currentCount = docSnap.data().count;
        setVisitCount(currentCount);

        // Update the visit count
        await updateDoc(docRef, {
          count: currentCount + 1
        });
      } else {
        console.log("No such document!");
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <img src={gotha} width={60} height={40} alt="Logo-Gotha" className="block w-[4rem] xl:mr-8 py-2" />
        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <button onClick={() => handleClick("info")} className="px-4 py-2">Info</button>
            <button onClick={() => handleClick("profileSummary")} className="px-4 py-2">Profile/Summary</button>
            <button onClick={() => handleClick("stack")} className="px-4 py-2">Stack</button>
            <button onClick={() => handleClick("roadmap")} className="px-4 py-2">Work</button>
          </div>
        </nav>
      </div>
      <div
        className="fixed right-0 bottom-1/2 transform translate-y-1/2 p-2 bg-transparent text-white font-mono text-sm border border-gray-300 shadow-lg"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="block">Visit-Counter:</span>
        <span className="block text-lg font-semibold">{visitCount}</span>
        {showTooltip && (
          <div className="absolute -top-0 right-0 p-2 bg-gray-700 text-white text-xs rounded-lg shadow-lg">
            Plenty visits here, fancy.
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

