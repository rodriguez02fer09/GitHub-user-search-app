import React from 'react'
import './searchPrompt.scss'
import {ISearchPrompt} from './entities/ISearchPrompt'

const SearchPrompt: React.FC<ISearchPrompt> = ({
  isDark,
  onChange,
  onClick,
  notFound,
}) => {
  const baseClass = 'search-prompt'
  const themeClass = `${isDark ? `${baseClass}--dark` : `${baseClass}`}`

  return (
    <div className={`${baseClass} ${themeClass}`}>
      <div className={`${baseClass}__container`}>
        <input
          className={`${baseClass}__container-input`}
          onChange={onChange}
          placeholder="Search GitHub username..."
          type="text"
          id="search"
          name="search"
        />
        {notFound && <div className={`${baseClass}__error`}>No results</div>}

        <button
          className={`${baseClass}__container-button`}
          type="submit"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchPrompt
