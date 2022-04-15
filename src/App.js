import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"

import { API_KEY } from "./api"
import Favorites from "./Pages/Favorites"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Header from "./components/Header"

function App() {
	const [movies, setMovies] = useState([])
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

	return (
		<>
			<Header
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				getMovies={getMovies}
			/>
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route
					path='/'
					element={
						<Home
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							getMovies={getMovies}
							pages={pages}
							movies={movies}
						/>
					}
				/>
				<Route path='/favorites' element={<Favorites />} />
			</Routes>{" "}
		</>
	)
}

export default App
