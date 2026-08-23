# KAGE — Digital Atelier

Minimal, dark and immersive one-page digital studio website built with semantic HTML, modular CSS and vanilla JavaScript.

## Structure

```text
KAGE/
├── assets/
├── components/
│   ├── layout/
│   └── sections/
├── src/
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── main.css
│   └── js/
│       ├── components/
│       ├── utils/
│       └── main.js
├── .gitignore
├── index.html
└── README.md
```

## Run

Use VS Code Live Server or another local HTTP server because components are loaded with `fetch()`.

## Git

```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize KAGE portfolio"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```
