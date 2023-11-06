import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SlideProvider } from "./context/SlideContext";

import Shop from "./pages/Shop";
import ThanksPage from "./pages/ThanksPage";
import ScrollSection from "./pages/ScrollSection";

function App() {
  const location = useLocation();

  return (
    <div className="appcontainer">
      <AnimatePresence mode="wait">
        <SlideProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<ScrollSection />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/ThanksPage" element={<ThanksPage />} />
          </Routes>
        </SlideProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
