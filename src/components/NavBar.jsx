import React from 'react'

export default function NavBar({ onNavigate }){
  return (
    <header className="nav">
      <div className="brand" onClick={() => onNavigate('home')}>MutualFunds</div>
      <nav>
        <button onClick={() => onNavigate('funds')}>Funds</button>
        <button onClick={() => onNavigate('compare')}>Compare</button>
        <button onClick={() => onNavigate('dashboard')}>Dashboards</button>
      </nav>
    </header>
  )
}
