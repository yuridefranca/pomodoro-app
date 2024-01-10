import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import '@chrissgon/perfectui/dist/perfectui.css'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(far, faMoon, faSun)
library.add(fab, faGithub)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
