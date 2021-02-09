import React, { useEffect } from "react";
import { getMovies } from "../services/movieServices";
import { useGlobalState } from "../utils/stateContext";
import { Link } from "react-router-dom";

// fetches a friends movie list from API and displays it
export default function FriendsMovieList() {
    // parameter is obtained from URL to use in getMovies API function
  const friendName = window.location.pathname.split("/").pop();
  const { store, dispatch } = useGlobalState();
  const { friendsList } = store;
    // fetch from railsAPI to get friends movie list and updates state
  useEffect(() => {
    getMovies(friendName)
      .then((friendsList) =>
        dispatch({ type: "setFriendsList", data: friendsList })
      )
      .catch((error) => console.log(error));
  }, [dispatch, friendName]);
  return (
    <div>
      <div>
          {/* maps through friends list and displays their list */}
        <h1>{friendName}'s Movie List</h1>
        <ul className="dtList">
          {friendsList.map((movie) => (
            <li className="dtListItem" key={movie.id}>
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
          {/* link to see Common movie titles */}
        <Link
          to={{
            pathname: "/dashboard/CommonList"
          }}
          className="links profilelink"
        >
          See Common Titles!
        </Link>
      </div>
    </div>
  );
}
