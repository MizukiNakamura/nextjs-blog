import nl2br from "react-nl2br";
import styles from '../styles/BlogList.module.css'
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <ul className={styles.blogList}>
      {posts.contents.map((post, index) => {
        let content = post.content
        const len = content.length
        content = (len >= 35) ? content.substring(0, 35) + '...' : content

        return (
          <li key={index} className={styles.blogItem}>
            <Link href={`/blog/${post.title}`}>
              <a className={styles.blogItem__link}>
                <h2 className={styles.blogItem__heading}>{post.title}</h2>
                <p className={styles.blogItem__content}>
                  {nl2br(content)}
                </p>
                <figure className={styles.blogItem__imgWrapper}>
                  <img className={styles.blogItem__img} src={post.image.url} />
                </figure>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}