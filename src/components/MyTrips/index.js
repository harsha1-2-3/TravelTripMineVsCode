// -------------- MyTrips.js --------------
import { Link } from "react-router-dom";
import Header from "../Header";
import TripItem from "../TripItem";
import TripContext from "../../context/TripContext";
import "./index.css";

const MyTrips = () => {
  const renderEmptyView = () => (
    <div className="emptyBg">
      <img
        className="emptyImg"
        src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722434678/Vector_j2yqql.png"
        alt="no trips"
      />
      <h1 className="emptyHead">No upcoming trips</h1>
      <h1 className="emptyPara">
        When you book a trip, you will see your trip details here.
      </h1>
      <Link className="link" to="/book-a-new-trip">
        <button type="button" className="emptyBtn">
          Book a new trip
        </button>
      </Link>
    </div>
  );

  const renderTripsList = (tripsList) => (
    <div className="myTripsBg">
      <h1 className="myTripsHead"> My Trips </h1>
      <ul className="myTripsUl">
        {tripsList.map((each) => (
          <TripItem tripDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  );

  return (
    <TripContext.Consumer>
      {(value) => {
        const { tripsList } = value;
        return (
          <>
            <Header />
            {tripsList.length === 0
              ? renderEmptyView()
              : renderTripsList(tripsList)}
          </>
        );
      }}
    </TripContext.Consumer>
  );
};
export default MyTrips;
