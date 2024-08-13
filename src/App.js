// -------------- App.js --------------
import { Component } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginWithRouter from "./components/Login";
import Home from "./components/Home";
import BookANewTrip from "./components/BookANewTrip";
import MyTrips from "./components/MyTrips";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import TripContext from "./context/TripContext";
import "./App.css";

/* const tripsListInitial = [
  {
    endLocation: 'New York',
    startDate: '2024-10-10',
    endDate: '2030-10-10',
    id: 1,
  },
  {
    endLocation: 'New Zealand',
    startDate: '2030-10-10',
    endDate: '2060-10-10',
    id: 2,
  },
  {
    endLocation: 'Japan',
    startDate: '2060-10-10',
    endDate: '2090-10-10',
    id: 3,
  },
] */

class App extends Component {
  state = {
    tripsList: [],
  };

  onClickCancel = (id) => {
    const { tripsList } = this.state;
    const filteredList = tripsList.filter((each) => each.id !== id);
    this.setState({
      tripsList: filteredList,
    });
  };

  onAddTrip = (tripObj) => {
    this.setState((prevState) => ({
      tripsList: [...prevState.tripsList, tripObj],
    }));
  };

  render() {
    const { tripsList } = this.state;
    return (
      <TripContext.Provider
        value={{
          onClickCancel: this.onClickCancel,
          tripsList,
          onAddTrip: this.onAddTrip,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<LoginWithRouter />} />
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route index element={<Home />} />
              <Route path="book-a-new-trip" element={<BookANewTrip />} />
              <Route path="my-trips" element={<MyTrips />} />
            </Route>
            <Route exact path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </BrowserRouter>
      </TripContext.Provider>
    );
  }
}
export default App;
