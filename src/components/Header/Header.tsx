import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <button className="btn header__btn">
        <Link to="/">Info</Link>
      </button>
      <button className="btn header__btn">
        <Link to="/verb_list"> List of verbs</Link>
      </button>
      <button className="btn header__btn">Start</button>
    </div>
  );
};

export default Header;
