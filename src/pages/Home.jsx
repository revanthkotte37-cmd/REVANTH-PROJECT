import React from 'react'

export default function Home({ onNavigate }){
  return (
    <div className="page home">
      <h1>Mutual Fund Platform</h1>
      <p>Explore mutual funds, learn about structure, risks, and choose the right funds for your objectives.</p>
      <div className="cta-row">
        <button onClick={() => onNavigate('funds')}>Browse Funds</button>
        <button onClick={() => onNavigate('compare')}>Compare Funds</button>
        <button onClick={() => onNavigate('dashboard')}>Role Dashboards</button>
      </div>
    </div>
  )
}
