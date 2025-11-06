import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import FundsList from './pages/FundsList'
import FundDetail from './pages/FundDetail'
import Compare from './pages/Compare'
import Dashboard from './pages/Dashboard'
import { fetchFunds } from './api/client'

export default function App(){
  const [route, setRoute] = useState('home')
  const [funds, setFunds] = useState([])
  const [selectedFund, setSelectedFund] = useState(null)

  useEffect(() => {
    fetchFunds().then(setFunds).catch(err => console.error(err))
  }, [])

  function goTo(r, payload){
    setRoute(r)
    if(payload) setSelectedFund(payload)
  }

  return (
    <div className="app">
      <NavBar onNavigate={goTo} />
      <main>
        {route === 'home' && <Home onNavigate={goTo} />}
        {route === 'funds' && <FundsList funds={funds} onView={f => goTo('fundDetail', f)} />}
        {route === 'fundDetail' && <FundDetail fund={selectedFund} onBack={() => goTo('funds')} />}
        {route === 'compare' && <Compare funds={funds} />}
        {route === 'dashboard' && <Dashboard />}
      </main>
    </div>
  )
}
