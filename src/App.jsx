import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'

import { ArticlesPage } from './pages/ArticlesPage'

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<ArticlesPage />} />
				<Route path="/articles" element={<ArticlesPage />} />
			</Routes>
		</>
	)
}

export default App
