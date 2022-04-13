import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMovieToFavorite, removeMovieFromFavorite } from "../redux/actions"
import unfavorited from "../img/unfavorite.svg"
import favorited from "../img/favorite.svg"
import classByRate from "../api/classByRate"

const Movie = function Movie({
	imageUrl,
	name,
	genre,
	rating,
	country,
	filmId,
}) {
	const [favorite, setFavorite] = useState(false)

	const dispatch = useDispatch()
	const storeData = useSelector((state) => state.favoriteReducer)

	const dispatchFavoriteMovies = () => {
		storeData[filmId] ? setFavorite(true) : setFavorite(false)
		if (!favorite) {
			dispatch(
				setMovieToFavorite({
					[filmId]: {
						name,
						imageUrl,
						rating,
					},
				})
			)
			setFavorite(true)
		} else {
			dispatch(removeMovieFromFavorite(filmId))
			setFavorite(false)
		}
	}

	return (
		<div className='movie'>
			<img className='movie_image' src={imageUrl} alt='' />
			<div className='movie_info'>
				<h4>{name ? name : "Фильм не найден"}</h4>
				<img
					className='add_favorite'
					src={favorite ? unfavorited : favorited}
					onClick={dispatchFavoriteMovies}
					alt=''
				/>
			</div>
			<span className={`tag ${classByRate(rating)}`}>
				{rating === null || rating === "null" ? "-" : rating}
			</span>

			<div className='movie_overview'>
				<h2>Жанр:</h2>
				{genre.map((subgenre, index) => (
					<p key={`${subgenre}__${index}`}>{subgenre}</p>
				))}
				<p className='country'>Cтрана: {country[0]}</p>
			</div>
		</div>
	)
}
export default Movie
