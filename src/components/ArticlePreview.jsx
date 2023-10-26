import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlePreview = ({ article }) => {
	const date = article.created_at
		.replace('T', ' ')
		.replace('Z', '')
		.slice(0, 16)
	// const formattedDate = date.replace('T', ' ')
	// const formattedTime = formattedDate.replace('Z', '')

	return (
		<Link to={`/articles/${article.article_id}`} className="article">
			<div className="article-image">
				<img src={article.article_img_url} alt="{article.title}" />
			</div>
			<div className="article-content">
				<div className="article-title">
					<h2>{article.title}</h2>
				</div>
				<div className="article-details">
					<small>Published at: {date}</small>
				</div>
			</div>
		</Link>
	)
}
