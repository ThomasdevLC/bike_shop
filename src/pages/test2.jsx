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
      { path: "/CycleOne", duration: 3000 },
      { path: "/CycleTwo", duration: 3600 },
      { path: "/CycleThree", duration: 4500 },
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

    // If the current page is the landing page, navigate to the first page after its duration
    if (currentPageIndex === 0) {
      setTimeout(changePage, pages[currentPageIndex].duration);
    } else {
      // Call the changePage function after the specified duration for the current page
      const intervalId = setInterval(
        changePage,
        pages[currentPageIndex].duration
      );

      // Clean up the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [currentPageIndex, navigate]);

  // If the current page index is 0 (landing page), render it
  if (currentPageIndex === 0) {
    return <LandingPage />;
  }

  return (
    <div className="appcontainer">
      <Routes>
        <Route path="/CycleOne" element={<CycleOne />} />
        <Route path="/CycleTwo" element={<CycleTwo />} />
        <Route path="/CycleThree" element={<CycleThree />} />
        <Route path="/CycleFour" element={<CycleFour />} />
        <Route path="/FinalPage" element={<FinalPage />} />
      </Routes>
    </div>
  );
}

export default App;
