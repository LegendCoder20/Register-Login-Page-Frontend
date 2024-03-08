import "./css-styles/Login.css";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
  const nav = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Storing Data
  const [data, setData] = useState([]);
  console.log(data);

  const hUserName = (e) => {
    setUserName(e.target.value);
  };
  const hUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  // Fetching Data
  useEffect(() => {
    let url = "https://register-login-page.onrender.com/getdata";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log("Data Fetched from Backend in Front-end");
      })
      .catch((err) => {
        console.log(
          "Error Occured During Fetching data from Backend in Front-end" + err
        );
      });
  }, []);

  // LOGIN

  const login = (e) => {
    e.preventDefault();
    const user = data.find(
      (item) => item._id === userName && item.pass === userPassword
    );

    if (user) {
      nav("/home", {state: {userFirstName: user.fname}});
      console.log("Logged in Successfully");
    } else {
      if (userName === "" && userPassword === "") {
        alert("Please Enter Email and Password");
      } else {
        alert(
          "Email or Password Wrong. Please Register If you don't have Account."
        );
        setUserPassword("");
      }
    }
  };

  const navUserToRegister = () => {
    nav("/register");
  };

  return (
    <>
      <section>
        <div className="login-container">
          <h2>Login</h2>

          <form>
            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-envelope"></i>
              </span>

              <input
                required
                type="text"
                id="email"
                onChange={hUserName}
                value={userName}
              />
              <label htmlFor="email">Enter your email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i className="fa-solid fa-lock"></i>
              </span>

              <input
                required
                type="password"
                id="password"
                onChange={hUserPassword}
                value={userPassword}
              />
              <label htmlFor="password">Enter your password</label>
            </div>

            <div className="remember-forgot">
              <label></label>

              <a href="#">Forgot password</a>
            </div>

            <button type="submit" onClick={login}>
              Login
            </button>
          </form>

          <div className="create-account">
            <a href="#" onClick={navUserToRegister}>
              Create an account
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
