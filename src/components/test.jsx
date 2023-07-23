import { useEffect, useRef } from "react";

const Animation = () => {
  const marqueeTextRef = useRef(null);

  useEffect(() => {
    // Sélectionner l'élément texte à faire défiler
    const marqueeText = marqueeTextRef.current;

    // Calculer la distance de défilement nécessaire (ajustez la valeur selon votre besoin)
    // const marqueeWidth = marqueeText.offsetWidth;
    // const containerWidth = marqueeText.parentNode.offsetWidth;
    // const distance = containerWidth - marqueeWidth;

    // Animer le texte en utilisant GSAP
    gsap.to(marqueeText, {
      xPercent: -100,
      duration: 5, // Ajustez la durée en fonction de la vitesse de défilement souhaitée
      repeat: -1, // Pour répéter en boucle le défilement
      ease: "linear", // Pour un défilement linéaire
    });

    // Nettoyer l'animation lorsque le composant est démonté
  }, []);

  return (
    <div className="container">
      <div className="marquee__one">
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
        <div className="city">
          <p>UTC -05:00</p>
          <p>Mexico</p>
        </div>
      </div>
    </div>
  );
};

export default Animation;
