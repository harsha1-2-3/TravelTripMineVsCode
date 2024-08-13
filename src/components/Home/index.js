// -------------- Home.js --------------
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="homeBg">
      <img
        className="homeImg"
        alt="homeImg"
        src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434489/image_5_oohqw7.png"
      />
      <div className="textCont">
        <h1 className="homeHead"> Travel. Relax. Memories. </h1>
        <p className="homePara">
          With travel trip you can experience new travel and the best
          destinations.
        </p>
        <Link className="link" to="/book-a-new-trip">
          <button type="button" className="bookTripBtn">
            Book a new trip
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default Home;
