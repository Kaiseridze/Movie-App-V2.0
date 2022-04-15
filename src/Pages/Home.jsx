import React, { useEffect } from "react"

import Movie from "../components/Movie"
import Pagination from "../components/Pagination"
import { MOVIE_TOP } from "../api"


const Home = React.memo(function Home({ getMovies, pages, movies, currentPage, setCurrentPage }) {
	useEffect(() => {
		getMovies(MOVIE_TOP)
	}, [])

	return (
		<>
			{pages !== 0 ? (
				<div className='movie_container'>
					{movies.map((movie) => (
						<Movie
							pages={pages}
							rating={movie.rating}
							imageUrl={movie.posterUrlPreview}
							genre={movie.genres.map((genre) => genre.genre)}
							name={movie.nameRu}
							country={movie.countries.map((country) => country.country)}
							key={movie.filmId}
							filmId={movie.filmId}
						/>
					))}
				</div>
			) : (
				<h1 className='error_text'>Ничего не найдено</h1>
			)}
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} getMovies={getMovies} />
		</>
	)
})
export default Home
