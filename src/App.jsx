import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ArticlesPage } from './pages/ArticlesPage'
import { ArticleDetailsPage } from './pages/ArticleDetailsPage'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<ArticlesPage />} />
				<Route path="/articles" element={<ArticlesPage />} />
				<Route path="/articles/:id" element={<ArticleDetailsPage />} />
			</Routes>
		</>
	)
}

export default App
