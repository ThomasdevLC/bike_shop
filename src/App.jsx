import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Changer de page automatiquement toutes les 3 secondes
    const pageInterval = setInterval(() => {
      setCurrentPage((prevPage) => prevPage + 1);
    }, 4100);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(pageInterval);
  }, []);

  // Définir ici l'enchaînement des pages selon la variable 'currentPage'
  let pageToRender;
  switch (currentPage) {
    case 1:
      pageToRender = <CycleOne />;
      break;
    case 2:
      pageToRender = <CycleTwo />;
      break;
    case 3:
      pageToRender = <CycleThree />;
      break;
    case 4:
      pageToRender = <CycleFour />;
      break;
    case 5:
      pageToRender = <FinalPage />;
      break;
    default:
      pageToRender = null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      {pageToRender}
    </motion.div>
  );
}

export default App;
