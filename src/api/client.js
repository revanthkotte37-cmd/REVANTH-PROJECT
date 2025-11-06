const API_BASE = 'http://localhost:4000/api'

export async function fetchFunds(){
  const res = await fetch(`${API_BASE}/funds`)
  if(!res.ok) throw new Error('Failed to fetch funds')
  return res.json()
}

export async function fetchFundById(id){
  const res = await fetch(`${API_BASE}/funds/${id}`)
  if(!res.ok) throw new Error('Failed to fetch fund')
  return res.json()
}

export async function fetchReports(){
  const res = await fetch(`${API_BASE}/reports`)
  if(!res.ok) throw new Error('Failed to fetch reports')
  return res.json()
}
