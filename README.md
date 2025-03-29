# Budget App Web Frontend

This repository contains the web frontend application for the Budget/Envelope application.

## Overview

The Budget App web frontend provides a user interface for:
- User authentication and account management
- Budget creation and management
- Transaction tracking and categorization
- Envelope/budget allocation
- Financial insights and reporting

## Technology Stack

- React.js
- TypeScript
- React Router for navigation
- Redux Toolkit for state management
- Tailwind CSS for styling
- Axios for API requests
- Jest and React Testing Library for testing

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Local Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/jburchel/budget-app-frontend-web.git
   cd budget-app-frontend-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory (see `.env.example` for required variables)

4. Start the development server:
   ```
   npm start
   ```

The application will be available at http://localhost:3001.

## Available Scripts

- `npm start` - Starts the development server
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm lint` - Runs ESLint
- `npm lint:fix` - Fixes ESLint errors where possible
- `npm format` - Formats code with Prettier

## Contributing

Please follow our [Branching Strategy](docs/BRANCHING_STRATEGY.md) when contributing to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.