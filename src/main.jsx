import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UseDarkModeContext} from './context/darkModeContext'
import { UseAuthContext } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseDarkModeContext>
      <UseAuthContext>
        <App />
      </UseAuthContext>
    </UseDarkModeContext>
  </React.StrictMode>
)
