import React from 'react'

export const ArticlePreview = ({ article }) => {
	const date = article.created_at
	const formattedDate = date.replace('T', ' ')
	const formattedTime = formattedDate.replace('Z', '')

	return (
		<a href="{item.url}" className="article">
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
		</a>
	)
}
