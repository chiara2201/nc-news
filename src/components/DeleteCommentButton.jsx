import axios from 'axios'
import React, { useState } from 'react'

export const DeleteCommentButton = ({
	comment_id,
	setComments,
	setSuccessMessage,
}) => {
	const [isDeleting, setIsDeleting] = useState(false)

	const handleClick = (e) => {
		setSuccessMessage('') //in case of sequential deletions
		setIsDeleting(true)

		axios
			.delete(`https://nc-news-iofy.onrender.com/api/comments/${comment_id}`)
			.then((response) => {
				setComments((currComments) => {
					return currComments.filter((currComment) => {
						return currComment.comment_id !== comment_id
					})
				})
				setSuccessMessage('Comment deleted')
			})
			.finally(() => {
				setIsDeleting(false)
			})
	}

	return (
		<button onClick={handleClick} disabled={isDeleting}>
			🗑️
		</button>
	)
}
