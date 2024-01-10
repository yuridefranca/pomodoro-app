import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { setMode } from '@chrissgon/perfectui'

export function Header(): JSX.Element {
  const [currentMode, setCurrentMode] = useState('dark')
  useEffect(() => {
    setMode(currentMode as 'dark' | 'light')
  }, [currentMode])

  return (
    <header className="flex flex-row items-center py-5">
      <div className="field-group flex-1 justify-start">
        <h1 className="text-4xl">Pomodoro Timer</h1>
      </div>
      <div className="field-group flex-1 justify-end items-center">
        <a href="http://www.github.com/yuridefranca" target='_blank' className="btn">
          <FontAwesomeIcon size="2x" icon={['fab', 'github']} />
        </a>
        <button
          className="btn"
          onClick={() => {
            setCurrentMode(currentMode === 'dark' ? 'light' : 'dark')
          }}
        >
          <FontAwesomeIcon
            size="2x"
            icon={currentMode === 'dark' ? ['far', 'moon'] : ['far', 'sun']}
          />
        </button>
      </div>
    </header>
  )
}
