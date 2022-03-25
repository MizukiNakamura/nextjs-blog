import Layout from "../../components/layout";
import fetch from "node-fetch";
import BlogList from "../../components/BlogList";

export default function Posts({ posts }) {
	const ids = [ 1, 2, 3, 4, 5, 6 ]

	return (
		<Layout>
			<h1>ブログ</h1>

			<BlogList posts={posts} />

			<form action="/api/hello" method="post">
				<input type="text" name="text" id="" />
				<input type="submit" value="送信" />
			</form>

			{
				ids.map((id, index) => {
					return (
						<div key={index}>
							アイテム id: {id}
							<form action={`api/post/${id}`} method="post">
								<input type="submit" value="このアイテムのidを送る" />
							</form>
						</div>
					)
				})
			}
		</Layout>
	);
}

export async function getStaticProps() {
	const url = "https://custom-pets-diary.microcms.io/api/v1/posts/";
	const res = await fetch(url, {
		headers: {
			"X-MICROCMS-API-KEY": "ccd5ff7cd8b646f0aaf8e5b775fda01f3f34",
		},
	});
	const files = await res.json();
	const posts = files.contents
	return {
		props: { posts },
	};
}
