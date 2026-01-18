# 🍵 Matcha Tasting Log

A full-stack web application for logging and tracking matcha tea tastings and tasting notes.

## Overview

**Matcha Tasting Log** is a complete full-stack application built with modern web technologies. Users can create matcha entries, add detailed tasting notes, and manage their tea collection through an intuitive web interface.

## Tech Stack

- **Backend:** NestJS (TypeScript), RESTful API
- **Frontend:** React with Vite
- **Database:** PostgreSQL with TypeORM ORM
- **Additional:** Class validation, custom guards, and pipes

## Features

- **Matcha Management:** Create, read, update, and delete matcha entries
- **Tasting Notes:** Track detailed notes for each matcha tasting experience
- **RESTful API:** Full CRUD operations with proper validation
- **Real-time Frontend:** Dynamic React components with state management

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL running on port 5433
  - Database: `matcha_log`
  - User: `postgres`
  - Password: `postgres123`

### Installation

1. Install all dependencies:
   ```bash
   npm run install:all
   ```

### Running the Application

Run both servers from the project root:

**Terminal 1 - Backend:**
```bash
npm run start:backend
```
Backend runs on `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
npm run start:frontend
```
Frontend runs on `http://localhost:5173`

## Project Structure

```
backend/
  src/
    matcha/              # Matcha module (service, controller, DTOs)
    tasting-notes/       # Tasting notes module (service, controller, DTOs)
    entities/            # Database entities (Matcha, TastingNote)
    guards/              # Validation guards
    pipes/               # Custom validation pipes
frontend/
  src/
    components/          # React components (MatchaForm, MatchaList, etc.)
    App.jsx              # Main application component
```

## API Testing

Open `api-tests.http` in VS Code with the REST Client extension to test all endpoints.

## Database Schema

The application uses two main entities:
- **Matcha:** Core tea product information
- **TastingNote:** Detailed notes linked to each matcha tasting

See `database-er-diagram.md` for the complete schema diagram.

## License

MIT


