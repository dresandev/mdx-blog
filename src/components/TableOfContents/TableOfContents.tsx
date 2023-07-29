import { Heading } from '@types'
import styles from './TableOfContents.module.css'

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  className,
}) => {
  const renderHeadings = (currentLevel: number) => {
    return headings.map((heading) => {
      const { level, slug, title } = heading

      if (level === currentLevel) {
        return (
          <li key={slug}>
            <a className={styles.link} href={`#${slug}`}>
              {title}
            </a>
            {
              level === 2 && (
                <ul>{renderHeadings(level + 1)}</ul>
              )
            }
          </li>
        )
      }
    })
  }

  return (
    <nav className={`${styles.nav} ${className}`}>
      <h2 className={styles.title}>Tabla de Contenidos</h2>
      <ul>
        {renderHeadings(2)}
      </ul>
    </nav>
  )
}
