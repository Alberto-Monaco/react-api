//si fa riferimento come api al progetto express-blog-api-crud

import { useState, useEffect } from 'react'
import AppCard from './components/AppCard'
import AppOffCanvas from './components/AppOffCanvas'
const initialFormData = {
	title: '',
	image: '1.jpg',
	content: '',
	category: '',
	published: false,
	tags: []
}
function App() {
	const [formData, setFormData] = useState(initialFormData)
	const [articles, setArticles] = useState([])

	function fetchData(url = 'http://localhost:3006/posts/') {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				setArticles(data.data)
			})
	}

	useEffect(fetchData, [])

	function handleFormField(e) {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

		setFormData({
			...formData,
			[e.target.name]: value
		})
	}

	function addArticle(e) {
		e.preventDefault()

		fetch('http://localhost:3006/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				fetchData()
				setFormData(initialFormData)
			})
			.catch((error) => {
				console.error('Errore durante il salvataggio:', error)
			})
	}

	function deleteArticle(e) {
		const articleIndexToDelete = Number(e.target.getAttribute('data-index'))
		const newArticles = articles.filter((article, index) => index !== articleIndexToDelete)
		setArticles(newArticles)
	}

	return (
		<>
			<div className='container my-3'>
				<div className='d-flex justify-content-between align-items-center'>
					<h1 className='text-center'>React form</h1>
					<AppOffCanvas addArticle={addArticle} handleFormField={handleFormField} formData={formData} />
					<button type='button' className='btn btn-primary my-3' popovertarget='off-canvas-form'>
						Add Article
					</button>
				</div>
			</div>
			<div className='container my-3'>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
					{articles.map((article, index) => (
						<AppCard key={index} article={article} index={index} deleteArticle={deleteArticle} />
					))}
				</div>
			</div>
		</>
	)
}

export default App
