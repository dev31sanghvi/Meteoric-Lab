# Meteoric - Fitness Coaching Business Website

A modern, conversion-focused landing page for a fitness coaching business that helps coaches monetize their expertise through a complete coaching ecosystem.

## 🎯 Features

- **Bold, Conversational Copywriting** - Human-centered messaging that connects with fitness, nutrition, yoga, and biohacking coaches
- **Dark Theme Design** - Modern, professional appearance with purple/violet gradient accent colors
- **Comprehensive Services Overview** - Details on micro-niche identification, offer creation, and coaching ecosystem setup
- **Clear Process Timeline** - 5-step roadmap from niche discovery to scaling (30-60 days)
- **Performance-Based Pricing** - Transparent setup fee + revenue share model with 100% ROI guarantee
- **Social Proof** - Real testimonials from successful coaches
- **Extensive FAQ Section** - Addresses common concerns and objections
- **Multiple CTAs** - Strategic placement of free strategy call booking options
- **Responsive Design** - Optimized for all devices and screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dev31sanghvi/Meteoric-Lab.git
cd Meteoric-Lab
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment Ready**: Optimized for Vercel, Netlify, or any Node.js hosting

## 📁 Project Structure

```
Meteoric-Lab/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with Tailwind directives
├── public/              # Static assets (if needed)
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Customization

### Colors
The color theme uses a purple/violet gradient palette. Colors can be modified in `app/globals.css` and `app/page.tsx`:
- **CSS Variables** in `globals.css`: `--accent: #8b5cf6`, `--accent-secondary: #3b82f6`
- **Gradient Classes**: `from-[#8b5cf6] to-[#3b82f6]` (purple to blue gradient)
- **Background**: `#0f0f1a` (dark navy)
- **Card Backgrounds**: `#1a1b2e` (navy charcoal)

### Content
All copy is in `app/page.tsx`. Edit the text directly to customize:
- Hero section messaging
- Service descriptions
- Process steps
- Testimonials
- FAQ content

### Styling
Global styles are in `app/globals.css`. Component-specific styles use Tailwind utility classes.

## 📝 License

ISC

## 🤝 Contributing

This is a business website project. For significant changes, please open an issue first to discuss what you would like to change.

---

Built with ❤️ for fitness coaches ready to scale their impact