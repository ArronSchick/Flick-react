export default function reducer (state, action) {
	switch(action.type) {
		case 'setRandomMovie':{
			return {
				...state,
				movies: action.data
			}

		}
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		default: return state
	}
}
