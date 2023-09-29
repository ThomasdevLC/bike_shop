import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import ThanksPage from "./pages/ThanksPage";

function App() {
  const location = useLocation();

  return (
    <div className="appcontainer br">
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
