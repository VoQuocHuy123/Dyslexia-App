# Dyslexia Reading App Dashboard

This is a code bundle for Dyslexia Reading App Dashboard. The original project is available at https://www.figma.com/design/NULZAWsjHBu9YH4XXCPXZJ/Dyslexia-Reading-App-Dashboard.

## Project Structure

- `src/` - Frontend React application
- `server/` - Backend API server (Express + TypeScript)

## Prerequisites

- Node.js >= 20.19.0
- npm >= 10.0.0

## Running the Application

### Frontend

```bash
# Install dependencies
npm i

# Start development server
npm run dev
```

Frontend will run on `http://localhost:3000`

### Backend API

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend will run on `http://localhost:4000`

## API Documentation

See [server/README.md](./server/README.md) for detailed API documentation.

## Features

- ✅ User Authentication (Register/Login)
- ✅ Settings (Audio & Display)
- ✅ Library (Word Management)
- ✅ Reading Materials
- ✅ Speaking Practice
- ✅ OCR Import
- ✅ Session Tracking
- ✅ Dashboard Metrics

## Note

- Backend currently uses in-memory storage (no database)
- Data will be lost on server restart
- For production, integrate a database (Prisma + SQLite/PostgreSQL)
