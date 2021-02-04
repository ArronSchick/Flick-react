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
        username: action.data,
        email: action.data,
      };
    }
    default:
      return state;
  }
}
