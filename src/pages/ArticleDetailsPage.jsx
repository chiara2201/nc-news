import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Article } from '../components/Article'

export const ArticleDetailsPage = () => {
	const { id } = useParams()

	const [article, setArticle] = useState(null)

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles/${id}`)
			.then((response) => {
				setArticle(response.data.article)
			})
	}, [])

	if (!article) return <h2>No article..yet</h2>

	return <Article article={article} />
}
