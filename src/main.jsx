import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Starfield from 'react-starfield';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.4}
        backgroundColor="black"
      />
    <App />
  </React.StrictMode>,
)
