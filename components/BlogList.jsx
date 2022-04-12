import styles from '../styles/BlogList.module.css'
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <ul className={styles.blogList}>
      {posts.map((post, index) => {

        return (
          <li key={index} className={styles.blogItem}>
            <Link href={`/blog/${post.id}`}>
              <a className={styles.blogItem__link}>
                <h2 className={styles.blogItem__heading}>{post.title}</h2>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}