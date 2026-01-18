# How to Run the Matcha Tasting Log Project

## Prerequisites
- Node.js installed
- PostgreSQL running on WSL (port 5433)
- VS Code with REST Client extension (for API testing)

## Setup & Installation

1. **Navigate to project root directory:**
   ```bash
   cd 'c:/Users/patta/Documents/cs326/mini project/matcha-log'
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Start PostgreSQL database:**
   - Ensure WSL PostgreSQL is running on port 5433
   - Database: `matcha_log`
   - Username: `postgres`
   - Password: `postgres123`

## Running the Application

**IMPORTANT:** Run all commands from the project root directory, not from backend or frontend subdirectories.

### Start Frontend Server:
```bash
npm run start:frontend
```
Frontend runs on: `http://localhost:5173/`

### Start Backend Server (in another terminal):
```bash
npm run start:backend
```
Backend runs on: `http://localhost:3000`

## Alternative Method (Manual)

If you prefer to start each server manually:

1. **Backend:**
   ```bash
   cd backend
   npm run start:dev
   ```

2. **Frontend (in another terminal):**
   ```bash
   cd frontend
   npm run dev
   ```

*Note: If development server has issues, use production build:*
```bash
cd frontend
npm run build
npx vite preview --port 3002
```

## Testing the API

Open `api-tests.http` in VS Code and run the HTTP requests to test all CRUD operations.

## Troubleshooting

- **Wrong directory error:** Make sure you're in the project root directory
- **Frontend won't start:** Try `cd frontend && npm run build && npx vite preview --port 3002`
- **Backend won't connect to DB:** Check WSL PostgreSQL is running on correct port
- **Kill hanging processes:** `taskkill //f //im node.exe`
- **Check available scripts:** `npm run` (from project root)
