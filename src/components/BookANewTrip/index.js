import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import TripContext from "../../context/TripContext";
import "./index.css";

const stepsList = [
  {
    stepId: "YOUR_DETAILS",
    displayText: "Your Details",
    completed: false,
  },
  {
    stepId: "DATE_SELECTION",
    displayText: "Date Selection",
    completed: false,
  },
  {
    stepId: "GUESTS",
    displayText: "Guests",
    completed: false,
  },
  {
    stepId: "TRAVEL_ASSISTANCE",
    displayText: "Travel Assistance",
    completed: false,
  },
  {
    stepId: "CONFIRMATION",
    displayText: "Confirmation",
    completed: false,
  },
];

const travelAssistanceList = [
  {
    value: "car",
    displayText: "Car",
    id: 1,
  },
  {
    value: "flight",
    displayText: "Flight",
    id: 2,
  },
  {
    value: "bus",
    displayText: "Bus",
    id: 3,
  },
  {
    value: "train",
    displayText: "Train",
    id: 4,
  },
];

class BookANewTrip extends Component {
  state = {
    activeStepId: stepsList[0].stepId,
    stateStepsList: stepsList,
    username: "",
    errorName: false,
    startLocation: "",
    errorStartLocation: false,
    endLocation: "",
    errorEndLocation: false,
    startDate: "",
    errorStartDate: false,
    endDate: "",
    errorEndDate: false,
    errorLessDate: false,
    adults: 1,
    childrens: 0,
    infants: 0,
    needTravel: false,
    activeTravel: "Car",
    isConfirmed: false,
  };

  onChangeName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeStartLocation = (event) => {
    this.setState({
      startLocation: event.target.value,
    });
  };

  onChangeEndLocation = (event) => {
    this.setState({
      endLocation: event.target.value,
    });
  };

  onChangeStartDate = (event) => {
    this.setState({
      startDate: event.target.value,
    });
  };

  onChangeEndDate = (event) => {
    this.setState({
      endDate: event.target.value,
    });
  };

  onAdultsPlus = () => {
    this.setState((prevState) => ({
      adults: prevState.adults + 1,
    }));
  };

  onAdultsMinus = () => {
    const { adults } = this.state;
    if (adults <= 1) {
      this.setState({
        adults: 1,
      });
    } else {
      this.setState((prevState) => ({
        adults: prevState.adults - 1,
      }));
    }
  };

  onChildrenPlus = () => {
    this.setState((prevState) => ({
      childrens: prevState.childrens + 1,
    }));
  };

  onChildrenMinus = () => {
    const { childrens } = this.state;
    if (childrens <= 0) {
      this.setState({
        childrens: 0,
      });
    } else {
      this.setState((prevState) => ({
        childrens: prevState.childrens - 1,
      }));
    }
  };

  onInfantsPlus = () => {
    this.setState((prevState) => ({
      infants: prevState.infants + 1,
    }));
  };

  onInfantsMinus = () => {
    const { infants } = this.state;
    if (infants <= 0) {
      this.setState({
        infants: 0,
      });
    } else {
      this.setState((prevState) => ({
        infants: prevState.infants - 1,
      }));
    }
  };

  onCheckTravel = (event) => {
    if (event.target.checked) {
      this.setState({
        needTravel: true,
      });
    }
  };

  onChangeTravel = (event) => {
    this.setState({
      activeTravel: event.target.value,
    });
  };

  renderYourDetailsForm = () => {
    const {
      username,
      startLocation,
      endLocation,
      errorName,
      errorStartLocation,
      errorEndLocation,
    } = this.state;
    const nameFilled = errorName ? "bookInputIconContError" : "";
    const startLocationFilled = errorStartLocation
      ? "bookInputIconContError"
      : "";
    const endLocationFilled = errorEndLocation ? "bookInputIconContError" : "";

    return (
      <div>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Your Details</h1>
          <p className="bookTripLgPara">Enter your name and location details</p>
          <form className="detailsFormLg">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Name
              </label>
              <div className={`bookInputIconCont ${nameFilled}`}>
                <input
                  placeholder="Enter your name"
                  id="name"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeName}
                  value={username}
                />
                {errorName ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorName && <p className="bookErrorMsg">Enter your name</p>}
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start location
              </label>
              <div className={`bookInputIconCont ${startLocationFilled}`}>
                <input
                  placeholder="Enter start location"
                  id="start"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeStartLocation}
                  value={startLocation}
                />
                {errorStartLocation ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorStartLocation && (
                <p className="bookErrorMsg">Enter your start location</p>
              )}
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End location
              </label>
              <div className={`bookInputIconCont ${endLocationFilled}`}>
                <input
                  placeholder="Enter end location"
                  id="end"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeEndLocation}
                  value={endLocation}
                />
                {errorEndLocation ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorEndLocation && (
                <p className="bookErrorMsg">Enter your end location</p>
              )}
            </div>
            <button
              onClick={this.onYourDetailsNext}
              type="button"
              className="bookLgNextBtn"
            >
              Next
            </button>
          </form>
        </div>
        {/* Space */}

        <div className="detailsCont">
          <h1 className="detailsHead">Your Details</h1>
          <p className="detailsPara">Enter your name and location details</p>
          <form className="detailsForm">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Name
              </label>
              <div className={`bookInputIconCont ${nameFilled}`}>
                <input
                  placeholder="Enter your name"
                  id="name"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeName}
                  value={username}
                />
                {errorName ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorName && <p className="bookErrorMsg">Enter your name</p>}
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start location
              </label>
              <div className={`bookInputIconCont ${startLocationFilled}`}>
                <input
                  placeholder="Enter start location"
                  id="start"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeStartLocation}
                  value={startLocation}
                />
                {errorStartLocation ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorStartLocation && (
                <p className="bookErrorMsg">Enter your start location</p>
              )}
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End location
              </label>
              <div className={`bookInputIconCont ${endLocationFilled}`}>
                <input
                  placeholder="Enter end location"
                  id="end"
                  className="bookInputBox"
                  type="text"
                  onChange={this.onChangeEndLocation}
                  value={endLocation}
                />
                {errorEndLocation ? (
                  <img
                    className="inputErrorIcon"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1722433458/info-circle_esho1i.svg"
                    alt="input error"
                  />
                ) : null}
              </div>
              {errorEndLocation && (
                <p className="bookErrorMsg">Enter your end location</p>
              )}
            </div>
          </form>
          <button
            type="button"
            onClick={this.onYourDetailsNext}
            className="bookNextBtn"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  onYourDetailsNext = () => {
    const { username, startLocation, endLocation } = this.state;
    let hasErrors = false;

    if (startLocation === "") {
      this.setState({ errorStartLocation: true });
      hasErrors = true;
    } else {
      this.setState({ errorStartLocation: false });
    }

    if (endLocation === "") {
      this.setState({ errorEndLocation: true });
      hasErrors = true;
    } else {
      this.setState({ errorEndLocation: false });
    }

    if (username === "") {
      this.setState({ errorName: true });
      hasErrors = true;
    } else {
      this.setState({ errorName: false });
    }

    if (!hasErrors) {
      this.setState({ activeStepId: stepsList[1].stepId });
      this.updateStepCompletion(stepsList[0].stepId, true);
    }
  };

  renderDateForm = () => {
    const { startDate, endDate, errorEndDate, errorStartDate, errorLessDate } =
      this.state;
    const startDateFilled = errorStartDate ? "bookInputIconContError" : "";
    const endDateFilled = errorEndDate ? "bookInputIconContError" : "";

    return (
      <div>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Date Selection</h1>
          <p className="bookTripLgPara">Select your Start and End Date</p>
          <div className="detailsFormLg">
            <div className="bookInputCont">
              <label htmlFor="name" className="bookInputLabel">
                Start Date
              </label>
              <div className={`bookInputIconCont ${startDateFilled}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="name"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeStartDate}
                  value={startDate}
                />
              </div>
              {errorStartDate && (
                <p className="bookErrorMsg">Select start date</p>
              )}
            </div>
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                End Date
              </label>
              <div className={`bookInputIconCont ${endDateFilled}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="start"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeEndDate}
                  value={endDate}
                />
              </div>
              {errorEndDate && <p className="bookErrorMsg">Select end date</p>}
              {errorLessDate && (
                <p className="bookErrorMsg">
                  The end date cannot be less than the start date
                </p>
              )}
            </div>
            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onDatePrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onDateNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Space */}

        <div className="detailsCont">
          <h1 className="detailsHead">Date Selection</h1>
          <p className="detailsPara">Select your Start and End Date</p>
          <div className="detailsForm">
            <div className="bookInputCont">
              <label htmlFor="start" className="bookInputLabel">
                Start Date
              </label>
              <div className={`bookInputIconCont ${startDateFilled}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="start"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeStartDate}
                  value={startDate}
                />
              </div>
              {errorStartDate && (
                <p className="bookErrorMsg">Select start date</p>
              )}{" "}
            </div>
            <div className="bookInputCont">
              <label htmlFor="end" className="bookInputLabel">
                End Date
              </label>
              <div className={`bookInputIconCont ${endDateFilled}`}>
                <input
                  placeholder="dd/mm/yyyy"
                  id="end"
                  className="bookInputBox"
                  type="date"
                  onChange={this.onChangeEndDate}
                  value={endDate}
                />
              </div>
              {errorEndDate && <p className="bookErrorMsg">Select end date</p>}
              {errorLessDate && (
                <p className="bookErrorMsg">
                  The end date cannot be less than the start date
                </p>
              )}
            </div>
          </div>
          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onDatePrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onDateNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  onDateNext = () => {
    const { startDate, endDate } = this.state;

    let hasErrors = false;
    if (startDate === "") {
      this.setState({
        errorStartDate: true,
      });
      hasErrors = true;
    } else {
      this.setState({ errorStartDate: false });
    }
    if (endDate === "") {
      this.setState({
        errorEndDate: true,
      });
      hasErrors = true;
    } else {
      this.setState({ errorEndDate: false });
    }
    if (endDate < startDate) {
      this.setState({
        errorLessDate: true,
      });
      hasErrors = true;
    } else {
      this.setState({ errorLessDate: false });
    }
    if (!hasErrors) {
      this.setState({
        activeStepId: stepsList[2].stepId,
      });
      this.updateStepCompletion(stepsList[1].stepId, true);
    }
  };

  onDatePrev = () => {
    this.setState({
      activeStepId: stepsList[0].stepId,
    });
    this.updateStepCompletion(stepsList[0].stepId, false);
  };

  renderGuestsForm = () => {
    const { adults, childrens, infants } = this.state;
    return (
      <div>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Guests</h1>
          <p className="bookTripLgPara">Select your guests</p>
          <div className="detailsFormLg">
            <ul className="guestsUl">
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Adults</p>
                  <p className="guestPara">Age 13 or above</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onAdultsMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{adults}</p>
                  <button
                    type="button"
                    onClick={this.onAdultsPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Children</p>
                  <p className="guestPara">Age 2-12</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onChildrenMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{childrens}</p>
                  <button
                    type="button"
                    onClick={this.onChildrenPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="guestLi">
                <div className="guestTextCont">
                  <p className="guestHead">Infants</p>
                  <p className="guestPara">under 2</p>
                </div>
                <div className="guestsCountCont">
                  <button
                    type="button"
                    onClick={this.onInfantsMinus}
                    className="mpBtn"
                  >
                    -
                  </button>
                  <p className="guestCount">{infants}</p>
                  <button
                    type="button"
                    onClick={this.onInfantsPlus}
                    className="mpBtn"
                  >
                    +
                  </button>
                </div>
              </li>
            </ul>
            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onGuestsPrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onGuestsNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Space */}
        <div className="detailsCont">
          <h1 className="detailsHead">Guests</h1>
          <p className="detailsPara">Select your guests</p>
          <ul className="guestsUl">
            <li className="guestLi">
              <div className="guestTextCont">
                <p className="guestHead">Adults</p>
                <p className="guestPara">Age 13 or above</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onAdultsMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{adults}</p>
                <button
                  type="button"
                  onClick={this.onAdultsPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
            <li className="guestLi">
              <div className="guestTextCont">
                <p className="guestHead">Children</p>
                <p className="guestPara">Age 2-12</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onChildrenMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{childrens}</p>
                <button
                  type="button"
                  onClick={this.onChildrenPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
            <li className="guestLi">
              <div className="guestTextCont">
                <p className="guestHead">Infants</p>
                <p className="guestPara">under 2</p>
              </div>
              <div className="guestsCountCont">
                <button
                  type="button"
                  onClick={this.onInfantsMinus}
                  className="mpBtn"
                >
                  -
                </button>
                <p className="guestCount">{infants}</p>
                <button
                  type="button"
                  onClick={this.onInfantsPlus}
                  className="mpBtn"
                >
                  +
                </button>
              </div>
            </li>
          </ul>

          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onGuestsPrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onGuestsNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  onGuestsNext = () => {
    this.setState({
      activeStepId: stepsList[3].stepId,
    });
    this.updateStepCompletion(stepsList[2].stepId, true);
  };

  onGuestsPrev = () => {
    this.setState({
      activeStepId: stepsList[1].stepId,
    });
    this.updateStepCompletion(stepsList[1].stepId, false);
  };

  renderTravelForm = () => {
    const { needTravel, activeTravel } = this.state;
    return (
      <div>
        <div className="bookTripLgDetailsCont">
          <h1 className="bookTripLgHead">Travel Assistance</h1>
          <p className="bookTripLgPara">Select your travel assistance</p>
          <div className="detailsFormLg">
            <div className="travelInputCont">
              <input
                checked={needTravel}
                id="check"
                onChange={this.onCheckTravel}
                type="checkbox"
              />
              <label htmlFor="check" className="travelLabel">
                Travel Assistance Needed
              </label>
            </div>
            {needTravel && (
              <select
                value={activeTravel}
                onChange={this.onChangeTravel}
                className="travelInputBox"
              >
                {travelAssistanceList.map((each) => (
                  <option value={each.displayText} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            )}

            <div className="bookBtnsCont">
              <button
                type="button"
                onClick={this.onTravelPrev}
                className="bookPrevBtn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.onTravelNext}
                className="bookNextBtn"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Space */}

        <div className="detailsCont">
          <h1 className="detailsHead">Travel Assistance</h1>
          <p className="detailsPara">Select your travel assistance</p>
          <div className="detailsForm">
            <div className="travelInputCont">
              <input
                checked={needTravel}
                id="check"
                onChange={this.onCheckTravel}
                type="checkbox"
              />
              <label htmlFor="check" className="travelLabel">
                Travel Assistance Needed
              </label>
            </div>
            {needTravel && (
              <select
                value={activeTravel}
                onChange={this.onChangeTravel}
                className="travelInputBox"
              >
                {travelAssistanceList.map((each) => (
                  <option value={each.displayText} key={each.value}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="bookBtnsCont">
            <button
              type="button"
              onClick={this.onTravelPrev}
              className="bookPrevBtn"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.onTravelNext}
              className="bookNextBtn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  onTravelNext = () => {
    this.setState({ activeStepId: stepsList[4].stepId });
    this.updateStepCompletion(stepsList[3].stepId, true);
  };

  onTravelPrev = () => {
    this.setState({
      activeStepId: stepsList[2].stepId,
    });
    this.updateStepCompletion(stepsList[2].stepId, false);
  };

  renderConfirmForm = () => {
    const {
      username,
      startLocation,
      endLocation,
      startDate,
      endDate,
      adults,
      childrens,
      infants,
      activeTravel,
    } = this.state;

    const tripObj = {
      endLocation,
      startDate,
      endDate,
      id: uuidv4(),
    };

    return (
      <div>
        <TripContext.Consumer>
          {(value) => {
            const { onAddTrip } = value;

            const onConfirmNext = () => {
              onAddTrip(tripObj);
              this.setState((prevState) => ({
                isConfirmed: !prevState.isConfirmed,
              }));
              console.log("confirm");
            };
            return (
              <div>
                <div className="bookTripLgDetailsCont">
                  <h1 className="bookTripLgHead">Confirmation</h1>
                  <p className="bookTripLgPara">Confirm your details</p>
                  <div className="detailsFormLg">
                    <ul className="confirmUl">
                      <li className="confirmLi">
                        <p className="confirmHead">Name</p>
                        <p className="confirmPara">{username}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Start Location</p>
                        <p className="confirmPara">{startLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">End Location</p>
                        <p className="confirmPara">{endLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Start Date</p>
                        <p className="confirmPara">{startDate}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">End Date</p>
                        <p className="confirmPara">{endDate}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Guests</p>
                        <p className="confirmPara">
                          {adults + childrens + infants}
                        </p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Travel Assistance</p>
                        <p className="confirmPara">{activeTravel}</p>
                      </li>
                    </ul>
                    <div className="bookBtnsCont">
                      <button
                        onClick={this.onConfirmPrev}
                        type="button"
                        className="bookPrevBtn"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={this.onConfirmCancel}
                        className="bookPrevBtn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={onConfirmNext}
                        className="bookNextBtn"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                {/* Space */}
                <div className="detailsCont">
                  <h1 className="detailsHead">Confirmation</h1>
                  <p className="detailsPara">Confirm your details</p>
                  <div className="detailsForm">
                    <ul className="confirmUl">
                      <li className="confirmLi">
                        <p className="confirmHead">Name</p>
                        <p className="confirmPara">{username}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Start Location</p>
                        <p className="confirmPara">{startLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">End Location</p>
                        <p className="confirmPara">{endLocation}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Start Date</p>
                        <p className="confirmPara">{startDate}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">End Date</p>
                        <p className="confirmPara">{endDate}</p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Guests</p>
                        <p className="confirmPara">
                          {adults + childrens + infants}
                        </p>
                      </li>
                      <li className="confirmLi">
                        <p className="confirmHead">Travel Assistance</p>
                        <p className="confirmPara">{activeTravel}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bookBtnsCont">
                    <button
                      type="button"
                      onClick={this.onConfirmPrev}
                      className="bookPrevBtn"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={this.onConfirmCancel}
                      className="bookPrevBtn"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={onConfirmNext}
                      className="bookNextBtn"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        </TripContext.Consumer>
      </div>
    );
  };

  onConfirmPrev = () => {
    this.setState({
      activeStepId: stepsList[3].stepId,
    });
    this.updateStepCompletion(stepsList[3].stepId, false);

    /* const {activeStepId} = this.state
    const currentIndex = stepsList.findIndex(
      step => step.stepId === activeStepId,
    )
    if (currentIndex > 0) {
      this.setState({
        activeStepId: stepsList[currentIndex - 1].stepId,
      })
    } */
  };

  onConfirmCancel = () => {
    this.setState({
      username: "",
      activeStepId: stepsList[0].stepId,
      stateStepsList: stepsList.map((step) => ({ ...step, completed: false })),
    });
    this.updateStepCompletion(stepsList[0].stepId, false);
  };

  renderSuccess = () => (
    <div>
      <div className="bookTripLgDetailsCont">
        <div className="detailsFormLgSuccess">
          <img
            className="bookedImg"
            src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
            alt="Success"
          />
          <h1 className="emptyHead">Awesome</h1>
          <p className="emptyPara">Your booking has been confirmed</p>
          <button
            onClick={this.succcessNewTrip}
            type="button"
            className="emptyBtn"
          >
            Book a New Trip
          </button>
        </div>
      </div>
      {/* Space */}
      <div className="bookedCont">
        <img
          className="bookedImg"
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="Success"
        />
        <h1 className="emptyHead">Awesome</h1>
        <p className="emptyPara">Your booking has been confirmed</p>
        <button
          onClick={this.succcessNewTrip}
          type="button"
          className="emptyBtn"
        >
          Book a New Trip
        </button>
      </div>
    </div>
  );

  renderAllForms = () => {
    const { activeStepId } = this.state;

    switch (activeStepId) {
      case stepsList[0].stepId:
        return this.renderYourDetailsForm();
      case stepsList[1].stepId:
        return this.renderDateForm();
      case stepsList[2].stepId:
        return this.renderGuestsForm();
      case stepsList[3].stepId:
        return this.renderTravelForm();
      case stepsList[4].stepId:
        return this.renderConfirmForm();

      default:
        return null;
    }
  };

  getBasicForm = () => {
    const { activeStepId, isConfirmed, stateStepsList } = this.state;
    return (
      <div>
        <div className="bookTripBgLg">
          <div className="bookTripLg">
            <ul className="bookTripSidebarUl">
              {stateStepsList.map((eachLgStep, index) => (
                <li key={`${eachLgStep.stepId}`} className="bookTripSidebarLi">
                  {eachLgStep.completed ? (
                    <img
                      className="tickIcon"
                      src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                      alt={`${eachLgStep.displayText}`}
                    />
                  ) : (
                    <p
                      className={`numIcon ${
                        activeStepId === eachLgStep.stepId
                          ? "numIconActive"
                          : ""
                      }`}
                    >
                      {index + 1}
                    </p>
                  )}

                  <p
                    className={`numPara ${
                      activeStepId === eachLgStep.stepId ? "numParaActive" : ""
                    }`}
                  >
                    {eachLgStep.displayText}
                  </p>
                </li>
              ))}
            </ul>
            {isConfirmed ? this.renderSuccess() : this.renderAllForms()}
          </div>
        </div>
        <div className="bookTripBgSm">
          <ul className="smTabsUl">
            {stateStepsList.map((eachSmStep) => (
              <li
                key={`${eachSmStep.stepId}`}
                className={`smTabLi ${eachSmStep.completed?'smTabLiCompleted':''} ${
                  activeStepId === eachSmStep.stepId ? "smTabLiActive" : ""
                }`}
              >
                {" "}
              </li>
            ))}
          </ul>
          {isConfirmed ? this.renderSuccess() : this.renderAllForms()}
        </div>
      </div>
    );
  };

  succcessNewTrip = () => {
    this.setState({
      username: "",
      isConfirmed: false,
      activeStepId: stepsList[0].stepId,
      stateStepsList: stepsList.map((step) => ({ ...step, completed: false })),
    });
    this.updateStepCompletion(stepsList[0].stepId, false);
  };

  updateStepCompletion = (stepId, isCompleted) => {
    this.setState((prevState) => ({
      stateStepsList: prevState.stateStepsList.map((step) =>
        step.stepId === stepId ? { ...step, completed: isCompleted } : step
      ),
    }));
  };

  render() {
    return (
      <div>
        <Header />
        {this.getBasicForm()}
      </div>
    );
  }
}
export default BookANewTrip;
