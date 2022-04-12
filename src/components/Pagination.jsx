import React from "react"

function Pagination({ pages, selectPage, currentPage }) {
	let pageArray = []
	for (let i = 1; i <= pages; i++) {
		pageArray[i] = i
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
