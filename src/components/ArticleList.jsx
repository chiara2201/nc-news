import React from 'react'
import { ArticlePreview } from './ArticlePreview'

export const ArticleList = ({ articles }) => {
	return (
		<div className="article-grid">
			{articles.map((article) => {
				return <ArticlePreview key={article.article_id} article={article} />
			})}
		</div>
	)
}
