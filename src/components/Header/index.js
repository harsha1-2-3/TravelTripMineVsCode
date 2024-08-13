// -------------- Header.js --------------
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <>
      <nav className="headerLg">
        <h1 className="headerLogo">
          <Link to="/" className="link headerLogo">
            Travel Trip
          </Link>
        </h1>
        <div className="optionsUl">
          <Link className="link optionLi" to="/">
            Home
          </Link>
          <Link className="link optionLi" to="/my-trips">
            My Trips
          </Link>
        </div>
        <button onClick={onClickLogout} type="button" className="logoutBtn">
          Logout
        </button>
      </nav>
      {/* Space */}
      <nav className="headerSm">
        <button type="button" className="homeBtn">
          <Link className="link" to="/">
            <img
              className="homeIcon"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428016/Icon_bh1cxc.svg"
              alt="home"
            />
          </Link>
        </button>
        <button type="button" className="homeBtn">
          <Link className="link" to="/my-trips">
            <img
              className="homeIcon"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428124/Vector_xtni4q.svg"
              alt="home"
            />
          </Link>
        </button>
        <button onClick={onClickLogout} type="button" className="homeBtn">
          <img
            className="homeIcon"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722428690/logout_wwyuyd.svg"
            alt="home"
          />
        </button>
      </nav>
    </>
  );
};
export default Header;
