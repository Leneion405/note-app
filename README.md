# 📝 Note App

A full-stack note-taking application built with React, Express, and MongoDB. Create, read, update, and delete notes with a beautiful, responsive UI.

## 🚀 Live Demo

**Frontend:** http://localhost:5173  
**Backend API:** http://localhost:5000

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [License](#-license)

## ✨ Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ Create, Read, Update, Delete (CRUD) Notes
- ✅ Secure JWT Token-based Authorization
- ✅ Beautiful, Responsive UI with Tailwind CSS
- ✅ Real-time Form Validation (React Hook Form)
- ✅ Toast Notifications (React Toastify)
- ✅ Confirmation Dialogs (SweetAlert2)
- ✅ Professional Icon Library (React Icons)
- ✅ Fast Development with Vite
- ✅ Full TypeScript Support

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Fast Build Tool & Dev Server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Hook Form** - Form Handling
- **React Icons** - Icon Library
- **React Toastify** - Notifications
- **SweetAlert2** - Confirmation Dialogs
- **Axios** - HTTP Client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **TypeScript** - Type Safety
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password Hashing
- **dotenv** - Environment Variables

## 📁 Project Structure

note-app/
├── note-app-frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header.tsx
│ │ │ ├── Input.tsx
│ │ │ ├── Button.tsx
│ │ │ ├── Card.tsx
│ │ │ ├── NoteCard.tsx
│ │ │ ├── FormCard.tsx
│ │ │ ├── PrivateRoute.tsx
│ │ │ └── ConfirmDialog.tsx
│ │ ├── pages/
│ │ │ ├── Login.tsx
│ │ │ ├── Register.tsx
│ │ │ └── Dashboard.tsx
│ │ ├── utils/
│ │ │ ├── api.ts
│ │ │ ├── toast.ts
│ │ │ └── confirmDialog.ts
│ │ ├── types/
│ │ │ └── index.ts
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── index.css
│ ├── vite.config.ts
│ ├── tsconfig.json
│ ├── package.json
│ └── tailwind.config.js
│
├── note-app-backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.ts
│ │ ├── routes/
│ │ │ ├── auth.ts
│ │ │ └── notes.ts
│ │ ├── models/
│ │ │ ├── User.ts
│ │ │ └── Note.ts
│ │ ├── middleware/
│ │ │ └── auth.ts
│ │ ├── types/
│ │ │ └── index.ts
│ │ └── server.ts
│ ├── .env
│ ├── tsconfig.json
│ ├── package.json
│ └── nodemon.json
│
├── .gitignore
└── README.md


## 🚀 Getting Started

### Prerequisites

- Node.js v16+ ([Download](https://nodejs.org/))
- MongoDB ([Local](https://www.mongodb.com/try/download/community) or [Cloud](https://www.mongodb.com/cloud/atlas))
- Git
- npm or yarn

### Clone Repository
git clone https://github.com/Leneion405/note-app.git
cd note-app

## Backend Setup

### 1. Navigate to Backend

cd note-app-backend


### 2. Install Dependencies

npm install


### 3. Create Environment File

Create `.env` file in `note-app-backend/`:

MONGODB_URI=mongodb://localhost:27017/notes-app
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
NODE_ENV=development


**MongoDB Connection Options:**

**Local MongoDB:**
MONGODB_URI=mongodb://localhost:27017/notes-app


**MongoDB Atlas (Cloud):**
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-app?retryWrites=true&w=majority


### 4. Start Backend Server

npm run dev:watch


Expected output:
[nodemon] starting ts-node src/server.ts
Server running on port 5000
MongoDB Connected


## Frontend Setup

### 1. Navigate to Frontend

cd note-app-frontend


### 2. Install Dependencies

npm install


### 3. Start Development Server

npm run dev


Expected output:
VITE v7.2.1 ready in XXX ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Kaung Thanlwin Kyaw**
- GitHub: [@Leneion405](https://github.com/Leneion405)
- Email: kaungthanlwinkyaw@gmail.com