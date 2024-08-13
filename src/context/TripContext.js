import React from "react";

const TripContext = React.createContext({
  tripsList: [],
  onClickCancel: () => {},
  onAddTrip: () => {},
});
export default TripContext;
