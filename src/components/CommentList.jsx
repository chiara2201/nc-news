import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DeleteCommentButton } from './DeleteCommentButton'
import { loggedUser } from '../loggedUser'
import { formatDate } from '../utils/formatDate'

export const CommentList = ({ id, article }) => {
	const [comments, setComments] = useState([])
	const [successMessage, setSuccessMessage] = useState('')

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles/${id}/comments`)
			.then((response) => {
				setComments(response.data.comments)
			})
	}, [])

	if (comments.length === 0) {
		return <p>No comments yet</p>
	}

	return (
		<div>
			{successMessage && <p>{successMessage}</p>}
			<div className="comments-container">
				{comments.map((comment) => {
					return (
						<article
							key={comment.comment_id}
							className="single-comment-container"
						>
							<div>
								{' '}
								<p>{comment.author}</p>
								<p>{formatDate(comment.created_at)}</p>
							</div>
							<p>{comment.body}</p>
							{loggedUser.username === comment.author && (
								<DeleteCommentButton
									comment_id={comment.comment_id}
									setComments={setComments}
									setSuccessMessage={setSuccessMessage}
								/>
							)}
						</article>
					)
				})}
			</div>
		</div>
	)
}
