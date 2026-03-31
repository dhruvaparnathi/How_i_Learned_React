Zoomer Digital Studio

Zoomer is a high-fidelity, reactive digital studio platform built with React, Tailwind CSS, and React Router DOM. This project represents a modern, "next-gen" digital experience, prioritizing bold typography, high-contrast aesthetics, and fluid, state-aware navigation.

🚀 Core Features

Advanced Dynamic Routing: Seamlessly transitions between complex views without page reloads using a centralized routing architecture.

Deep Linking for Products: Programmatic route generation for individual products, allowing for shared URLs and state-specific rendering.

State-Driven Overlay Navigation: A sophisticated full-screen menu system that maintains awareness of the active route and handles scroll locking.

Responsive Motion Design: Built-in CSS animations and transitions that provide a premium "agency-grade" feel.

High-Contrast UI: A carefully curated dark theme utilizing Tailwind's utility-first approach for pixel-perfect layout control.

🛠️ Tech Stack

Framework: React (Vite-powered)

Styling: Tailwind CSS (Utility-first CSS)

Routing: React Router DOM v6

Icons: Lucide React (Vector-based UI icons)

📂 Project Architecture

The project follows a modular "Pages and Components" pattern to keep logic separated and scalable:

src/
├── pages/
│   ├── About.jsx         # Mission statement and studio philosophy
│   ├── Contact.jsx       # Large-scale interactive contact interface
│   ├── Home.jsx          # Hero section with brand identity
│   ├── Nav.jsx           # Global navigation overlay (shared across routes)
│   ├── Products.jsx      # List-view product catalog
│   ├── ProductDetail.jsx # Dynamic individual product display
│   └── Projects.jsx      # Visual grid of case studies and work
├── App.jsx               # Central Router configuration and layout wrapper
└── index.css             # Tailwind base and custom keyframe animations


🔗 Routing Architecture & Details

Zoomer utilizes a robust routing system that manages both static and dynamic content:

1. The Router Provider

The entire application is wrapped in <BrowserRouter> within App.jsx, providing the context for all navigation hooks and components.

2. Static Routes

Standard navigation paths are mapped to dedicated page components:

/ -> Home.jsx

/about -> About.jsx

/projects -> Projects.jsx

3. Dynamic Product Routing

We implement Dynamic Segment Matching for the product catalog:

Path: /products/:productId

Component: ProductDetail.jsx

Implementation: Uses the useParams() hook to extract the productId from the URL, which is then used to filter the PRODUCTS_DATA array and render specific content.

4. Navigation & State Awareness

The Nav component uses the useLocation() hook to:

Detect the current active path.

Visually highlight the corresponding link in the overlay menu.

Automatically close the menu when a link is clicked.

📄 Detailed Page Breakdown

Home

The entry point of the Zoomer experience. It features oversized "Impact" typography and a summary of services. It sets the tone for the "Bold" brand identity.

Work (Projects)

A responsive grid layout showcasing studio excellence. Each card features hover-state transitions that reveal case study details, utilizing Tailwind's group and group-hover utilities.

Pricing (Products)

A dual-layer commerce experience:

List View: A clean, list-based catalog showing all available digital assets.

Detail View: A full-page deep dive into a product's features, pricing, and purchase options, accessed via dynamic IDs.

About

Focuses on "Digital Craftsmanship." This page uses a split-layout grid to balance large-scale decorative text with readable mission-critical information.

Contact

Designed as a "Terminal" style interaction point, featuring a massive, clickable email address and social links. It serves as the primary conversion point for new project inquiries.

🏁 Getting Started

Clone & Enter:

git clone <your-repo-url>
cd website-2


Installation:

npm install


Launch:

npm run dev


Built with passion by Zoomer Studio