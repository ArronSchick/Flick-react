import React, { useEffect } from "react";
import { useGlobalState } from "../utils/stateContext";
import { getMovies } from "../services/movieServices";
import { Link } from "react-router-dom";
import './styles/templateDashboard.css';

// Find common titles between a user and their friend's movie lists
export default function CommonList() {
  const { store, dispatch } = useGlobalState();
  const { friendsList, loggedInUser, commonTitles} = store;
  // getting the curent user's movie list and then comparing it with their friends list and only extracting the title data
  useEffect(() => {
    getMovies(loggedInUser)
      .then((movies) => {dispatch({ type: "setMovies", data: movies })
      let friendTitles = friendsList.map(({ title }) => title);
      let userTitles = movies.map(({ title }) => title);
      const commonTitles = friendTitles.filter((value) =>
        userTitles.includes(value))
      const uniqueCommonTitles = commonTitles.filter(function(item, pos) {
        return commonTitles.indexOf(item) === pos;
      })
      dispatch({ type: "setCommonTitles", data: uniqueCommonTitles})
  })
      .catch((error) => console.log(error));
  }, [dispatch, loggedInUser, friendsList]);

  return (
    <div>
      <h1>Common List</h1>
      <ul>
        {/* mapping through common titles to display each movie title */}
        {commonTitles.map((movie) => (
          <li className="dtListItem" key={movie}>
            <span>{movie}</span>
          </li>
        ))}
      </ul>
      {/* link to ChooseMovie component which will display a random movie from this list to watch */}
      <Link
          to={{
            pathname: "/dashboard/ChooseMovie",
          }}
          className="links profilelink"
        >
          Choose a Random Movie from this list to watch!
        </Link>
    </div>
  );
}
