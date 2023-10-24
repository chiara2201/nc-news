import React from 'react'

export const Article = ({ article }) => {
	return (
		<>
			<h2>{article.title}</h2>
			<div>
				<div>{article.author}</div>
				<div>{article.created_at}</div>
				<div>👍: {article.votes}</div>
			</div>
			<img src={article.article_img_url} alt="{article.title}" />
			<p>{article.body}</p>
		</>
	)
}
