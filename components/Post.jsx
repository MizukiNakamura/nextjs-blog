import styles from '../styles/Post.module.css'
import nl2br from 'react-nl2br'

export default function Post({ post }) {
  const publishedDate = post.publishedAt
  const publishedYear = publishedDate.substring(0, 4)
  let publishedMonth = publishedDate.substring(5, 7)
  let publishedDay = publishedDate.substring(8, 10)

  return (
    <div>
      <h1 className={styles.post__title}>{post.title}</h1>

      <div className={styles.post__date}>
        <time dateTime={post.createdAt}>
          {`${publishedYear}年${publishedMonth}月${publishedDay}日 公開`}
        </time>
      </div>

      <div
        className={styles.post__body}
        dangerouslySetInnerHTML={{ __html: post.aa }}
      />

      <p className={styles.post__content}>{nl2br(post.content)}</p>
    </div>
  )
}