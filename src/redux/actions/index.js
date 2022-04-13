export const setMovieToFavorite = person => ({
	type: "SET_MOVIE_TO_FAVORITE",
	payload: person
})
export const removeMovieFromFavorite = (personId) => ({
	type: "REMOVE_MOVIE_FROM_FAVORITE",
	payload: personId,
})