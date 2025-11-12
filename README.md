# 🎬 AstraWatch – Movie Recommendation App

**ProDev Frontend Engineering – Project Nexus (Capstone Project)**

AstraWatch is a movie recommendation platform designed to help users discover trending, top-rated, and personalized movie suggestions.  
It demonstrates the practical application of **Next.js**, **TypeScript**, and **Styled Components**, integrating a public movie API to deliver an engaging, fast, and responsive user experience.

---

## Project Overview

This project is built as part of **Project Nexus**, the final capstone of the **ProDev Frontend Engineering Program**.  
The goal is to apply real-world frontend development concepts, showcasing creativity, scalability, and technical excellence.

AstraWatch allows users to:

- Browse trending and recommended movies.
- View detailed movie information.
- Save favorite movies locally.
- Enjoy a responsive, clean, and interactive user interface.

---

## Objectives

- Apply frontend technologies (Next.js, TypeScript, Styled Components).
- Build a dynamic, responsive, and high-performing movie app.
- Integrate with an external movie API to display real-time data.
- Demonstrate proficiency in code quality, design, and user experience.

---

## Features

### 1️ **API Integration**

- Uses the [TMDb API](https://developer.themoviedb.org/docs) to fetch trending and top-rated movies.
- Implements proper loading and error-handling states.

### 2️ **Dynamic Routing**

- Utilizes **Next.js dynamic routing** for movie detail pages.
- Optimized navigation and SEO-friendly routes.

### 3️ **Favorites Management**

- Users can **save and view** favorite movies using local storage.
- Favorites persist between sessions.

### 4️ **Responsive & Animated UI**

- Built with **Styled Components** for reusable and scalable styling.
- Responsive layout for all screen sizes (mobile, tablet, desktop).
- Smooth hover effects and animations for better UX.

### 5️ **Performance Optimization**

- Lazy loading of movie images and pages.
- Caching and efficient API calls.
- Optimized for speed and accessibility (tested with Google Lighthouse).

---

## Tech Stack

| Category            | Technology                      |
| ------------------- | ------------------------------- |
| **Framework**       | Next.js (React)                 |
| **Language**        | TypeScript                      |
| **Styling**         | Styled Components / TailwindCSS |
| **API**             | TMDb (The Movie Database API)   |
| **Version Control** | Git & GitHub                    |
| **Deployment**      | Vercel                          |
| **Design Tool**     | Figma                           |

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v18 or later)
- [Git](https://git-scm.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/dennisrua/alx-project-nexus

# 2. Navigate to the project directory
cd alx-project-nexus

# 3. Install dependencies
npm install

# 4. Add your TMDb API key
Create a `.env.local` file and add:
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

# 5. Run the development server
npm run dev

# 6. Open in your browser
http://localhost:3000
```
