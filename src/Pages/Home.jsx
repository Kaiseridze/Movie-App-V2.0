import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"

import Movie from "../components/Movie"
import Pagination from "../components/Pagination"
import { API_KEY, MOVIE_TOP, SEARCH_BY_KEYWORD } from "../api"

function Home() {
	const [movies, setMovies] = useState([])
	const [keyValue, setKeyValue] = useState("")
   const [pages, setPages] = useState(1)
   const [currentPage, setCurrentPage] = useState(1)

	const getMovies = async (url) => {
		await axios
			.get(url, {
				headers: {
					"X-API-KEY": API_KEY,
					"Content-Type": "application/json",
				},
			})
			.then(({ data }) => {
				setMovies(data.films)
            setPages(data.pagesCount)
			})
   }

	useEffect(() => {
		getMovies(MOVIE_TOP)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (keyValue) {
			getMovies(`${SEARCH_BY_KEYWORD}${keyValue}`)
		} else {
			getMovies(MOVIE_TOP)
		}
	}

	const handleChange = (e) => {
		setKeyValue(e.target.value)
   }
   
   const removeChange = () => {
      setKeyValue('')
   }

	const selectPage = (pageNumber) => {
      getMovies(`${MOVIE_TOP}${pageNumber}`)
      setCurrentPage(pageNumber)
   }
	return (
		<>
			<Header
				keyValue={keyValue}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				selectPage={selectPage}
				removeChange={removeChange}
			/>
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
						/>
					))}
				</div>
			) : (
				<h1 className='error_text'>Ничего не найдено</h1>
			)}
			{!keyValue && (
				<Pagination
					currentPage={currentPage}
					pages={pages}
					selectPage={selectPage}
				/>
			)}
		</>
	)
}
export default Home
