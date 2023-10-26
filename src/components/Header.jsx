import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header>
			<h1 className="title">
				<Link to="/">NC News</Link>
			</h1>
		</header>
	)
}
