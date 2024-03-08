import "./css-styles/Home.css";

import {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

function Home() {
  const loc = useLocation();

  return (
    <>
      <div className="home-container">
        <section className="first">
          <div className="user-name">
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>
                <h1>
                  {loc.state ? `Welcome ${loc.state.userFirstName}` : null}
                </h1>
              </strong>
            </div>
          </div>
        </section>

        <div className="content">
          <h1>Up into the sky!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
            tempore ducimus rerum, explicabo possimus voluptate laborum quam ad?
            Placeat!
          </p>
        </div>
        <section className="second"></section>
        <div className="content">
          <h1>Sky Blue and Greenery!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
            tempore ducimus rerum, explicabo possimus voluptate laborum quam ad?
            Placeat!
          </p>
        </div>
        <section className="third"></section>
        <div className="content">
          <h1>Dark Moon and Water!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
            tempore ducimus rerum, explicabo possimus voluptate laborum quam ad?
            Placeat!
          </p>
        </div>
        <section className="fourth"></section>
      </div>
      <footer>
        <h1>We Belong To Earth</h1>
      </footer>
    </>
  );
}

export default Home;
