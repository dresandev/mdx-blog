import Link from 'next/link'
import { thisBlogPackages } from '@data'
import { Spacer } from '@components/Spacer'
import styles from './page.module.css'

export const metadata = {
  title: 'Sobre el Blog',
  desripcion: 'Tecnologías y recursos utilizados para la construccion de este Blog'
}

export default async function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tecnologías y recursos utilizados en este blog</h1>
      <p className={styles.paragraph}>
        Este blog está construido en <a className='link' href='https://nextjs.org/' target='_blank'>Next.js 13 app router</a> junto a los siguientes paquetes de npm:
      </p>
      <ul className={styles.list}>
        {
          thisBlogPackages.map(({ name, description, link }) => (
            <li key={link}>
              <a className='link' href={link} target='_blank'>{name}:</a> {description}
            </li>
          ))
        }
      </ul>

      <p className={styles.paragraph}>
        Si gustas curiosiar el codigo fuente lo encuentras en su respectivo <a className='link' href='https://github.com/dresandev/dresan-blog' target='_blank'>repositorio en GitHub</a>, si solo deseas saber como usar mdx en nextjs puedes leer <Link className='link' href='nextjs-13-y-mdx'>Nextjs 13 y mdx</Link>. Por ultimo si quieres un ejemplo mas completo puedes leer <a className='link' href='https://maxleiter.com/blog/build-a-blog-with-nextjs-13' target='_blank'>Building a blog with Next.js 13 and React Server Components</a> de <a className='link' href='https://github.com/MaxLeiter' target='_blank'>Max Leiter</a> o checar el codigo fuente de su pagina personal <a className='link' href='https://github.com/maxleiter/maxleiter.com' target='_blank'>maxleiter.com</a>
      </p>
      <Spacer height='4rem' />
    </div>
  )
}
