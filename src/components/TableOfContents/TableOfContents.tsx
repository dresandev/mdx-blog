import React from 'react'
import styles from './TableOfContents.module.css'

export interface Heading {
  id: string;
  slug: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  className,
}) => {

  const renderHeadings = (headings: Heading[], currentLevel: number) => {
    let index = 0
    const renderedList: React.JSX.Element[] = []

    while (index < headings.length) {
      const heading = headings[index]
      const { level, slug, title } = heading

      if (level === currentLevel) {
        renderedList.push(
          <li key={slug}>
            <a href={`#${slug}`}>{title}</a>
            {
              level === 2 && (
                <ul>
                  {renderHeadings(headings.slice(index + 1), level + 1)}
                </ul>
              )
            }
          </li>
        )
      }

      index += 1
    }

    return renderedList
  }

  return (
    <nav className={`${className}`}>
      <h2>Table of Contents</h2>
      <ul className={styles.tableOfContents}>
        {renderHeadings(headings, 2)}
      </ul>
    </nav>
  )
}