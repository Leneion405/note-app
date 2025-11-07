#  Note App

A full-stack note-taking application built with React, Express, and MongoDB. Create, read, update, and delete notes with a beautiful, responsive UI.

## � Live Demo

**Frontend:** http://localhost:5173  
**Backend API:** http://localhost:5000

##  Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Author](#-author)

##  Features

-  User Authentication (Register/Login with JWT)
-  Create, Read, Update, Delete (CRUD) Notes
-  Secure JWT Token-based Authorization
-  Beautiful, Responsive UI with Tailwind CSS
-  Real-time Form Validation (React Hook Form)
-  Toast Notifications (React Toastify)
-  Confirmation Dialogs (SweetAlert2)
-  Professional Icon Library (React Icons)
-  Fast Development with Vite
-  Full TypeScript Support

##  Tech Stack

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

##  Project Structure

\\\
note-app/
 note-app-frontend/
    src/
       components/
          Header.tsx
          Input.tsx
          Button.tsx
          Card.tsx
          NoteCard.tsx
          FormCard.tsx
          PrivateRoute.tsx
          ConfirmDialog.tsx
       pages/
          Login.tsx
          Register.tsx
          Dashboard.tsx
       utils/
          api.ts
          toast.ts
          confirmDialog.ts
       types/
          index.ts
       App.tsx
       main.tsx
       index.css
    vite.config.ts
    tsconfig.json
    package.json
    tailwind.config.js
 note-app-backend/
    src/
       config/
          db.ts
       routes/
          auth.ts
          notes.ts
       models/
          User.ts
          Note.ts
       middleware/
          auth.ts
       types/
          index.ts
       server.ts
    .env
    tsconfig.json
    package.json
    nodemon.json
 .gitignore
 README.md
\\\

##  Getting Started

### Prerequisites

- Node.js v16+ ([Download](https://nodejs.org/))
- MongoDB ([Local](https://www.mongodb.com/try/download/community) or [Cloud](https://www.mongodb.com/cloud/atlas))
- Git
- npm or yarn

### Clone Repository

\\\ash
git clone https://github.com/Leneion405/note-app.git
cd note-app
\\\

## Backend Setup

### 1. Navigate to Backend

\\\ash
cd note-app-backend
\\\

### 2. Install Dependencies

\\\ash
npm install
\\\

### 3. Create Environment File

Create \.env\ file in \
ote-app-backend/\:

\\\env
MONGODB_URI=mongodb://localhost:27017/notes-app
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
NODE_ENV=development
\\\

**MongoDB Connection Options:**

**Local MongoDB:**
\\\
MONGODB_URI=mongodb://localhost:27017/notes-app
\\\

**MongoDB Atlas (Cloud):**
\\\
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-app?retryWrites=true&w=majority
\\\

### 4. Start Backend Server

\\\ash
npm run dev:watch
\\\

**Expected output:**
\\\
[nodemon] starting \	s-node src/server.ts\
Server running on port 5000
MongoDB Connected
\\\

## Frontend Setup

### 1. Navigate to Frontend

\\\ash
cd note-app-frontend
\\\

### 2. Install Dependencies

\\\ash
npm install
\\\

### 3. Start Development Server

\\\ash
npm run dev
\\\

**Expected output:**
\\\
VITE v7.2.1 ready in XXX ms

  Local:   http://localhost:5173/
  Network: use --host to expose
\\\

Open your browser and go to: [**http://localhost:5173**](http://localhost:5173)

##  Usage

### User Registration

1. Navigate to \/register\
2. Enter your email and password
3. Click "Create Account"
4. You'll be redirected to the Dashboard

### Create a Note

1. Enter a title in the "Title" field
2. Write your note content in the "Content" field
3. Click the "Create Note" button
4. Your note will appear in the notes list

### Edit a Note

1. Click the "Edit" button on any note card
2. The form will populate with your note's data
3. Make your changes
4. Click "Update Note"
5. Changes are saved immediately

### Delete a Note

1. Click the "Delete" button on any note card
2. A confirmation dialog will appear
3. Click "Delete" to confirm
4. Your note will be removed

### Logout

1. Click the "Logout" button in the top-right corner
2. You'll be redirected to the login page

##  Troubleshooting

### MongoDB Connection Error

Ensure MongoDB is running locally or check your Atlas connection string. Verify \.env\ has correct \MONGODB_URI\.

### Port Already in Use

**Windows - Find and kill process on port 5000:**

\\\ash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
\\\

**Or change PORT in .env:**

\\\env
PORT=5001
\\\

### CORS Errors

Backend already has CORS configured. Ensure frontend and backend URLs match.

### npm Install Issues

\\\ash
rm -rf node_modules package-lock.json
npm install
\\\

##  License

This project is licensed under the MIT License.

##  Author

**Kaung Thanlwin Kyaw**
- GitHub: [@Leneion405](https://github.com/Leneion405)
- Email: kaungthanlwinkyaw@gmail.com

---

Made with  Happy Note-Taking! 
