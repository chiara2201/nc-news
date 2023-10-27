import React, { useEffect, useState } from 'react'
import { ArticleList } from '../components/ArticleList'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { TopicsNavBar } from '../components/TopicsNavBar'

export const ArticlesByTopicPage = () => {
	const { topic } = useParams()

	const [articles, setArticles] = useState([])

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles?topic=${topic}`)
			.then((response) => {
				setArticles(response.data.articles)
			})
	}, [topic])

	return (
		<div>
			<TopicsNavBar />
			<ArticleList articles={articles} />
		</div>
	)
}
