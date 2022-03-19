import Layout from "../../components/layout"
import Link from "next/link"
import Head from "next/head"

export default function User({ user }) {
  return (
    <>
      <Head>
        <title>{user.username}</title>
        <meta name="description" content={user.username} />
      </Head>

      <Layout>
        <h1>{user.username}さん</h1>
        <ul>
          <li>id: {user.id}</li>
          <li>email: {user.email}</li>
        </ul>
        <Link href='/users'><a>ユーザー一覧へ</a></Link>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const url = `https://jsonplaceholder.typicode.com/users`
  const response = await fetch(url)
  const files = await response.json()
  const paths = files.map((file) => {
    return { params: { id: file.id.toString() } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const response = await fetch(url)
  const user = await response.json()
  return { props: { user } }
}
