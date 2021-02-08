import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles/templateDashboard.css";
import { useGlobalState } from "../utils/stateContext";
import { showUser, update, deleteAccount } from "../services/authServices";

let profileName = "USERS NAME";

const Profile = () => {
  const { store, dispatch } = useGlobalState();
  const { profile } = store;
  const initialFormState = {
    username: profile.username,
    email: profile.email,
    password: "",
    password_confirmation: "",
    errorMessage: '',
  };
  const [formState, setFormState] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    showUser()
      .then((user) => dispatch({ type: "setProfile", data: user }))
      .catch((error) => console.log(error));
  }, [dispatch]);

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
        dispatch({ type: "setProfile", data: user });
        sessionStorage.setItem("user", user.username);
        history.push("/dashboard/profile");
        if (submitted === false){
          setSubmitted(true)
        } else {
          setSubmitted(false)
        }
        

      })
      .catch((error) => setFormState({
        errorMessage: "Profile update failed, please check if email is valid and passwords match"}))
    setFormState(initialFormState);
    if (submitted ===true){
      setSubmitted(false)
    }
  }
  function handleDelete(event) {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete your account?")) {
    deleteAccount()
      .then(() => {
        sessionStorage.clear();
        dispatch({ type: "setLoggedInUser", data: null });
        dispatch({ type: "setToken", data: null });
        history.push("");
      })
      .catch((error) => window.alert(error));
    } else {
      return null 
    }
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
                  placeholder="New password"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="passwords placeColor"
                  placeholder="Confirm new password"
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
            <button className="deletebtn" onClick={handleDelete}>
              DELETE ACCOUNT
            </button>
            <div>
            {submitted ? 
							<h1>Success! Your profile has been updated!</h1>
							 : null}
            </div>
            <div>
              {formState.errorMessage && <h2>{formState.errorMessage}</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
