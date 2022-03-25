import Layout from "../../components/layout"
import fetch from "node-fetch"
import Post from "../../components/Post"
import Link from "next/link"

export default function post({ post }) {
  return (
    <Layout>
      <Post post={post} />
      <Link href='/blog'><a>← Blog 一覧</a></Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `https://custom-pets-diary.microcms.io/api/v1/posts/`
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": "ccd5ff7cd8b646f0aaf8e5b775fda01f3f34",
    },
  })
  const files = await res.json()
  const paths = files.contents.map(file => {
    return {
      params: {
        id: file.id.toString()
      }
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const url = `https://custom-pets-diary.microcms.io/api/v1/posts/${id}/`
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": "ccd5ff7cd8b646f0aaf8e5b775fda01f3f34",
    },
  })
  const post = await res.json()

  return { props: { post } }
}