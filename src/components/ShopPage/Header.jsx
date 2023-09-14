import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <p className="header__brand" onClick={handleNavHome}>
        ASPHALT
      </p>
      <p className="header__shop">shop</p>
    </div>
  );
};

export default Header;
