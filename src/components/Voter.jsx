import axios from 'axios'
import { useState } from 'react'

export const Voter = ({ article_id, votes }) => {
	const [diff, setDiff] = useState(0)

	const updateVote = (deltaVal) => {
		// use callback syntax is new state value depends on current state value
		setDiff((currDiff) => currDiff + deltaVal)

		axios
			.patch(`https://nc-news-iofy.onrender.com/api/articles/${article_id}`, {
				inc_votes: deltaVal,
			})
			.catch((err) => {
				setDiff(0)
			})
	}

	return (
		<div>
			<button onClick={() => updateVote(1)} disabled={diff === 1}>
				👍
			</button>
			<p>{votes + diff}</p>
			<button onClick={() => updateVote(-1)} disabled={diff === -1}>
				👎
			</button>
		</div>
	)
}
