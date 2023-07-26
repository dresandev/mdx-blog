import { DresanLogo } from '@components/SVG'
import Link from 'next/link'

export const HomeLink = () => {
  return (
    <Link href='/' aria-label='Ir al inicio'>
      <DresanLogo />
    </Link>
  )
}
