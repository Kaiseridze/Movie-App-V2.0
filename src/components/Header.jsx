import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { MOVIE_TOP, SEARCH_BY_KEYWORD } from "../api"

const Header = React.memo(function Header({
	getMovies,
	setCurrentPage,
}) {
	const [keyValue, setKeyValue] = useState("")

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

	const goToMain = () => {
		getMovies(MOVIE_TOP)
		setKeyValue("")
		setCurrentPage(1)
	}

	const [count, setCount] = useState()

	const storeData = useSelector((state) => state.favoriteReducer)
	useEffect(() => {
		const favLength = Object.keys(storeData).length
		setCount(favLength)
	})
	return (
		<header className='header'>
			<div className='header_left'>
				<Link to='/'>
					<h1 onClick={goToMain}>ReactMovie</h1>
				</Link>
				<span>{keyValue && `Поиск по: ${keyValue}`}</span>
			</div>
			<Link to='/favorites'>
				<h2>Favorites {count}</h2>
			</Link>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					value={keyValue}
					className='search_input'
					maxLength='30'
					type='text'
					placeholder='Поиск...'
				/>
			</form>
		</header>
	)
})

export default Header
