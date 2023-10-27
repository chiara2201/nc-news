import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

export const ArticlePreview = ({ article }) => {
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
					<small>Published at: {formatDate(article.created_at)}</small>
				</div>
			</div>
		</Link>
	)
}
