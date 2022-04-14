import { omit } from "lodash"
import { getLocalStorage } from "../localStorage"

const initialState = getLocalStorage("store")

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_MOVIE_TO_FAVORITE":
			return {
				...state,
				...action.payload,
			}
		case "REMOVE_MOVIE_FROM_FAVORITE":
			return omit(state, [action.payload])
		default:
			return state
	}
}

export default favoriteReducer