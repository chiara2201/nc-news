import React, { useEffect, useState } from 'react'
import { ArticleList } from '../components/ArticleList'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const ArticlesByTopicPage = () => {
	const { topic } = useParams()

	const [isLoading, setIsLoading] = useState(true)
	const [articles, setArticles] = useState([])

	useEffect(() => {
		setIsLoading(true)

		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles?topic=${topic}`)
			.then((response) => {
				setArticles(response.data.articles)
			})
			.finally(() => setIsLoading(false))
	}, [topic])

	if (isLoading) return <p>Loading...</p>
	else if (articles.length === 0) return <p>This topic does not exist</p>
	else return <ArticleList articles={articles} />
}
