import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TopicsNavBar = () => {
	const [topics, setTopics] = useState([])

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/topics`)
			.then((response) => {
				setTopics(response.data.topics)
			})
	}, [])

	return (
		<div>
			{topics.map((topic) => {
				return (
					<Link key={topic.slug} to={`/articles/topics/${topic.slug}`}>
						{topic.slug}{' '}
					</Link>
				)
			})}
		</div>
	)
}
