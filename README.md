# AI StudyBuddy

AI-powered learning assistant.

## Features
- JWT authentication
- bcrypt password hashing
- MongoDB + Mongoose
- Study material upload/storage
- Gemini AI summaries
- AI flashcards
- AI quizzes
- Personalized study plans
- REST API structure

## Setup
1. Install Node.js and MongoDB.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your MongoDB URI, JWT secret and Gemini API key.
6. Run `npm start`.

Server: `http://localhost:5000`

## Main API endpoints
POST `/api/auth/register`
POST `/api/auth/login`
POST `/api/material/upload`
POST `/api/material/:id/summarize`
POST `/api/ai/flashcards`
POST `/api/ai/quiz`
POST `/api/ai/study-plan`
