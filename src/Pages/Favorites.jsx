import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import FavoriteList from "../components/FavoriteList"

function Favorites() {
	const [favMovie, setFavMovie] = useState([])

	const storeData = useSelector((state) => state.favoriteReducer)

	useEffect(() => {
		const favMovieArr = Object.entries(storeData)
		if (favMovieArr.length) {
			const result = favMovieArr.map((movie) => {
				return {
					filmId: movie[0],
					name: movie[1].name,
					imageUrl: movie[1].imageUrl,
					rating: movie[1].rating,
				}
			})
			setFavMovie(result)
		}
	}, [])

	return (		
			<div className='movie_container'>
				{favMovie.length ? (
					favMovie.map((item) => (
						<FavoriteList
							key={item.filmId}
							name={item.name}
							imageUrl={item.imageUrl}
							rating={item.rating}
						/>
					))
				) : (
					<h1 className='error_text'>Вы не добавили ни одного фильма</h1>
				)}
			</div>
	)
}

export default Favorites
