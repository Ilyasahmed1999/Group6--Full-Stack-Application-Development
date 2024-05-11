import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth"
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn()

  return (
    <div className="homepage">
      <Header />
      <Container className="home d-flex flex-column align-items-center justify-content-center flex-wrap text-center">
        <h1 className="home-title">Group 6 - Fitness Tracker App</h1>
        <p className="home-text">
           Add Activity or Workout Plan to Track your daily fitness and stay fit
          with us.
        </p>
        {loggedIn ?
          (<button className="home-btn" onClick={() => navigate("/exercise")}>Add Fitness Plan</button>) :
          (<button className="home-btn" onClick={() => navigate("/signup")}>Get Started</button>)}
      </Container>
    </div>
  );
}
