import React from 'react'
import { Voter } from './Voter'

export const Article = ({ article }) => {
	const date = article.created_at.replace('T', ' ').replace('Z', '')

	return (
		<>
			<div className="single-article-container">
				<h2>{article.title}</h2>
				<div>
					<div>{article.author}</div>
					<div>Posted on: {date}</div>
				</div>
				<img src={article.article_img_url} alt="{article.title}" />
				<p>{article.body}</p>
				<div>👍: {article.votes}</div>
				<Voter votes={article.votes} />
			</div>
		</>
	)
}
