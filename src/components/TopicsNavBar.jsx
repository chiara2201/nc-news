import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TopicsNavBar = () => {
	const [topics, setTopics] = useState([])

	useEffect(() => {
		axios
			.get(`https://nc-news-iofy.onrender.com/api/topics`)
			.then((response) => {
				console.log(response.data.topics)
				setTopics(response.data.topics)
			})
	}, [])

	return (
		<div>
			{topics.map((topic) => {
				return <Link to="/articles/topics/{topic.slug}">{topic.slug} </Link>
			})}
		</div>
	)
}
