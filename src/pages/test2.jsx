import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";

function App() {
  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const pages = [
      { path: "/LandingPage", duration: 1800 },
      { path: "/CycleOne", duration: 2800 },
      { path: "/CycleTwo", duration: 3400 },
      { path: "/CycleThree", duration: 4200 },
      { path: "/CycleFour", duration: 3900 },
      { path: "/FinalPage" },
    ];

    const changePage = () => {
      const nextIndex = currentPageIndex + 1;

      if (nextIndex < pages.length) {
        setCurrentPageIndex(nextIndex);
        const nextPath = pages[nextIndex].path;
        navigate(nextPath);
      }
    };

    const intervalId = setInterval(
      changePage,
      pages[currentPageIndex].duration
    );

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentPageIndex, navigate]);

  // If the current page index is 0 (landing page), render it
  if (currentPageIndex === 0) {
    return <LandingPage />;
  }

  return (
    <div className="appcontainer">
      <LandingPage />
      <CycleOne />
      <CycleTwo />
      <CycleThree />
      <CycleFour />
      <FinalPage />
    </div>
  );
}

export default App;
