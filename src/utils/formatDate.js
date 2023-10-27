export const formatDate = (ISOdate) => {
	const formattedDate = ISOdate.replace('T', ' ').replace('Z', '').slice(0, 16)
	return formattedDate
}
