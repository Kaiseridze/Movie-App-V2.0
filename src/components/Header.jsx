import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header({
	keyValue,
	handleChange,
	handleSubmit,
	selectPage,
	removeChange,
}) {
	const [count, setCount] = useState()
	const goToMain = () => {
		if (keyValue || selectPage) {
			removeChange()
			selectPage(1)
		}
	}

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
}

export default Header
