import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";

function App() {
  const pages = [
    { path: "/LandingPage", component: LandingPage, duration: 1800 },
    { path: "/CycleOne", component: CycleOne, duration: 3000 },
    { path: "/CycleTwo", component: CycleTwo, duration: 3600 },
    { path: "/CycleThree", component: CycleThree, duration: 4500 },
    { path: "/CycleFour", component: CycleFour, duration: 3900 },
    { path: "/FinalPage", component: FinalPage, duration: 3000 },
  ];

  const navigate = useNavigate();
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // Start with the first page (LandingPage)

  useEffect(() => {
    // Start navigation for subsequent pages with their respective durations
    if (currentPageIndex < pages.length - 1) {
      const currentDuration = pages[currentPageIndex].duration;
      const interval = setInterval(navigateToNextPage, currentDuration);

      return () => clearInterval(interval);
    }
  }, [currentPageIndex, navigate, pages]);

  const navigateToNextPage = () => {
    const nextPageIndex = currentPageIndex + 1;

    if (nextPageIndex < pages.length) {
      setCurrentPageIndex(nextPageIndex);
      const nextPagePath = pages[nextPageIndex].path;
      navigate(nextPagePath);
    }
  };

  return (
    <div className="appcontainer">
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
