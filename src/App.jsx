import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const pages = [
      { path: "/LandingPage", duration: 2200 },
      { path: "/CycleOne", duration: 2800 },
      { path: "/CycleTwo", duration: 3400 },
      { path: "/CycleThree", duration: 4400 },
      { path: "/CycleFour", duration: 3800 },
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

  // Si le currentIndex est 0 (page de démarrage), affichez la page de démarrage
  if (currentPageIndex === 0) {
    return <LandingPage />;
  }

  return (
    <div className="appcontainer">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/CycleOne" element={<CycleOne />} />
          <Route path="/CycleTwo" element={<CycleTwo />} />
          <Route path="/CycleThree" element={<CycleThree />} />
          <Route path="/CycleFour" element={<CycleFour />} />
          <Route path="/FinalPage" element={<FinalPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ThanksPage" element={<ThanksPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
