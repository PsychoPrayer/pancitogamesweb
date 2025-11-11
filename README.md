# 🎮 PancitoGames Website

Official website for **PancitoGames**, showcasing our educational mobile games that celebrate Latin American culture.

## 🌟 Featured Game: Memory History

A memory game celebrating Venezuelan history and culture with 55 collectibles, 81 unique levels, and educational tests.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 📁 Project Structure

```
pancitogames-web/
├── app/
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── memory-history/   # Memory History game page
│   ├── privacy/          # Privacy Policy
│   ├── terms/            # Terms & Conditions
│   ├── globals.css       # Global styles with custom colors
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── LogoPancito.jpg
│   ├── MemoryHistoryLogoSinFondo.png
│   └── ...
└── package.json
```

---

## 🎨 Color Palette

### PancitoGames Brand Colors
- **Primary:** `#ff6b35` (Vibrant Orange)
- **Secondary:** `#f7931e` (Golden Orange)
- **Accent:** `#ffc107` (Yellow)
- **Dark:** `#2c3e50` (Dark Blue)
- **Light:** `#ecf0f1` (Light Gray)

### Memory History Vintage Theme
- **Copper:** `#b87333`
- **Bronze:** `#cd7f32`
- **Gold:** `#d4af37`
- **Brown:** `#8b4513`
- **Cream:** `#f5f5dc`
- **Parchment:** `#f0e68c`

---

## 📄 Pages

- **Home (`/`)**: Landing page with hero, features, and games showcase
- **Memory History (`/memory-history`)**: Dedicated page for Memory History game
- **About (`/about`)**: Company information, mission, vision, values
- **Contact (`/contact`)**: Contact form and information
- **Privacy Policy (`/privacy`)**: Privacy policy in English & Spanish
- **Terms & Conditions (`/terms`)**: Terms in English & Spanish

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Domain:** pancitogames.com (via IONOS)

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy automatically
4. Configure custom domain (pancitogames.com) in Vercel settings

### Environment Variables

No environment variables are required for the basic setup.

---

## 📝 Customization

### Update Colors

Edit `/app/globals.css` to change color variables:

```css
:root {
  --pancito-primary: #ff6b35;
  /* ... more colors */
}
```

### Update Content

- **Texts:** Edit directly in page components (`/app/page.tsx`, etc.)
- **Images:** Replace files in `/public/` directory
- **Metadata:** Update `metadata` objects in each page for SEO

---

## 📧 Contact

- **Email:** hi@pancitogames.com
- **Website:** [pancitogames.com](https://pancitogames.com)
- **Founded:** 2016
- **Location:** United States

---

## 📜 License

© 2016-2024 PancitoGames. All rights reserved.

---

## 🎯 Future Enhancements

- [ ] Implement functional contact form with email service
- [ ] Add social media integration
- [ ] Create beta signup system for Memory History
- [ ] Add blog section for game updates
- [ ] Implement analytics (privacy-friendly)
- [ ] Add more games as they are developed

---

**Made with ❤️ by PancitoGames**
