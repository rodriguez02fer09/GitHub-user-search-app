import React, {useState, ChangeEvent} from 'react'
import {IContainerSearch} from './entities/IContainerSearch'
import './containerSearch.scss'
import SearchPrompt from '../SearchPrompt/SearchPrompt'
import SearchInformation from '../ContainerInformation/ContainerInformation'
import Mode from '../Mode/Mode'

const ContainerSearch = ({
  isDark,
  toggleDarkMode,
}: IContainerSearch): JSX.Element => {
  const [data, setData] = useState({})
  const [user, setUser] = useState('')
  const [notFound, setNotFound] = useState(false)

  const apiGitHub = () => {
    fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    })
      .then(response => {
        if (response.status === 404) {
          setNotFound(true)
        }
        return response.json()
      })
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(error => console.error(error))
  }
  const searchPrompt = (event: ChangeEvent<HTMLInputElement>) => {
    setNotFound(false)
    setUser(() => event.target.value)
  }

  return (
    <div className="containerSearch">
      <Mode
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        onClick={function (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ): void {
          throw new Error('Function not implemented.')
        }}
      />
      <SearchPrompt
        isDark={isDark}
        onChange={searchPrompt}
        onClick={apiGitHub}
        notFound={notFound}
      />
      <SearchInformation isDark={isDark} data={data} />
    </div>
  )
}

export default ContainerSearch
