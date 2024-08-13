// -------------- TripItem.js --------------
import TripContext from "../../context/TripContext";
import "./index.css";

const TripItem = (props) => {
  const { tripDetails } = props;

  const { id, endLocation, startDate, endDate } = tripDetails;

  return (
    <TripContext.Consumer>
      {(value) => {
        const { onClickCancel } = value;

        const clickedCancel = () => {
          onClickCancel(id);
        };

        return (
          <li className="myTripLi">
            <h1 className="destinationName"> {endLocation} </h1>
            <div className="dateCont">
              <h1 className="dateHead"> Date </h1>
              <p className="datePara">
                {startDate} to {endDate}
              </p>
            </div>
            <button onClick={clickedCancel} type="button" className="cancelBtn">
              Cancel
            </button>
          </li>
        );
      }}
    </TripContext.Consumer>
  );
};
export default TripItem;
