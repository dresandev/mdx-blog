import Link from 'next/link'
import { HomeLink } from '@components/HomeLink'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <HomeLink />
      <Link
        className={styles.link}
        href='https://www.dresan.me/'
        target='_blank'
        prefetch={false}
      >
        Portaflio
      </Link>
    </header>
  )
}
