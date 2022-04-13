import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Home />} />
			<Route path='/favorites' element={<Favorites />} />
		</Routes>
	)
}

export default App

