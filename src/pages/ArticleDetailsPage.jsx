import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Article } from '../components/Article'
import { CommentList } from '../components/CommentList'

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

	if (!article) return <h2>Loading...</h2>

	return (
		<>
			<Article article={article} />
			<CommentList id={id} article={article} />
		</>
	)
}
