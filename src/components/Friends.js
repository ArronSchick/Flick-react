import React, { useState } from "react";
import { addFriends } from "../services/friendServices";
import "./styles/templateDashboard.css";
import { Button, Input } from "./Styled";
import ShowFriends from "./ShowFriends";

export default function Friends() {
  const initialFormState = {
    email: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  function handleSubmit(event) {
    event.preventDefault();
    addFriends(formState)
      .then(({ email }) => {
        console.log(email);
      })
      .catch((error) => console.log(error));
  }

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="dtContainer">
      <div className="dtMain">
        <h1 className="dtTitle">FRIENDS</h1>
        <div className="dtCard">
          <div className="dtSearch">
            <Input
              placeholder="email"
              className="email placeColor"
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            ></Input>
            <Button onClick={handleSubmit} value="Add Friend">
              Add Friend
            </Button>
          </div>
          <div className="dtListContainer">
            <ShowFriends />
          </div>
        </div>
      </div>
    </div>
  );
}
