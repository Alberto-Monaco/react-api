//si fa riferimento come api al progetto express-blog-api-crud

import { useState, useEffect } from 'react'

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
				<h1 className='text-center'>React form</h1>
				<div
					id='off-canvas-form'
					popover='true'
					className='bg-light p-3 border-0 shadow-lg text-dark'
					style={{ minHeight: '100vh' }}>
					<div className='d-flex justify-content-between align-items-center'>
						<h3>Add a new Article</h3>
						<button
							className='btn btn-primary'
							type='button'
							popovertarget='off-canvas-form'
							popovertargetaction='hide'>
							Close
						</button>
					</div>
					<p>use the form below to add a new article</p>

					<form onSubmit={addArticle}>
						<div className='mb-3'>
							<label htmlFor='title' className='form-label'>
								Title
							</label>

							<input
								type='text'
								name='title'
								id='title'
								className='form-control'
								placeholder='article title'
								value={formData.title}
								required
								onChange={handleFormField}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='image' className='form-label'>
								Image
							</label>

							<input
								type='text'
								name='image'
								id='image'
								className='form-control'
								placeholder='article image'
								value={formData.image}
								required
								onChange={handleFormField}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='content' className='form-label'>
								Content
							</label>

							<input
								type='text'
								name='content'
								id='content'
								className='form-control'
								placeholder='article content'
								value={formData.content}
								required
								onChange={handleFormField}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='category' className='form-label'>
								Category
							</label>

							<input
								type='text'
								name='category'
								id='category'
								className='form-control'
								placeholder='article category'
								value={formData.category}
								required
								onChange={handleFormField}
							/>
						</div>
						<div className='mb-3 form-check'>
							<label htmlFor='published' className='form-check-label'>
								Published
							</label>

							<input
								type='checkbox'
								name='published'
								id='published'
								className='form-check-input'
								placeholder='article published'
								checked={formData.published}
								onChange={handleFormField}
							/>
						</div>
						<button type='submit' className='btn btn-success'>
							<i className='bi bi-floppy'></i> Save
						</button>
					</form>
				</div>
				<button type='button' className='btn btn-primary my-3' popovertarget='off-canvas-form'>
					Add Article
				</button>

				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
					{articles.map((article, index) => (
						<div key={index} className='col'>
							<div className='card h-100' style={{ position: 'relative' }}>
								<img
									src={'http://localhost:3006/imgs/posts/' + article.image}
									className='card-img-top'
									alt={article.title}
									style={{ backgroundImage: 'cover', height: '300px' }}
								/>
								<div className='card-body'>
									<h5 className='card-title'>{article.title}</h5>
									<div className='card-text'>
										<div>
											<strong>Content</strong>: {article.content}
										</div>
										<div>
											<strong>Category</strong>: {article.tags?.join(', ')}
										</div>
										{article.published && <div className='badge bg-success'>Published</div>}
									</div>
								</div>
								<div className='text-end mb-3 me-3'>
									<button
										className='btn btn-danger'
										data-index={index}
										style={{ position: 'absolute', top: '10px', right: '10px' }}
										onClick={deleteArticle}>
										🗑️
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default App
