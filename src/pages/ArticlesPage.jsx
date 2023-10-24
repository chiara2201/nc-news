import React, { useEffect, useState } from 'react'
import { ArticleList } from '../components/ArticleList'
import axios from 'axios'

export const ArticlesPage = () => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		axios
			.get('https://nc-news-iofy.onrender.com/api/articles')
			.then((response) => {
				setArticles(response.data.articles)
			})
	}, [])

	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	)
}
