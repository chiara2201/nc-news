import React from 'react'

export const Article = ({ article }) => {
	const date = article.created_at.replace('T', ' ').replace('Z', '')

	return (
		<>
			<div className="single-article-container">
				<h2>{article.title}</h2>
				<div>
					<div>{article.author}</div>
					<div>Posted on: {date}</div>
					<div>👍: {article.votes}</div>
				</div>
				<img src={article.article_img_url} alt="{article.title}" />
				<p>{article.body}</p>
			</div>
		</>
	)
}
