// -------------- NotFound.js --------------
import "./index.css";

const NotFound = () => (
  <div className="emptyBg">
    <img
      className="nfImg"
      src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434810/Group_7520_fdzyic.png"
      alt="not found"
    />
    <h1 className="emptyHead"> Page Not Found </h1>
    <p className="emptyPara">
      We are sorry, the page you requested could not be found
    </p>
  </div>
);
export default NotFound;
