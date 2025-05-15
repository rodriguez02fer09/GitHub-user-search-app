import React from 'react'
import './searchPrompt.scss'
import Shape from '../../assets/Shape'
import {ISearchPrompt} from './entities/ISearchPrompt'

const SearchPrompt: React.FC<ISearchPrompt> = ({
  isDark,
  onChange,
  onClick,
  notFound,
}) => {
  const baseClass = 'search-prompt'
  const themeClass = isDark ? `${baseClass}--dark` : ''

  return (
    <div className={`${baseClass} ${themeClass}`}>
      <div className={`${baseClass}__container ${themeClass}__container`}>
        <input
          className={`${baseClass}__container-input ${themeClass}__container-input`}
          onChange={onChange}
          placeholder="Search GitHub username..."
          type="text"
          id="search"
          name="search"
        />
        {notFound && (
          <div className={`${baseClass}__error ${themeClass}__error`}>
            No results
          </div>
        )}
        <Shape />
        <button
          className={`${baseClass}__container-button ${themeClass}__container-button`}
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
