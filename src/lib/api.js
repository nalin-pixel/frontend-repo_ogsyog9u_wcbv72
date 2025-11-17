const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export const api = {
  async subscribe(email, interests = []) {
    const res = await fetch(`${BASE_URL}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, interests }),
    })
    if (!res.ok) throw new Error('Subscription failed')
    return res.json()
  },
  async lead(payload) {
    const res = await fetch(`${BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error('Lead submission failed')
    return res.json()
  },
  async posts() {
    const res = await fetch(`${BASE_URL}/posts`)
    if (!res.ok) throw new Error('Failed to load posts')
    return res.json()
  },
  async products() {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) throw new Error('Failed to load products')
    return res.json()
  },
  async resources() {
    const res = await fetch(`${BASE_URL}/resources`)
    if (!res.ok) throw new Error('Failed to load resources')
    return res.json()
  },
}

export default api
