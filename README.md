# KAGE — Digital Atelier

> A minimal, dark, and luxurious digital experience inspired by Japanese automotive culture.

KAGE is a single-page automotive landing page built with **HTML, CSS, and Vanilla JavaScript**.

The project focuses on clean visual design, modular architecture, reusable components, responsive layouts, and maintainable front-end code.

---

## ✨ Overview

KAGE is designed around a dark and luxurious visual identity inspired by Japanese automotive culture.

The interface combines:

- Minimal dark UI
- Japanese-inspired typography
- Black & gold visual language
- Cinematic automotive imagery
- Glassmorphism elements
- Responsive layout
- Modular JavaScript architecture
- Design tokens with CSS variables
- Component-based HTML structure

The main goal of the project is not only visual presentation, but also demonstrating how a small vanilla JavaScript project can be organized using a scalable and maintainable architecture.

---

## 🚀 Features

- Responsive single-page layout
- Modular Header component
- Modular Hero component
- Mobile navigation menu
- Scroll-based header behavior
- Reusable CSS design tokens
- Responsive container system
- Component-oriented project structure
- Semantic HTML structure
- Custom typography system
- Dark luxury visual design
- Japanese-inspired UI direction

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)

### Design

- CSS Custom Properties
- Responsive Design
- Flexbox
- CSS Grid
- Glassmorphism
- CSS Transitions & Animations

### Typography

- Noto Sans JP
- Zen Kaku Gothic New

---

## 📁 Project Structure

```text
KAGE-refactored/
│
├── assets/
│   ├── background-hero.png
│   └── heroCar.png
│
└── src/
    │
    ├── components/
    │   │
    │   ├── Header/
    │   │   ├── Header.css
    │   │   ├── Header.html
    │   │   └── index.js
    │   │
    │   └── Hero/
    │       ├── Hero.css
    │       ├── Hero.html
    │       └── index.js
    │
    ├── css/
    │   │
    │   ├── base/
    │   │   ├── base.css
    │   │   └── reset.css
    │   │
    │   ├── components/
    │   │
    │   ├── layout/
    │   │   └── container.css
    │   │
    │   ├── tokens/
    │   │   ├── colors.css
    │   │   ├── motion.css
    │   │   ├── radius.css
    │   │   ├── spacing.css
    │   │   └── typography.css
    │   │
    │   └── main.css
    │
    ├── js/
    │   ├── main.js
    │   │
    │   └── module/
    │       ├── header-scrolled.js
    │       └── mobile-menu.js
    │
    └── index.html