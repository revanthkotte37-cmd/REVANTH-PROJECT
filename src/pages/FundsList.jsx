import React from 'react'
import FundCard from '../components/FundCard'

export default function FundsList({ funds, onView }){
  return (
    <div className="page funds-list">
      <h2>Available Mutual Funds</h2>
      <div className="fund-grid">
        {funds.map(f => (
          <FundCard key={f.id} fund={f} onView={() => onView(f)} />
        ))}
      </div>
    </div>
  )
}
