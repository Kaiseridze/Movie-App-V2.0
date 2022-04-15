import React, {useState, useEffect} from "react"
import classByRate from "../api/classByRate"
import { useDispatch, useSelector } from "react-redux"
import { removeMovieFromFavorite, setMovieToFavorite } from "../redux/actions"
import unfavorited from "../img/unfavorite.svg"
import favorited from "../img/favorite.svg"

function FavoriteList({ name, imageUrl, rating, filmId }) {

	const [favorite, setFavorite] = useState(false)
	const dispatch = useDispatch()
	const storeData = useSelector((state) => state.favoriteReducer)

	const dispatchFavoriteMovies = () => {
		if (favorite) {
			dispatch(removeMovieFromFavorite(filmId))
			setFavorite(false)
		} else {
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
		}
	}

	useEffect(() => {
		storeData[filmId] ? setFavorite(true) : setFavorite(false)
	}, [])

	return (
		<div className='movie'>
			<img className='movie_image' src={imageUrl} alt='' />
			<div className='movie_info'>
				<h4>{name}</h4>
				<img
					className='add_favorite'
					src={favorite ? unfavorited : favorited}
					onClick={dispatchFavoriteMovies}
					alt='add favorite'
				/>
			</div>
			<span className={`tag ${classByRate(rating)}`}>
				{rating === null || rating === "null" ? "-" : rating}
			</span>
		</div>
	)
}

export default FavoriteList
