import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const CommentForm = ({ setComments }) => {
	const { id } = useParams()

	const [comment, setComment] = useState('')

	const handleCommentChange = (e) => {
		setComment(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const body = { username: 'grumpy19', body: comment }

		axios
			.post(
				`https://nc-news-iofy.onrender.com/api/articles/${id}/comments`,
				body
			)
			.then((response) => {
				const createdComment = response.data.comment

				setComments((currComments) => {
					return [createdComment, ...currComments]
				})
				setComment('')
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<textarea name="comment" value={comment} onChange={handleCommentChange} />
			<button type="submit">Send</button>
		</form>
	)
}
