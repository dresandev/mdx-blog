import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p>Página no encontrada</p>
    </div>
  )
}
