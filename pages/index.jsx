import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	return (
		<Layout home>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Next.js Blog</h2>
			</section>
		</Layout>
	)
}