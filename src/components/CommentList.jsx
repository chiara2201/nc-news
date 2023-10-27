import React, { useEffect } from 'react'
import axios from 'axios'

export const CommentList = ({ id, article, comments, setComments }) => {
	const date = article.created_at
		.replace('T', ' ')
		.replace('Z', '')
		.slice(0, 16)

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
							<p>{date}</p>
						</div>
						<p>{comment.body}</p>
					</article>
				)
			})}
		</div>
	)
}
