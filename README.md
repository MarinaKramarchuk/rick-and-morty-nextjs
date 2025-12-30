## Disclaimer
This is a fan-made educational project based on the Rick and Morty API.
All rights to the original content belong to Adult Swim.

# 🛸 Rick and Morty Explorer (Next.js 15)

A modern, high-performance web application for exploring the "Rick and Morty" universe. Built with **Next.js 15**, **TypeScript**, and **CSS Modules**, featuring server-side data fetching and a mobile-first design.



## ✨ Features

* **⚡ Next.js 15 Performance**: Optimized with Server Components and advanced caching (`revalidate`).
* **🧬 Character Catalog**: Browse characters with detailed info and dynamic filtering by status, gender, and species.
* **🎬 Episodes & Locations**: Dedicated pages for episodes and locations showing all characters involved in each.
* **📱 Mobile-First Design**: Fully responsive UI that works perfectly on smartphones, tablets, and desktops.
* **🛠 Robust Error Handling**: Secure API fetching using `try/catch` blocks and safe data validation to prevent UI crashes.
* **🔍 Smart Filtering**: Sidebar and dropdown filters using `URLSearchParams` for a seamless user experience.

## 🛠 Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: CSS Modules (Custom Properties & Responsive Design)
* **API**: [The Rick and Morty API](https://rickandmortyapi.com/)
* **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MarinaKramarchuk/rick-and-morty-nextjs.git](https://github.com/MarinaKramarchuk/rick-and-morty-nextjs.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

* `/app` — Routing and Page components (using the new async params logic).
* `/components` — Reusable UI components (CharacterCard, Grid, SidebarFilter).
* `/lib/api` — Logic for API requests with standardized error handling.
* `/types` — TypeScript interfaces for Characters, Episodes, and Locations.

## 📝 Development Highlights

- **Async Params**: Implemented the new Next.js 15 requirement for unwrapping `params` and `searchParams`.
- **LCP Optimization**: Used the `priority` property in `next/image` for "above the fold" images to improve Core Web Vitals.
- **Sticky Sidebar**: Implemented a desktop-only sticky sidebar for a better UX when browsing long lists.

---
Created with ❤️ by Marina.