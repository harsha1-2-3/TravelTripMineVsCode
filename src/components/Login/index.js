// -------------- Login.js --------------
import { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

class Login extends Component {
  state = {
    errorMsg: "",
    gotError: false,
    username: "",
    password: "",
    showPassword: false,
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const url = "https://apis.ccbp.in/login";
    const userDetails = {
      username,
      password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.onSuccessLogin(data.jwt_token);
    } else {
      this.setState({
        gotError: true,
        errorMsg: data.error_msg,
      });
    }
  };

  onSuccessLogin = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
    });

    this.props.navigate("/");
  };

  onClickEye = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { username, password, errorMsg, gotError, showPassword } = this.state;
    const typeOfInput = showPassword ? "text" : "password";
    const showIconUrl = showPassword
      ? "https://res.cloudinary.com/dazwjceuy/image/upload/v1722530869/eye-slash_siodyq.svg"
      : "https://res.cloudinary.com/dazwjceuy/image/upload/v1722530779/eye_m5j2mu.svg";

    // const labelText = showPassword ? 'text' : 'PASSWORD'

    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Navigate to="/" />;
    }

    return (
      <div className="loginBg">
        <form onSubmit={this.onSubmitForm} className="loginForm">
          <h1 className="loginHead"> Travel Trip </h1>
          <div className="inputCont">
            <label htmlFor="username" className="inputLabel">
              Username
            </label>
            <input
              onChange={this.onChangeUsername}
              value={username}
              id="username"
              className="inputBox"
              type="text"
            />
          </div>
          <div className="inputCont">
            <label htmlFor="password" className="inputLabel">
              Password
            </label>
            <div className="passwordCont">
              <input
                value={password}
                onChange={this.onChangePassword}
                id="password"
                className="inputBoxP"
                type={typeOfInput}
              />
              <button
                onClick={this.onClickEye}
                type="button"
                className="eyeBtn"
                data-testid="show-password"
              >
                <img className="eyeIcon" src={showIconUrl} alt="eye" />
              </button>
            </div>
            {gotError && <p className="errorMsg"> * {errorMsg} </p>}
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const LoginWithRouter = (props) => {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
};

export default LoginWithRouter;
