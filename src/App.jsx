import { useState, useEffect } from "react";
import CycleOne from "./pages/CycleOne";
import CycleTwo from "./pages/CycleTwo";
import CycleThree from "./pages/CycleThree";
import CycleFour from "./pages/CycleFour";
import FinalPage from "./pages/FinalPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false); // Ajouter un état pour suivre le chargement des images
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pages = [
    { component: <LandingPage />, duration: 1800 },
    { component: <CycleOne />, duration: 3000 },
    { component: <CycleTwo />, duration: 3600 },
    { component: <CycleThree />, duration: 4500 },
    { component: <CycleFour />, duration: 3900 },
    { component: <FinalPage />, duration: 3000 },
  ];

  // Liste des URLs des images utilisées dans les pages
  const imageUrls = [
    "./assets/images/josh.webp",
    "./assets/images/josh1.webp",
    "./assets/images/josh2.webp",
    "./assets/images/josh3.webp",
    "./assets/images/josh4.webp",
    "./assets/images/josh5.webp",
  ];

  useEffect(() => {
    // Fonction pour précharger les images
    const preloadImages = async () => {
      try {
        await Promise.all(
          imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        // Toutes les images sont chargées, on peut afficher l'application
        setImagesLoaded(true);
      } catch (error) {
        console.error("Erreur lors du chargement des images:", error);
        // En cas d'erreur, on peut toujours afficher l'application, mais les images pourraient ne pas être fluides
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []); // Utilisez une dépendance vide pour que cela ne soit exécuté qu'une seule fois lors du chargement initial

  useEffect(() => {
    // Ne pas exécuter l'intervalle tant que les images ne sont pas préchargées
    if (!imagesLoaded) return;

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
  }, [activePageIndex, pages, imagesLoaded]); // Ajouter imagesLoaded comme dépendance ici

  if (!imagesLoaded) {
    return <div>Chargement...</div>; // Affichez un écran de chargement jusqu'à ce que les images soient préchargées
  }

  return (
    <div className="appcontainer">
      <div>{pages[activePageIndex].component}</div>
    </div>
  );
}

export default App;
