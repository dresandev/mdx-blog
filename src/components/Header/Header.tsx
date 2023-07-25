import Link from 'next/link'
import { DresanLogo } from '@components/SVG'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <DresanLogo />
      </Link>
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
