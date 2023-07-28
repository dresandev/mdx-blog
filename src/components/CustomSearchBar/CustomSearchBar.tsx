import { SearchIcon } from '@components/SVG/SearchIcon'
import styles from './SearchBar.module.css'

interface CustomSearchBarProps {
  className?: string
}

export const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.searchBarContainer} ${className}`}>
      <SearchIcon
        className={styles.searchIcon}
      />
      <input
        className={styles.searchBar}
        type='text'
        placeholder='Buscar'
      />
    </div>
  )
}
