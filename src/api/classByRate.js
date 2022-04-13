const classByRate = (vote) => {
	if (vote >= 7.5) {
		return "green"
	} else if (vote >= 5) {
		return "yellow"
	} else {
		return "red"
	}
}

export default classByRate