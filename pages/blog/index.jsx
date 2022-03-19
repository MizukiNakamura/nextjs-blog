import Layout from "../../components/layout";
import fetch from "node-fetch";
import nl2br from "react-nl2br";

const count = num => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(num)
			resolve()
		}, 1000)
	})
}

const countDown = async countNum => {
	for (let i = 0; i < countNum; i++) {
		await count(countNum - i)
	}
}

(async () => {
	await countDown(3)
	countDown(3)
})()

export default function Posts({ posts }) {
	const ids = [ 1, 2, 3, 4, 5, 6 ]

	return (
		<Layout>
			<h1>ブログ</h1>

			<div>
				{posts.contents.map((post, index) => {
					return (
						<div key={index}>
							<h2>{post.title}</h2>
							<br />
							{nl2br(post.content)}
							<img src={post.image.url} />
						</div>
					);
				})}
			</div>

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
	const posts = await res.json();
	return {
		props: { posts },
	};
}
