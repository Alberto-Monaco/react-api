import AppOffCanvas from './AppOffCanvas'
export default function AppAddArticle({ addArticle, handleFormField, formData }) {
	return (
		<section className='add-article container my-3'>
			<AppOffCanvas addArticle={addArticle} handleFormField={handleFormField} formData={formData} />
			<button type='button' className='btn btn-primary my-3' popovertarget='off-canvas-form'>
				Add Article
			</button>
		</section>
	)
}
