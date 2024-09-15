import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div className="homeContainer">
        <h1 className="homeHeading">Web Entwicklung für Kleinunternehmen</h1>

        <ul className="homeList">
          <li className="homeListItem">
            <svg
              className="checkmark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f1a210" // Reddish-orange color
                d="M20.285 6.016l-11.39 11.39-5.285-5.285c-.584-.584-1.53-.584-2.114 0-.585.584-.585 1.53 0 2.114l6.57 6.57c.584.584 1.53.584 2.114 0l12.5-12.5c.585-.584.585-1.53 0-2.114-.584-.584-1.53-.584-2.114 0z"
              ></path>
            </svg>
            schnell und unkompliziert
          </li>
          <li className="homeListItem">
            <svg
              className="checkmark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f1a210" // Reddish-orange color
                d="M20.285 6.016l-11.39 11.39-5.285-5.285c-.584-.584-1.53-.584-2.114 0-.585.584-.585 1.53 0 2.114l6.57 6.57c.584.584 1.53.584 2.114 0l12.5-12.5c.585-.584.585-1.53 0-2.114-.584-.584-1.53-.584-2.114 0z"
              ></path>
            </svg>
            individuelles Design
          </li>
          <li className="homeListItem">
            <svg
              className="checkmark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f1a210" // Reddish-orange color
                d="M20.285 6.016l-11.39 11.39-5.285-5.285c-.584-.584-1.53-.584-2.114 0-.585.584-.585 1.53 0 2.114l6.57 6.57c.584.584 1.53.584 2.114 0l12.5-12.5c.585-.584.585-1.53 0-2.114-.584-.584-1.53-.584-2.114 0z"
              ></path>
            </svg>
            monatliche Wartung und Instandhaltung
          </li>
          <li className="homeListItem">
            <svg
              className="checkmark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f1a210" // Reddish-orange color
                d="M20.285 6.016l-11.39 11.39-5.285-5.285c-.584-.584-1.53-.584-2.114 0-.585.584-.585 1.53 0 2.114l6.57 6.57c.584.584 1.53.584 2.114 0l12.5-12.5c.585-.584.585-1.53 0-2.114-.584-.584-1.53-.584-2.114 0z"
              ></path>
            </svg>
            24/7 erreichbar
          </li>
        </ul>

        {/* Buttons with routing */}
        <div className="buttonContainer">
          <Link to="/angebote">
            <button className="gradientButton">Angebote</button>
          </Link>
          <Link to="/preis-anfrage">
            <button className="gradientButton">Preisanfrage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
