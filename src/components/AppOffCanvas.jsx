export default function AppOffCanvas({ addArticle, handleFormField, formData }) {
	return (
		<div
			id='off-canvas-form'
			popover='true'
			className='bg-light p-3 border-0 shadow-lg text-dark'
			style={{ minHeight: '100vh' }}>
			<div className='d-flex justify-content-between align-items-center'>
				<h3>Add a new Article</h3>
				<button className='btn btn-primary' type='button' popovertarget='off-canvas-form' popovertargetaction='hide'>
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
					<label htmlFor='slug' className='form-label'>
						Slug
					</label>

					<input
						type='text'
						name='slug'
						id='slug'
						className='form-control'
						placeholder='slug in lowercase and without spaces'
						value={formData.slug}
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
	)
}
