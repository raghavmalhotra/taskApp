import { useState, useEffect } from 'react'

import logo from '../assets/logo.svg'

export const Header = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <span>TaskApp</span>
      </div>
      <div className='themeSelector'>
        <span onClick={() => setTheme('light')} className='light'></span>
        <span onClick={() => setTheme('medium')} className='medium'></span>
        <span onClick={() => setTheme('dark')} className='dark'></span>
        <span
          onClick={() => setTheme('gradientOne')}
          className='gradientOne'
        ></span>
        <span
          onClick={() => setTheme('gradientTwo')}
          className='gradientTwo'
        ></span>
        <span
          onClick={() => setTheme('gradientThree')}
          className='gradientThree'
        ></span>
      </div>
    </header>
  )
}
