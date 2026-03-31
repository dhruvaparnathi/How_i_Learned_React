# ⚡ Zoomer Digital Studio (Web Rounting -> React-Router-DOM)

**Zoomer** is a high-fidelity, reactive digital studio platform built with **React**, **Tailwind CSS**, and **React Router DOM**. It represents a "next-gen" digital experience with bold typography and fluid, state-aware navigation.

---

## 🌐 Live Preview

| **Status** | **Link** |
| :--- | :--- |
| 🚀 **Production** | [View Live Demo]((https://basic-web-routing.netlify.app/)) |
| 📦 **Repository** | [dhruvaparnathi/website-2](https://github.com/dhruvaparnathi/How_i_Learned_React/tree/main/Projects/website-2) |

---

## 🚀 Core Features

* **Advanced Dynamic Routing**: Seamlessly transitions between complex views without page reloads.
* **Deep Linking for Products**: Programmatic route generation for individual products via dynamic IDs.
* **State-Driven Navigation**: A sophisticated full-screen menu system that tracks active routes.
* **Premium Motion Design**: Built-in CSS animations and transitions for an "agency-grade" feel.
* **High-Contrast UI**: A carefully curated dark theme utilizing Tailwind's utility-first approach.

---

## 🛠️ Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **React** | Component Architecture (Vite) |
| **Tailwind CSS** | Styling & Responsive Layout |
| **React Router** | Dynamic SPA Routing |
| **Lucide React** | Minimalist Vector Iconography |

---

## 📂 Project Architecture

The project follows a modular **"Pages and Components"** pattern:

```text
src/
├── pages/
│   ├── About.jsx         # Mission & Philosophy
│   ├── Contact.jsx       # Interactive Contact UI
│   ├── Home.jsx          # Hero & Brand Identity
│   ├── Nav.jsx           # Full-screen Navigation Overlay
│   ├── Products.jsx      # Product Catalog List
│   ├── ProductDetail.jsx # Dynamic Individual Product View
│   └── Projects.jsx      # Visual Grid of Case Studies
├── App.jsx               # Central Router Configuration
└── index.css             # Tailwind base & Animations
```
---

## 🚀 Core Features

* **Advanced Dynamic Routing**: Seamlessly transitions between complex views without page reloads.
* **Deep Linking for Products**: Programmatic route generation for individual products via dynamic IDs.
* **State-Driven Navigation**: A sophisticated full-screen menu system that tracks active routes.
* **Premium Motion Design**: Built-in CSS animations and transitions for an "agency-grade" feel.
* **High-Contrast UI**: A carefully curated dark theme utilizing Tailwind's utility-first approach.

---

## 🛠️ Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **React** | Component Architecture (Vite) |
| **Tailwind CSS** | Styling & Responsive Layout |
| **React Router** | Dynamic SPA Routing |
| **Lucide React** | Minimalist Vector Iconography |

---

## 🔗 Routing Details

### 1. The Router Provider
The entire application is wrapped in `<BrowserRouter>` within `App.jsx`, providing the context for all navigation hooks and components.

### 2. Dynamic Product Routing
We implement **Dynamic Segment Matching**:
- **Path**: `/products/:productId`
- **Implementation**: Uses `useParams()` to extract the ID and filter content dynamically.

### 3. Navigation Awareness
The `Nav` component uses `useLocation()` to detect the current path and visually highlight the active link in the menu.

---

## 🏁 Getting Started

1.  **Installation**:
    ```bash
    npm install
    ```

2.  **Launch Development Server**:
    ```bash
    npm run dev
    ```

---

> Built with passion by ** Me @Dhruv_Aparnathi** ⚡
> Inspiring Site:- ** [](https://good-fella.com) **
