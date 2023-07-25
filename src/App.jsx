import { useState, useEffect } from "react";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pages = [
    { component: <CycleOne />, duration: 3000 },
    { component: <CycleTwo />, duration: 3600 },
    { component: <CycleThree />, duration: 4300 },
    { component: <CycleFour />, duration: 3800 },
    { component: <FinalPage />, duration: 3000 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePageIndex((prevIndex) => {
        // Si c'est la dernière page, arrêter l'intervalle
        if (prevIndex === pages.length - 1) {
          clearInterval(interval);
        }
        // Passer à la page suivante, sauf si c'est la dernière page
        return prevIndex === pages.length - 1
          ? prevIndex
          : (prevIndex + 1) % pages.length;
      });
    }, pages[activePageIndex].duration);

    return () => clearInterval(interval);
  }, [activePageIndex, pages]);

  return (
    <div className="appcontainer">
      <div>{pages[activePageIndex].component}</div>
    </div>
  );
}

export default App;
