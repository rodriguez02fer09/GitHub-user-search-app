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
    if (!user.trim()) {
      alert('Por favor ingresa un usuario válido')
      return
    }

    fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
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
    setUser(event.target.value)
  }

  return (
    <div className="containerSearch">
      <Mode isDark={isDark} toggleDarkMode={toggleDarkMode} />
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
