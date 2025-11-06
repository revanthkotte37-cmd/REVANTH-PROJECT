import React from 'react'

export default function FundCard({ fund, onView }){
  return (
    <div className="fund-card">
      <h4>{fund.name}</h4>
      <p>{fund.category}</p>
      <p><strong>1y:</strong> {fund.performance['1y']}</p>
      <button onClick={onView}>View</button>
    </div>
  )
}
