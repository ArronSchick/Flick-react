import React, { useEffect } from "react";
import { useGlobalState } from "../utils/stateContext";
import { getMovies } from "../services/movieServices";
import { Link } from "react-router-dom";

export default function CommonList() {
  const { store, dispatch } = useGlobalState();
  const { movies, friendsList, loggedInUser, commonTitles} = store;
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
  }, [dispatch, loggedInUser]);

  return (
    <div>
      <h1>Common List</h1>
      <ul>
        {commonTitles.map((movie) => (
          <li className="dtListItem" key={movie}>
            <span>{movie}</span>
          </li>
        ))}
      </ul>
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
