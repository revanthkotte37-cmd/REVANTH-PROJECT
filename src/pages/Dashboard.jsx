import React, { useState } from 'react'

export default function Dashboard(){
  const [role, setRole] = useState('Investor')

  function RoleContent(){
    switch(role){
      case 'Admin':
        return <div><h3>Admin Dashboard</h3><p>Manage users, content, and platform settings.</p></div>
      case 'FinancialAdvisor':
        return <div><h3>Financial Advisor</h3><p>Create educational content and advise investors.</p></div>
      case 'DataAnalyst':
        return <div><h3>Data Analyst</h3><p>Run analyses, update performance data, generate reports.</p></div>
      default:
        return <div><h3>Investor</h3><p>Explore funds, track your portfolio, and compare options.</p></div>
    }
  }

  return (
    <div className="page dashboard">
      <h2>Role Dashboards</h2>
      <div className="role-select">
        <label>Choose role: </label>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option>Investor</option>
          <option>Admin</option>
          <option value="FinancialAdvisor">FinancialAdvisor</option>
          <option value="DataAnalyst">DataAnalyst</option>
        </select>
      </div>
      <RoleContent />
    </div>
  )
}
