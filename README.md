# VK Marusia

Web application for viewing movie information with authorization, search, and favorites functionality.

## 🎯 Project Overview

This movie platform includes the following features:

**Home Page**:
Random movie suggestions with details and a "Top 10 Movies" block based on IMDb ratings.

**Genres Page**:
Displays movie genres as cards.

**Genre Details Page**:
Lists movies filtered by genre, sorted by rating, with infinite scroll for more results.

**Movie Details Page**:
Shows movie details, a trailer button, and a favorite toggle.

Unauthenticated users see a login/registration modal when interacting with favorites.

**User Account Page**:
Displays user info and favorite movies. Includes a logout option.

**Login/Registration Modal**:
Opens for unauthenticated users or via the "Login" button.
Includes login and registration forms with validation.

**Movie Search**:
Modal search by title with results.

## 🎨 Design

The application design mockups are available in Figma: [VK-Marusia](https://www.figma.com/design/8FW6Yt3ztcoYATQhqiy4qK/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-VK-%D0%9C%D0%B0%D1%80%D1%83%D1%81%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%B0-Vue%2FReact?node-id=0-1&p=f&t=OOedKPqLGvu7wLSD-0)

## ⚙️ Requirements

Node.js >= 18.0.0
npm >= 9.0.0

## 🔧 Technologies

1. Frontend Frameworks & Libraries

- **React**: Library for building user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **React Query (@tanstack/react-query)**: Data fetching and state management for server state.
- **React Hook Form**: Performant form management library.
- **React Modal**: Accessible modal dialogs for React.
- **React Player**: Media player for React applications.

2. TypeScript

- **TypeScript**: Strongly typed JavaScript.
- **ts-jest**: TypeScript preprocessor for Jest.

3. State Management & Validation

- **Zod**: Type-safe schema validation and parsing.

4. Build Tools

- **Vite**: Fast development server and build tool.

5. Styling

- **SASS**: CSS preprocessor for writing styles in SCSS syntax.

6. Testing

- **Jest**: JavaScript testing framework.
- **@testing-library/react**: Utilities for testing React components.
- **@testing-library/jest-dom**: Custom Jest matchers for testing DOM nodes.
- **@types/jest**: TypeScript support for Jest.

7. Code Quality

- **ESLint**: Linter for identifying and fixing code issues.

## 🛠️ Installation and Setup

1. **Clone the repository:**
   `git clone https://github.com/KateLeonchikova/VK-Marusia.git`

2. **Navigate to the Project Directory:**
   `cd vk-marusia`

3. **Install dependencies:**
   Ensure you have Node.js installed, then run the following command:
   `npm install`

4. **Run in development mode:**
   `npm run dev`

5. **Build project:**
   `npm run build`
   The build files will be generated in the dist directory.

   Run the Production Build: To preview the production build locally, run:

6. **Run the Production Build:**
   To preview the production build locally, run:
   `npm run preview`
   This will start a server to serve the built files from the dist directory.

## 📝 Scripts

`npm run dev` - run in development mode
`npm run build` - build project
`npm run lint` - check code
`npm run preview` - preview build
`npm run test` - run tests

## 🌐 API Documentation

You can find detailed documentation on how to work with the API at the following link: [CinemaGuide]https://cinemaguide.skillbox.cc/docs/
