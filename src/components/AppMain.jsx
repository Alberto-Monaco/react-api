import AppAddArticle from './AppAddArticle'
import AppCard from './AppCard'

export default function AppMain({ addArticle, handleFormField, formData, articles, deleteArticle }) {
	return (
		<>
			<AppAddArticle addArticle={addArticle} handleFormField={handleFormField} formData={formData} />
			<section className='container my-3'>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
					{articles.map((article, index) => (
						<AppCard key={index} article={article} index={index} deleteArticle={deleteArticle} />
					))}
				</div>
			</section>
		</>
	)
}
