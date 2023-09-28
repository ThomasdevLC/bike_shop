import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import ThanksPage from "./pages/ThanksPage";
import widthWatcher from "./utils/widthWatcher";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const windowWidth = widthWatcher();

  if (windowWidth < 1470) {
    navigate("/Shop");
  }

  return (
    <div className="appcontainer">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ThanksPage" element={<ThanksPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
