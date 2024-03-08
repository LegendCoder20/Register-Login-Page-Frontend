import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./css-styles/Register.css";

function Register() {
  const nav = useNavigate();
  const rName = useRef();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [uname, setUName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const hFName = (e) => {
    setFName(e.target.value);
  };
  const hLName = (e) => {
    setLName(e.target.value);
  };
  const hUName = (e) => {
    setUName(e.target.value);
  };
  const hCity = (e) => {
    setCity(e.target.value);
  };
  const hState = (e) => {
    setState(e.target.value);
  };
  const hPassword = (e) => {
    setPassword(e.target.value);
  };
  const hCPassword = (e) => {
    setCPassword(e.target.value);
  };

  // Registered User

  const register = (e) => {
    e.preventDefault();
    let data = {fname, lname, uname, city, state, password, cpassword};
    const url = `https://register-login-page.onrender.com/register/${fname}`;
    if (
      fname === "" ||
      lname === "" ||
      uname === "" ||
      city === "" ||
      state === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("Please Fill All Details");
    } else {
      if (password === cpassword) {
        axios
          .post(url, data)
          .then((res) => {
            alert("Registered Successfully");
            setFName("");
            setLName("");
            setUName("");
            setCity("");
            setState("");
            setPassword("");
            setCPassword("");
            nav("/home", {state: {userFirstName: fname}});
          })
          .catch((err) => {
            console.log(
              "Axios Error Occured from Frontend Endpoint /register" + err
            );
          });
      } else {
        alert("Password and Confirm Password Didn't Match");
        setPassword("");
        setCPassword("");
      }
    }
  };

  return (
    <>
      <section>
        <div className="register-container">
          <h2>Register</h2>

          <form>
            {/* First Name */}
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hFName}
                value={fname}
                ref={rName}
              />
              <label htmlFor="email">Enter your First Name</label>
            </div>
            {/* Last Name */}
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hLName}
                value={lname}
              />
              <label htmlFor="email">Enter your Last Name</label>
            </div>
            {/* Email Name */}
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hUName}
                value={uname}
              />
              <label htmlFor="email">Enter your E-mail</label>
            </div>
            {/* City */}
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hCity}
                value={city}
              />
              <label htmlFor="email">City</label>
            </div>
            {/* State */}

            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hState}
                value={state}
              />
              <label htmlFor="email">State</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-lock"></i>
              </span>

              <input
                required
                type="password"
                id="password"
                onChange={hPassword}
                value={password}
              />
              <label htmlFor="password">Enter your password</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-lock"></i>
              </span>

              <input
                required
                type="password"
                id="password"
                onChange={hCPassword}
                value={cpassword}
              />
              <label htmlFor="password">Confirm password</label>
            </div>

            <button type="submit" onClick={register}>
              Register
            </button>
          </form>

          <div
            className="create-account"
            onClick={() => {
              nav("/");
            }}
          >
            <a href="#">Already have an account ? </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
