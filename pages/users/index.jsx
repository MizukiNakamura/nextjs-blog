import Layout from "../../components/layout";
import fetch from "node-fetch";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <Layout>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`users/${user.id}`}>
                <a>{user.username}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  const users = await response.json()
  return {
    props: { users }
  }
}
