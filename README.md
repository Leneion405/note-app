# Note App

A full-stack note-taking application built with React, Express, and MongoDB.

## Features

- User Authentication (Register/Login with JWT)
- Create, Read, Update, Delete Notes
- Beautiful Responsive UI
- Real-time Form Validation
- Toast Notifications
- Confirmation Dialogs
- Professional Icons
- Fast Development with Vite
- Full TypeScript Support

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## Getting Started

### Prerequisites
- Node.js v16+
- MongoDB
- Git
- npm

### Backend Setup

1. Navigate to backend folder:
   cd note-app-backend

2. Install dependencies:
   npm install

3. Create .env file with:
   MONGODB_URI=mongodb://localhost:27017/notes-app
   JWT_SECRET=your_secret_key
   PORT=5000
   NODE_ENV=development

4. Start backend:
   npm run dev:watch

### Frontend Setup

1. Navigate to frontend folder:
   cd note-app-frontend

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

4. Open browser at http://localhost:5173

## Project Structure

note-app/
├── note-app-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── types/
│   ├── package.json
│   └── vite.config.ts
├── note-app-backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── models/
│   │   └── middleware/
│   ├── package.json
│   └── .env
└── README.md

## Usage

1. Register a new account
2. Login with your credentials
3. Create, edit, and delete notes
4. Logout when done

## License

MIT License

## Author

Kaung Thanlwin Kyaw
GitHub: @Leneion405
Email: kaungthanlwinkyaw@gmail.com
