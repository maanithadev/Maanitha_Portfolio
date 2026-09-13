# Maanitha's Portfolio

A modern, highly interactive, and responsive personal portfolio built with React 19, Vite, and Tailwind CSS. The project focuses on providing a premium user experience with custom animations powered by GSAP.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19 and Vite for blazing fast development and optimized production builds.
- **Sleek Styling**: Utilizes the newly released Tailwind CSS v4 for utility-first responsive styling and custom aesthetics.
- **Advanced Animations**: Features complex scroll-triggered animations and timeline sequences using GSAP.
- **Interactive UI Components**: Includes a custom Preloader, dynamic Hero section, interactive Projects showcase (with details modal), Timeline, and a Skills section.
- **Serverless Contact Form**: Fully functional contact form with backend handling via Supabase for secure message delivery.
- **Premium Aesthetics**: Features a custom noise texture overlay, smooth transitions, and a curated dark/modern theme.

## 🛠️ Tech Stack

- **Frontend Core**: React 19, Vite
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP
- **Icons**: React Icons
- **Backend / Database**: Supabase

## ⚙️ Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** (v18.0.0 or higher recommended)

## 💻 Local Setup & Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <your-repo-url>
   cd maanitha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory based on the provided `.env.example` file and add your Supabase credentials to enable the Contact Form:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.
