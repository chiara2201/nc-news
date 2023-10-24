import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlePreview = ({ article }) => {
	const date = article.created_at
	const formattedDate = date.replace('T', ' ')
	const formattedTime = formattedDate.replace('Z', '')

	console.log(article)

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
					<small>Published at: {formattedTime}</small>
				</div>
			</div>
		</Link>
	)
}
