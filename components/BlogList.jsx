import nl2br from "react-nl2br";
// import '../styles/BlogList.module.css'
import styles from '../styles/BlogList.module.css'

export default function BlogList({ posts }) {
  return (
    <ul className={styles.blogList}>
      {posts.contents.map((post, index) => {
        let content = post.content
        const len = content.length
        content = (len >= 35) ? content.substr(0, 35) + '...' : content

        return (
          <li key={index} className={styles.blogItem}>
            <h2 className={styles.blogItem__heading}>{post.title}</h2>
            <p className={styles.blogItem__content}>
              {nl2br(content)}
            </p>
            <figure className={styles.blogItem__imgWrapper}>
              <img className={styles.blogItem__img} src={post.image.url} />
            </figure>
          </li>
        );
      })}
    </ul>
  )
}