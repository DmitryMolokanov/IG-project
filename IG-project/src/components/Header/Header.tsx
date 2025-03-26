import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <button className="btn header__btn">
        <a href="/list-of-verbs"> List of verbs</a>
      </button>
      <button className="btn header__btn">Start</button>
    </div>
  );
};

export default Header;
