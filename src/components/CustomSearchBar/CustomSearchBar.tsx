import { SearchIcon } from '@components/SVG/SearchIcon'
import styles from './SearchBar.module.css'

export const CustomSearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
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
