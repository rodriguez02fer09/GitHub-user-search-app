import React from 'react'
import './searchPrompt.scss'
import Shape from '../../assets/Shape'
import {ISearchPrompt} from './entities/ISearchPrompt'

const SearchPrompt = ({
  isDark,
  onChange,
  onClick,
  notFound,
}: ISearchPrompt): JSX.Element => {
  const defaultClass = `search-prompt`
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`

  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <input
          className={`${defaultClass}__container-input ${custonClass}__container-input `}
          onChange={onChange}
          placeholder="Search GitHub username..."
          type="text"
          id="search"
          name="search"
        />
        {notFound && (
          <div className={`${defaultClass}__error ${custonClass}__error `}>
            No results
          </div>
        )}
        <Shape />
        <button
          className={`${defaultClass}__container-button ${custonClass}__container-button`}
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
