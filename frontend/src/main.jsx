import React from 'react'
import ReactDOM from 'react-dom/client'
// Feuille de style Bootstrap (chargée globalement pour toute l'application)
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

// Point d'entrée du frontend : monte le composant racine <App /> dans #root.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
