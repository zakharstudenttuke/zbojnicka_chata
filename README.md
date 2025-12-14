# Zbojnícka Chata – Official Website (Frontend)

This project is a modern frontend implementation of the official website for **Zbojnícka chata**[](https://zbojnickachata.sk/), a mountain hut located at 1960 m above sea level in the High Tatras, Slovakia.

### Project Purpose
- Complete redesign with a fresh, modern, and responsive look.
- Preservation of the original site's atmosphere while significantly improving usability.
- Full-featured online booking system (date selection, additional services, guest details entry).
- Prepared for future backend integration (availability checks, payments, etc.).

### Key Features
- Responsive design with unique content scaling (scale-adaptive layout to maintain design proportions on all screen sizes).
- Navigation: Home, About Us, Accommodation, Activities, Gallery, Contact, Book Now.
- Dedicated full-screen booking flow without header/footer.
- Activities page with filters and detailed route cards.
- Component-based architecture for easy maintenance and extension.

### Technologies
- **React** (Create React App)
- **React Router DOM** – client-side routing
- **Styled Components** – CSS-in-JS styling
- **Framer Motion** – animations
- **Lucide React** – icon set

### Project Structure
```
src/
├── assets/             # Images, icons, logo
├── components/         # Reusable components (Header, Footer,TextBlock, etc.)
├── pages/              # Site pages
│   ├── HomePage.jsx
│   ├── AboutUsPage.jsx
│   ├── ActivitiesPage.jsx
│   └── ReservationPages/  # Booking steps
├── styles/             # Theme, global styles
├── utils/              # Helper utilitie(ScrollToTopetc.)
├── App.js              # Routing and main layout
└── index.js            # Entry point
```

### How to Run the Project

#### 1. Clone the repository
```bash
git clone https://github.com/zakharstudenttuke/zbojnicka_chata.git
cd zbojnicka-chata
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Start development server
```bash
npm start
```
Open http://localhost:3000 in your browser.

#### 4. Build for production
```bash
npm run build
```
The optimized build will be created in the build/ folder.

### Future Plans
- Backend integration (date availability, booking storage).
- Multilingual support (SK / EN).
- SEO and performance improvements.
- Deployment to hosting (Vercel / Netlify).

### Original Website
The design and content are inspired by the official site:
🔗 https://zbojnickachata.sk/

Thank you for your interest in the project! 🏔️