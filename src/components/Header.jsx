import React from "react"
function Header({ keyValue, handleChange, handleSubmit, selectPage, removeChange }) {
	const goToMain = () => {
		removeChange()
		selectPage(1)
	}
	return (
		<header className='header'>
			<div className='header_left'>
				<h1 onClick={goToMain}>ReactMovie</h1>
				<span>{keyValue && `Поиск по: ${keyValue}`}</span>
			</div>
			{/*
			<ul className='categories'>
				<li>Драма</li>
				<li>Триллер</li>
				<li>Комедия</li>
			</ul>
			*/}
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
