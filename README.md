# VELORA ESTATES

**Beyond Properties. Into Possibilities.**

Independent Luxury Real Estate Agency — Production-ready website (file-based data).

## Tech Stack

- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS
- **Data**: Simple JSON file storage (`/data` folder)
- **Auth**: Cookie-based admin login
- **Deployment**: Vercel / any Node host

> **Note on hosting**: File writes work perfectly in local development and on hosts that allow persistent disk (Railway, Render, VPS). On pure serverless platforms like Vercel, writes to the filesystem do not persist across deployments. For production on Vercel you can later migrate the data layer to a real database.

## Brand

| Token            | Hex       |
|------------------|-----------|
| Matte Black      | `#0B0B0B` |
| Champagne Gold   | `#D6B77A` |
| Ivory            | `#F8F6F1` |
| Charcoal         | `#242424` |

**Tagline**: Beyond Properties. Into Possibilities.

---

## Quick Start

```bash
git clone https://github.com/kingmarv-ui/velora-estates.git
cd velora-estates
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Admin Login

- URL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Username: `admin`
- Password: `velora2026`

(You can change these in `data/admin.json`)

---

## Features

### Public Site
- Luxury homepage
- Buy / Sell / Rent / Property Management pages
- Contact & inquiry forms
- About page
- Fully responsive

### Admin Dashboard
- Secure login
- Add / publish / unpublish / delete properties
- View and manage customer inquiries
- Edit business contact details & social links

### Data Storage
All data lives in simple JSON files:

```
data/
├── properties.json   # Property listings
├── inquiries.json    # Customer inquiries
├── settings.json     # Business contact & social
└── admin.json        # Admin credentials
```

---

## Deployment

1. Push to GitHub
2. Import the repo on Vercel (or Railway / Render)
3. Deploy

For full persistent writes on Vercel, a database migration can be added later.

---

## Changing Admin Password

Edit `data/admin.json`:

```json
{
  "username": "admin",
  "password": "your-new-password"
}
```

---

Built for **Velora Estates**.
