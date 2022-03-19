import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
// import fetch from 'node-fetch'

export async function getServerSideProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: { allPostsData }
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							title: "{title}"
							<br />
							id: {id}
							<br />
							date: {date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}