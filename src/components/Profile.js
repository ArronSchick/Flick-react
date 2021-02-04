import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles/templateDashboard.css";
import Navbar from "./subComponents/Navbar";
import { update } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

let profileName = "USERS NAME";

const Profile = () => {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const { store, dispatch } = useGlobalState();
  const { profile } = store;

  let history = useHistory();
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    update(formState)
      .then((user) => {
        dispatch({ type: "setLoggedInUser", data: user.username });
        history.push("/dashboard/profile");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="dtContainer">
      <div className="dtMain">
        <h1 className="dtTitle">{profileName}</h1>
        <div className="dtCard">
          <div className="forms">
            <h1>Your Profile</h1>
            <form className="signForm">
              <div className="fields">
                <input
                  type="text"
                  className="profilename placeColor"
                  autoFocus
                  placeholder={profile.username}
                  name="username"
                  id="profilename"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="email placeColor"
                  placeholder={profile.email}
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="passwords placeColor"
                  placeholder="new password"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="passwords placeColor"
                  placeholder="confirm new password"
                  name="password_confirmation"
                  id="confirmpassword"
                  value={formState.password_confirmation}
                  onChange={handleChange}
                />
              </div>
              <input
                className="btn"
                type="submit"
                onClick={handleSubmit}
                value="Save changes"
              />
            </form>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
