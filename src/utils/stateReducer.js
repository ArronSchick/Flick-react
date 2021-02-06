export default function reducer(state, action) {
  switch (action.type) {
    case "setMovies": {
      return {
        ...state,
        movies: action.data,
      };
    }
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }
    case "setToken": {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.data,
        },
      };
    }
    case "setProfile": {
      return {
        ...state,
        profile: action.data,
      };
    }
    case "addFriends": {
      return {
        ...state,
        friends: action.data,
      };
    }
    case "setFriendsList": {
      return {
        ...state,
        friendsList: action.data,
      };
    }
    case "setCommonTitles": {
      return {
        ...state,
        commonTitles: action.data,
      };
    }
    case "setRandomMovie": {
      return {
        ...state,
        randomMovie: action.data,
      };
    }
    case "setFriends": {
      return {
        ...state,
        friends: action.data,
      };
    }
    case "deleteMovie": {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.data)
      }
    }
    case "deleteFriend": {
      return {
        ...state,
        friends: state.friends.filter((friend) => friend.username !== action.data)
      };
    }

    default:
      return state;
  }
}
