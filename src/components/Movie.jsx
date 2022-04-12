import React from "react"

const Movie = React.memo(function Movie({
	imageUrl,
	name,
	genre,
	rating,
	country,
}) {
	const classByRate = (vote) => {
		if (vote >= 7.5) {
			return "green"
		} else if (vote >= 5) {
			return "yellow"
		} else {
			return "red"
		}
	}
	return (
		<div className='movie'>
			<img className='movie_image' src={imageUrl} alt='' />
			<div className='movie_info'>
				<h4>{name ? name : "Фильм не найден"}</h4>
			</div>
			<span className={`tag ${classByRate(rating)}`}>
				{rating === null || rating === "null" ? "-" : rating}
			</span>
			<div className='movie_overview'>
				<h2>Жанр:</h2>
				{genre.map((subgenre, index) => (
					<p key={`${subgenre}__${index}`}>{subgenre}</p>
				))}
				<p className="country">Cтрана: { country[0] }</p>
			</div>
		</div>
	)
})
export default Movie
