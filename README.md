# 🩺 Gulati Physiotherapy Clinic — Website

A modern, fully responsive website built for **Gulati Physiotherapy Clinic**, Kota (Rajasthan) — designed to help patients discover treatments, learn about the clinic's technology, and book appointments online.

🔗 **Live Demo:** [Add your deployed link here]
📁 **Repository:** [Add your repo link here]

---

## 📌 About This Project

This project was developed as part of a client engagement handled through **Right Ads**, a digital marketing agency, where I currently work as a **Cybersecurity Intern**. Alongside my core cybersecurity responsibilities, I was given the opportunity to take on this web development assignment — designing and building a complete, production-ready website for a physiotherapy and chiropractic clinic client, covering everything from the homepage and treatment listings to an online appointment booking flow.

Taking on a task outside my primary domain was a deliberate stretch goal — it let me apply secure coding practices (input validation, safe form handling, and clean dependency management) while building a real, client-facing product from scratch.

My responsibilities on this project included:

- Structuring and building all site pages (Home, About, Team, Treatments, Technology, Gallery, Testimonials, Contact, Careers, and legal pages)
- Implementing a clean, accessible, mobile-first UI
- Building reusable components (Navbar, Footer, Cards, Forms) for consistency across pages
- Setting up client-side routing for dynamic treatment and technology detail pages
- Applying basic security best practices during development (form input validation, no exposed secrets/API keys, sanitized user inputs)
- Optimizing for performance, responsiveness, and SEO-friendly structure

---

## ✨ Features

- **Home Page** — Hero section, doctor introduction, services overview, stats, gallery preview, testimonials carousel, and appointment CTA
- **About Doctor** — Detailed profile, philosophy, certifications, and expertise
- **Our Team** — Clinical team profiles
- **Treatments (10 pages)** — Back & Spine Pain, Cervical Spondylosis, Chiropractic Adjustment, Electrotherapy, Frozen Shoulder, Joint & Knee Rehab, Sciatica Decompression, Sports Injury Recovery, Stroke & Paralysis Rehab, Mechanical Decompression
- **Technology (4 pages)** — Computerized Decompression, IFT Bio-currents, Laser Biostimulation, Thermal Ultrasound Healing
- **Gallery** — Interactive image lightbox with keyboard/touch navigation
- **Testimonials** — Verified patient reviews with ratings
- **Online Appointment** — Full booking form with validation and success confirmation
- **Contact Page** — Embedded map, helpline info, and quick contact form
- **Careers** — Job openings and application flow
- **Patient Guidelines, Privacy Policy, Terms of Service, Warranties & Guarantees** — Informational/legal pages
- Fully responsive across mobile, tablet, and desktop
- Clean, accessible, light-themed UI with a consistent design system

---

## 🛠️ Tech Stack

| Category         | Technology                     |
|-------------------|--------------------------------|
| Framework         | React (Vite)                   |
| Styling           | Tailwind CSS                   |
| Routing           | React Router                   |
| Icons             | Lucide React                   |
| Animations        | Framer Motion                  |
| Forms             | React state / React Hook Form  |
| Deployment        | [Vercel / Netlify — update]    |

---

## 🎨 Design System

- **Background:** `#FAF9F6`
- **Primary (Teal):** `#0D9488`
- **Accent (Amber):** `#D97706`
- **Text (Dark Slate):** `#1E293B`
- **Fonts:** `Playfair Display` (headings), `Inter` (body text)

---

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, Button, Card, Section)
├── pages/            # Static page components
│   ├── treatments/   # Individual treatment route wrapper
│   └── technology/   # Individual technology route wrapper
├── data/             # Static content data (treatments.js, technology.js)
├── App.jsx           # Route definitions
└── main.jsx          # App entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gulati-physiotherapy-clinic

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173` by default.

---

## 📸 Screenshots

> _Add screenshots of the Home, Treatments, and Appointment pages here once deployed._

---

## 📄 License

This project was built for client use as part of an internship engagement at **Right Ads**. All content, branding, and imagery belong to **Gulati Physiotherapy Clinic**. Code structure and implementation are shared here for portfolio/demonstration purposes.

---

## 🙋 Author

**[Your Name]**
Cybersecurity Intern @ Right Ads
_(Web development undertaken as an additional client project during internship)_

[LinkedIn] · [Portfolio] · [Email]