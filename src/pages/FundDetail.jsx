import React, { useEffect, useState } from 'react'
import { fetchFundById } from '../api/client'

export default function FundDetail({ fund, onBack }){
  const [details, setDetails] = useState(fund)

  useEffect(() => {
    if(fund && fund.id){
      fetchFundById(fund.id).then(setDetails).catch(console.error)
    }
  }, [fund])

  if(!details) return <div className="page">Select a fund to view details.</div>

  return (
    <div className="page fund-detail">
      <button onClick={onBack}>← Back</button>
      <h2>{details.name}</h2>
      <p><strong>Category:</strong> {details.category}</p>
      <p><strong>Assets under management:</strong> {details.aum}</p>
      <h3>Structure</h3>
      <p>{details.structure}</p>
      <h3>Risks</h3>
      <ul>
        {details.risks.map((r,i) => <li key={i}>{r}</li>)}
      </ul>
      <h3>Factors influencing decisions</h3>
      <ul>
        {details.factors.map((f,i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  )
}
