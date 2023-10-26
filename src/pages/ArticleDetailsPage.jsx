import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Article } from '../components/Article'
import { CommentList } from '../components/CommentList'
import { CommentForm } from '../components/CommentForm'

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

	const [comments, setComments] = useState([])

	if (!article) return <h2>Loading...</h2>

	return (
		<>
			<Article article={article} />
			<CommentForm setComments={setComments} />
			<CommentList
				id={id}
				article={article}
				comments={comments}
				setComments={setComments}
			/>
		</>
	)
}
