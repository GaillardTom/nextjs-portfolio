<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fleerob.io">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

<h1 align="center">My Portfolio</h1>

<p align="center">
  <strong>This is the source code for my personal portfolio website. It showcases my skills, experiences, and projects as well as my blogs and my HTB writeups. The website is built with Next.js, TypeScript, and Tailwind CSS.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/-Next.js-000?&logo=Next.js" alt="Next.js" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/-TypeScript-007ACC?&logo=TypeScript" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?&logo=Tailwind%20CSS" alt="Tailwind CSS" />
  </a>
</p>

## 🚀 Features

- 🎨 **Modern, responsive design**
- 🌓 **Dark/Light mode**
- 📜 **Smooth scrolling**
- 🎉 **Animated social icons**
- 📚 **Project showcase**
- 📝 **Blog & HTB writeups**


## 🛠️ Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/GaillardTom/nextjs-portfolio.git
cd nextjs-portfolio
npm install
npm run dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).


Open http://localhost:3000 with your browser to see the result.


## 📚 Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE guestbook (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);

CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```



## Contributing 
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License 
  This project is licensed under the terms of the MIT license.



