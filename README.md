<div align="center">

<h3 align="center">My Wedding Website</h3>

  <p align="center">
    A wedding website built with Next.js to share information and collect RSVPs.
    <br />
     <a href="https://github.com/jimanguba/wedding">github.com/jimanguba/wedding</a>
  </p>
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project is a wedding website built using Next.js, designed to provide information about the wedding event and collect RSVPs from invited guests. It features several sections including Home, Venue, FAQ, Team (Bridal Party), Registry, and RSVP. The website is styled with Tailwind CSS and uses framer-motion for smooth transitions.

### Key Features

- **Informational Sections:** Dedicated sections for Home, Venue, FAQ, Team, and Registry providing essential details about the wedding.
- **RSVP Functionality:** A form for guests to RSVP, integrated with SheetDB to store responses.
- **Responsive Design:** Built with Tailwind CSS for a responsive layout that adapts to different screen sizes.
- **Smooth Scrolling:** Implements smooth scrolling and snap-scrolling for a seamless user experience.
- **Animated Navigation:** A fixed navigation bar with animated indicators for the active section.
- **Confetti Effect:** Celebratory confetti animation upon successful RSVP submission.

## Architecture

The project is structured as a Next.js application with the following key components:

- **Frontend:** Built with React, Next.js, and Tailwind CSS.
  - `app/`: Contains the main application routes and layout.
  - `components/`: Houses reusable React components for each section of the website.
- **Styling:** Tailwind CSS is used for styling, with custom configurations in `tailwind.config.js` and `postcss.config.mjs`.
- **State Management:** React's `useState` hook is used for managing component state, particularly in the `RSVPSection`.
- **Data Handling:** The `RSVPSection` interacts with SheetDB to store and update RSVP information.
- **External Libraries:**
  - `framer-motion`: For animations and transitions.
  - `canvas-confetti`: For the confetti effect upon RSVP submission.
  - `@heroicons/react`: For icons.

## Getting Started

To get the project running locally, follow these steps:

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or pnpm or bun

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jimanguba/wedding.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd wedding
   ```
3. **Install dependencies using npm:**
   ```sh
   npm install
   ```
   or using yarn:
   ```sh
   yarn install
   ```
   or using pnpm:
   ```sh
   pnpm install
   ```
   or using bun:
   ```sh
   bun install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
   or using yarn:
   ```sh
   yarn dev
   ```
   or using pnpm:
   ```sh
   pnpm dev
   ```
    or using bun:
   ```sh
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

