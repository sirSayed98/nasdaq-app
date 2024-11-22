# Nasdaq


## Table of Contents
1. [Project Overview](#project-overview)
2. [How to Run the Application](#how-to-run-the-application)
3. [How to Run Unit Tests](#how-to-run-unit-tests)
4. [Technical Approach and Architectural Decisions](#technical-approach-and-architectural-decisions)
   - [1. Tech Stack](#1-tech-stack)
   - [2. Folder Structure](#2-folder-structure)
   - [3. State Management & Data Flow](#3-state-management--data-flow)
   - [4. UI/UX Design](#4-uiux-design)
   - [5. Scalability and Maintainability](#5-scalability-and-maintainability)


## Project Overview

This project is a web application designed to provide detailed information about the latest market data from all US stock exchanges.

## How to Run the Application

To run the application, follow these steps:

1. **Install Dependencies**: Ensure you have Node.js installed. Navigate to the project directory and run the following command to install all dependencies:

   ```bash
   npm install
   ```

2. **Start the Development Server**: Run the following command to start the development server using Vite:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## How to Run Unit Tests

This project uses vitest for unit testing. To run the tests, execute the following command:

```bash
npm run test
```

# Technical Approach and Architectural Decisions

The Formula One Challenge project is a React-based application. The core technical stack includes React for building the UI, Context API for state management, and Vite for an optimized development experience.

## 1. Tech Stack

- **React**: Chosen for its component-driven architecture, enabling reusable components for various parts of the application. The project follows a functional programming paradigm using hooks and the Context API for state management.
- **Vite**: Used for its fast development environment, with built-in support for hot module replacement (HMR).
- **MUI (Material UI)**: MUI components are used for building responsive and accessible UI elements.
- **Axios**: Utilized for API requests to the Ergast API.
- **Vitest & React Testing Library**: The application is unit tested using vitest.
- **ESLint & Prettier**: ESLint is configured for static code analysis based on Airbnb style guide. 


## 2. Folder Structure

The project is organized to maintain a clean and scalable architecture. Features are encapsulated in their respective directories within `src`, which include:

- **components**: Contains reusable UI components such as CardListView, ControlBar, and Error. These components are designed to be modular, promoting reusability across different views.
- **context**: Implements the Context API to manage and share state across the application. Separate context files are used for handling the state of ticker.
- **pages**: Contains page-level components that correspond to different routes in the application.

## 3. State Management & Data Flow

- **The Context API** is used for global state management, ensuring that data such as ticker are accessible across the application.
- **Reducers** handle actions dispatched from components, centralizing business logic and making the state predictable.
- **Axios** is used within the context to fetch data asynchronously from the Polygon API and the state is updated upon successful data retrieval.

## 4. UI/UX Design

- **MUI** components are the primary building blocks for the UI, providing pre-built, customizable components like buttons, tables, and cards, which contribute to a consistent and polished design.


## 5. Scalability and Maintainability

- The application is structured to easily accommodate new features. Each major feature (e.g. Ticker) is contained within its folder, with components, contexts, and reducers specific to that feature.

- The use of reusable components and a clear separation between presentation and business logic.

## 6. Testing 

- **vitest** is used to write unit tests to ensure that components and functions behave as expected.


## Project Folder Structure

Below is the folder structure of the project:

```
.
├── eslint.config.js
├── folder-structure.txt
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── nasdaq.png
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── common
│   │   └── Ticker
│   ├── context
│   │   ├── constants.ts
│   │   └── ticker
│   ├── main.css
│   ├── main.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Not-Found.tsx
│   │   └── Splash.tsx
│   ├── vite-env.d.ts
│   └── vitest.setup.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
