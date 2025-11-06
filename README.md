# Mutual Fund Platform (Prototype)

This is a small prototype of a mutual fund information and selection platform.

Features:
- React front-end using hooks (Vite)
- Mock Express API serving fund data
- Pages: Home, Funds list, Fund detail, Compare, Role Dashboards

Run locally:

1. Install dependencies:

   npm install

2. Start both client and server (concurrently):

   npm run dev

- Client runs on http://localhost:5173
- Mock API runs on http://localhost:4000

Next steps:
- Add real authentication & role-based access control
- Add CMS for advisors/admins
- Persist data in a database
- Add tests and CI
