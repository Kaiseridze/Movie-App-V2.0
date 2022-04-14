import React, {useState} from "react"
import { MOVIE_TOP } from "../api"

function Pagination({ pages, getMovies}) {
	let pageArray = []
	for (let i = 1; i <= pages; i++) {
		pageArray[i] = i
	}
	const [currentPage, setCurrentPage] = useState(1)
	
	const selectPage = (pageNumber) => {
		getMovies(`${MOVIE_TOP}${pageNumber}`)
		setCurrentPage(pageNumber)
	}

	return (
		<footer className='pagination'>
			<ul>
				{pageArray.map((page) => (
					<li
						key={page}
						onClick={() => selectPage(page)}
						className={currentPage === page ? "page page_active" : "page"}>
						{page}
					</li>
				))}
			</ul>
		</footer>
	)
}

export default Pagination
