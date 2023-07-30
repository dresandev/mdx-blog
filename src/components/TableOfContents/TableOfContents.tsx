import React from 'react'
import { Heading } from '@types'
import styles from './TableOfContents.module.css'

interface TableOfContentsProps {
  headings: Heading[];
  className: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  className,
}) => {

  const renderHeadings = (headings: Heading[], currentLevel: number) => {
    return headings.map((heading, i) => {
      const { slug, title, level } = heading

      if (level === currentLevel) {
        let subHeadings: Heading[] = []

        if (level === 2) {
          subHeadings = getSubHeadings(headings, i + 1)
        }

        return (
          <li key={slug}>
            <a
              className={styles.link}
              href={`#${slug}`}
            >
              {title}
            </a>
            {
              subHeadings.length > 0 && (
                <ul>{renderHeadings(subHeadings, currentLevel + 1)}</ul>
              )
            }
          </li>
        )
      }
    })
  }

  const getSubHeadings = (headings: Heading[], startIndex: number): Heading[] => {
    const subHeadings: Heading[] = []

    for (let i = startIndex; i < headings.length; i++) {
      if (headings[i].level === 3) {
        subHeadings.push(headings[i])
      } else {
        break
      }
    }

    return subHeadings
  }

  return (
    <nav className={`${styles.nav} ${className}`}>
      <h2 className={styles.title}>Table of Contents</h2>
      <ul className={styles.tableOfContents}>
        {renderHeadings(headings, 2)}
      </ul>
    </nav>
  )
}
