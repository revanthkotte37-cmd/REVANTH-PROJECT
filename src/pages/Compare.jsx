import React, { useState } from 'react'

export default function Compare({ funds }){
  const [selected, setSelected] = useState([])

  function toggle(id){
    setSelected(s => s.includes(id) ? s.filter(x => x!==id) : [...s, id].slice(-3))
  }

  const chosen = funds.filter(f => selected.includes(f.id))

  return (
    <div className="page compare">
      <h2>Compare Funds</h2>
      <p>Select up to 3 funds to compare.</p>
      <div className="compare-grid">
        <div className="list">
          {funds.map(f => (
            <div key={f.id} className="compare-item">
              <label>
                <input type="checkbox" checked={selected.includes(f.id)} onChange={() => toggle(f.id)} />
                {f.name} — {f.category}
              </label>
            </div>
          ))}
        </div>
        <div className="panel">
          {chosen.length === 0 && <p>No funds chosen.</p>}
          {chosen.map(f => (
            <div key={f.id} className="compare-card">
              <h3>{f.name}</h3>
              <p><strong>Category:</strong> {f.category}</p>
              <p><strong>AUM:</strong> {f.aum}</p>
              <p><strong>Return (1y):</strong> {f.performance['1y']}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
