import React from 'react'
import { Voter } from './Voter'
import { formatDate } from '../utils/formatDate'

export const Article = ({ article }) => {
	return (
		<>
			<div className="single-article-container">
				<h2>{article.title}</h2>
				<div>
					<div>{article.author}</div>
					<div>Posted on: {formatDate(article.created_at)}</div>
					<div>👍: {article.votes}</div>
				</div>
				<img src={article.article_img_url} alt="{article.title}" />
				<p>{article.body}</p>

				<Voter article_id={article.article_id} votes={article.votes} />
			</div>
		</>
	)
}
