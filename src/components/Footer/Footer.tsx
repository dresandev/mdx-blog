import { HomeLink } from '@components/HomeLink'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <HomeLink />

      <div>
        <p className={styles.linksTitle}>Links</p>
        <div className={styles.linksContainer}>
          <a
            className={styles.link}
            href='https://github.com/dresandev'
            target='_blank'
          >
            Github
          </a>
          <a
            className={styles.link}
            href='https://www.linkedin.com/in/dresandev'
            target='_blank'
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href='mailto:javiandres.016@gmail.com'
            target='_blank'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
