import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Article } from '../components/Article'
import { CommentList } from '../components/CommentList'
import { CommentForm } from '../components/CommentForm'

export const ArticleDetailsPage = () => {
	const { id } = useParams()

	const [isLoading, setIsLoading] = useState(true)
	const [article, setArticle] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/articles/${id}`)
			.then((response) => {
				setArticle(response.data.article)
			})
			.catch((err) => {
				setErrorMessage('Article not found')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const [comments, setComments] = useState([])

	if (isLoading) return <h2>Loading...</h2>
	else if (errorMessage) return <p>{errorMessage}</p>
	else
		return (
			<>
				<Article article={article} />
				<CommentForm setComments={setComments} />
				<CommentList id={id} comments={comments} setComments={setComments} />
			</>
		)
}
