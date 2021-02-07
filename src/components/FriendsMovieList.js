import React, { useEffect } from "react";
import { getMovies } from "../services/movieServices";
import { useGlobalState } from "../utils/stateContext";
import { Link } from "react-router-dom";


export default function FriendsMovieList() {
  const friendName = window.location.pathname.split("/").pop();
  const { store, dispatch } = useGlobalState();
  const { friendsList } = store;

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
        <Link
          to={{
            pathname: "/dashboard/CommonList",
            friendProps: {
              name: { friendsList },
            },
          }}
          className="links profilelink"
        >
          See Common Titles!
        </Link>
      </div>
    </div>
  );
}
