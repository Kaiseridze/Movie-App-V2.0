import React from "react"
import classByRate from "../api/classByRate"
function FavoriteList({ name, imageUrl, rating }) {
	return (
		<div className='movie'>
			<img className='movie_image' src={imageUrl} alt='' />
			<div className='movie_info'>
				<h4>{name}</h4>
			</div>
			<span className={`tag ${classByRate(rating)}`}>
				{rating === null || rating === "null" ? "-" : rating}
			</span>
		</div>
	)
}

export default FavoriteList
