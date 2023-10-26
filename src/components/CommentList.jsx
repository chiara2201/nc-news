import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const CommentList = ({ id, article, comments, setComments }) => {
	const date = article.created_at.replace('T', ' ').replace('Z', '')

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles/${id}/comments`)
			.then((response) => {
				setComments(response.data.comments)
			})
	}, [])

	return (
		<div className="comments-container">
			{comments.map((comment) => {
				return (
					<article className="single-comment-container">
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
