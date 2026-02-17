# 🏡 Audacieux Real Estate

**"Building Dreams, Securing Future"**

A professional real estate website built with Next.js for Audacieux Real Estate, Rwanda's premier property agency based in Kimironko, Kigali.

---

## 🚀 Features

### Core Features
- 🏠 **Property Listings** - Browse houses, apartments, land plots, and office spaces
- 📍 **Location Pages** - Detailed guides for Kimironko and other Kigali neighborhoods
- 📝 **Real Estate Blog** - Expert guides and market insights
- 📱 **WhatsApp Integration** - Instant contact via floating button
- 🔍 **SEO Optimized** - Structured data, meta tags, sitemap, robots.txt
- 📊 **Schema Markup** - RealEstateAgent and FAQPage schemas

### Property Services
1. House Selling
2. Small House Renting
3. Rental & Leasing
4. Plot Selling
5. Office Leasing
6. Apartment Leasing

**Special Offer:** Up to 45% discount on selected properties

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS 4.0
- **Language:** TypeScript 5
- **Icons:** lucide-react 0.564.0
- **Deployment Ready:** Vercel/Netlify

---

## 📂 Project Structure

```
audacieux-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── properties/         # Property listings
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx   # Dynamic property pages
│   │   ├── locations/          # Location guides
│   │   │   ├── page.tsx
│   │   │   └── kimironko/page.tsx
│   │   ├── blog/               # Blog section
│   │   │   ├── page.tsx
│   │   │   └── best-houses-for-rent-kimironko-2026/
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   ├── Hero.tsx            # Video background hero
│   │   ├── Services.tsx        # Service cards
│   │   ├── PropertyShowcase.tsx
│   │   ├── PropertyImage.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── FAQSection.tsx      # FAQ with schema
│   └── data/
│       └── properties.ts       # Property database
├── public/
│   └── video.mp4              # Hero video
├── SEO-STRATEGY.md            # SEO documentation
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd audacieux-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

---

## 📱 Contact Information

**Audacieux Real Estate**
- 📍 Location: Kimironko, Kigali, Rwanda
- 📞 Phone: +250 789 208 631 / +250 792 639 306
- ✉️ Email: audacieuxniyibikoze@gmail.com
- 📱 Instagram: @audacieux_niyibikoze
- 💬 WhatsApp: [Message Us](https://wa.me/250789208631)

---

## 🎨 Design

### Color Scheme
- **Primary Green:** `#0d4f3a` / `#1a7a55`
- **Accent Yellow:** `#FFD400`
- **Text:** `#1e293b` (slate-800)

### Typography
- System font stack (optimized for performance)
- Responsive sizing

---

## 📈 SEO Strategy

This website is optimized to dominate Google search results in Rwanda. See [SEO-STRATEGY.md](SEO-STRATEGY.md) for full details.

### Key SEO Features
✅ Schema.org structured data
✅ Open Graph & Twitter Cards
✅ Dynamic sitemap.xml
✅ Robots.txt configuration
✅ Location-based content
✅ FAQ schema markup
✅ 1200-2000 word blog articles
✅ Internal linking strategy

### Target Keywords
- "real estate Kigali"
- "house for rent Kimironko"
- "plot for sale Kigali"
- "apartment leasing Rwanda"

---

## 🗺️ Sitemap

- `/` - Homepage (Priority: 1.0)
- `/properties` - All properties (Priority: 0.9)
- `/properties/[id]` - Individual properties (Priority: 0.8)
- `/locations` - Location hub (Priority: 0.9)
- `/locations/kimironko` - Kimironko guide (Priority: 0.95)
- `/blog` - Blog listing (Priority: 0.8)
- `/blog/[slug]` - Blog articles (Priority: 0.7)
- `/contact` - Contact page (Priority: 0.8)

---

## 📊 Property Data

Currently featuring **6 properties**:
- **Houses:** 35M - 60M RWF
- **Land/Plots:** 40M - 120M RWF
- **Apartments:** 45M RWF
- **Office Spaces:** Contact for pricing

All prices subject to up to 45% discount.

---

## 🔧 Development

### Adding New Properties

Edit `src/data/properties.ts`:

```typescript
export const properties: Property[] = [
  {
    id: 'unique-id',
    title: 'Property Name',
    type: 'house' | 'land' | 'apartment' | 'office',
    price: 50000000, // in RWF
    location: 'Kimironko, Kigali',
    bedrooms: 3,
    bathrooms: 2,
    area: '250 sqm',
    description: '...',
    features: ['Feature 1', 'Feature 2']
  }
];
```

### Creating Location Pages

1. Create folder: `src/app/locations/[area-name]/`
2. Add `page.tsx` with SEO metadata
3. Include FAQSection component
4. Add to sitemap.ts

### Writing Blog Posts

1. Create folder: `src/app/blog/[slug]/`
2. Write 1200-2000 words
3. Add FAQ section with schema
4. Internal links to properties
5. Update sitemap.ts

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
No environment variables required for basic deployment.

---

## 📝 To-Do / Roadmap

### Immediate
- [ ] Add real property photos
- [ ] Create Google Business Profile
- [ ] Get initial customer reviews

### Content Creation
- [ ] Write 10 more blog articles
- [ ] Create location pages for other areas
- [ ] Add customer testimonials
- [ ] Before/after success stories

### Features
- [ ] Property comparison tool
- [ ] Mortgage calculator
- [ ] Virtual property tours
- [ ] Admin dashboard for property management

---

## 📄 License

© 2026 Audacieux Real Estate. All rights reserved.

---

## 🤝 Support

For website issues or inquiries:
- Email: audacieuxniyibikoze@gmail.com
- Phone: +250 789 208 631

---

**Built with ❤️ for Audacieux Real Estate**

*Dominating Kigali's real estate market, one property at a time.*
