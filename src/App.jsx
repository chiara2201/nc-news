import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ArticlesPage } from './pages/ArticlesPage'
import { ArticleDetailsPage } from './pages/ArticleDetailsPage'
import { ArticlesByTopicPage } from './pages/ArticlesByTopicPage'
import { TopicsNavBar } from './components/TopicsNavBar'

function App() {
	return (
		<>
			<Header />
			<TopicsNavBar />
			<Routes>
				<Route path="/" element={<ArticlesPage />} />
				<Route path="/articles" element={<ArticlesPage />} />
				<Route path="/articles/:id" element={<ArticleDetailsPage />} />
				<Route
					path="/articles/topics/:topic"
					element={<ArticlesByTopicPage />}
				/>
			</Routes>
		</>
	)
}

export default App
