# TableFlow

TableFlow is a **front-end desktop prototype** of a restaurant POS/admin interface built for portfolio purposes.

## Current Scope

- Desktop-first dark UI inspired by a partially completed Figma design
- Main flows: menu browsing, order panel, payment modal, dashboard, product management mockup
- Built and iterated solo as a learning project

## Tech Stack (Actual)

- React 19
- React Router DOM 6
- Vite
- Tailwind CSS
- Radix UI primitives (`dialog`, `dropdown-menu`, `avatar`, `scroll-area`)
- shadcn-style component patterns (`cva`, `clsx`, `tailwind-merge`)
- Recharts
- Lucide icons

## Data & Limitations

- Data is currently mock/local (no real backend persistence yet)
- Actions such as adding a dish are UI/demo behaviors for now
- The design source was incomplete and had no mobile version
- This project is intentionally **desktop-only** at this stage

## Project Structure

`src/`
- `assets/` static files
- `components/` shared low-level UI primitives
- `features/` feature modules (`Dashboard`, `Menus`, `Order`, `Payments`, `ProductManage`, `Settings`)
- `Pages/` route-level screens
- `ui/` app-level reusable UI wrappers/components
- `data/` local mock data sources

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Roadmap

- Connect flows to a real API/backend
- Add realistic cart and order state management
- Improve accessibility and loading/empty/error states
- Add responsive strategy for tablet/mobile
