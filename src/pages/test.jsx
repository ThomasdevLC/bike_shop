import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";
import Shop from "./pages/Shop";
import ThanksPage from "./pages/ThanksPage";

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // Declare the pages array outside of the useEffect hook
  const pages = [
    { component: <LandingPage />, duration: 2200 },
    { component: <CycleOne />, duration: 2700 },
    { component: <CycleTwo />, duration: 2650 },
    { component: <CycleThree />, duration: 3400 },
    { component: <CycleFour />, duration: 3300 },
    { component: <FinalPage /> },
  ];

  useEffect(() => {
    const changePage = () => {
      const nextIndex = currentPageIndex + 1;

      if (nextIndex < pages.length) {
        setCurrentPageIndex(nextIndex);
      }
    };

    const intervalId = setInterval(
      changePage,
      pages[currentPageIndex].duration
    );

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [pages, currentPageIndex]);

  // Si le currentIndex est 0 (page de démarrage), affichez la page de démarrage
  if (currentPageIndex === 0) {
    return <LandingPage />;
  }

  return (
    <div className="appcontainer">
      <AnimatePresence mode="wait">
        {pages[currentPageIndex].component}
      </AnimatePresence>
    </div>
  );
}

export default App;
