# Bila Security & Cleaning Services — Next.js Website

Modern Next.js 14 (App Router) redesign of the Bila Security & Cleaning Services website.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Nodemailer** (contact form emails)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-smtp-password
TO_EMAIL=info@bilasecurity.co.za
```

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment on Plesk

1. Upload the project files to your Plesk hosting directory.
2. Set Node.js version to **18+** in Plesk Node.js settings.
3. Set the **Application startup file** to `node_modules/next/dist/bin/next`.
4. Set environment variables in Plesk (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL).
5. Run `npm install` and `npm run build` via Plesk SSH or the Node.js app manager.
6. Start the app with `npm start` (runs on port 3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About Us |
| `/services` | Our Services |
| `/contact` | Contact form |
| `/confirmed` | Thank-you page after form submission |
| `/api/contact` | POST endpoint — sends email via Nodemailer |

## Project Structure

```
bila-nextjs/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Tailwind base styles
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── confirmed/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Section.tsx
├── public/                 # Static assets
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```
