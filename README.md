# Movie Watchlist Backend

A backend REST API for managing a personal movie watchlist. Users can create accounts, log in, and manage their lists of movies they want to watch, are currently watching, or have completed.

## Features

- **User Authentication**: Secure Signup and Login using JWT (JSON Web Tokens).
- **Watchlist Management**: Add, update status, and remove movies from your list.
- **Request Validation**: Middleware to ensure data integrity before reaching controllers.
- **Database Integration**: Powered by Prisma ORM for seamless database management.

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework for the API
- **Prisma**: ORM for database modeling and migrations
- **JWT**: For secure user authentication
- **PostgreSQL**: Database used for storing application data

## Project Structure

```text
├── prisma/               # Prisma schema and database migrations
├── src/
│   ├── config/           # Database and general configurations
│   ├── controllers/      # Logic for handling API requests
│   ├── middleware/       # Auth and validation middleware
│   ├── routes/           # API endpoint definitions
│   ├── utils/            # Helper functions (e.g., token generation)
│   ├── validators/       # Input validation schemas
│   └── server.js         # Entry point of the application
└── package.json          # Dependencies and scripts
```

## API Endpoints

### Auth Routes
- POST `/api/auth/register` – Register a new user  
- POST `/api/auth/login` – Login and receive a JWT  

### Watchlist Routes
- POST `/api/watchlist` – Add a movie  
- PUT `/api/watchlist/:id` – Update status  
- DELETE `/api/watchlist/:id` – Remove a movie

## 
🌐 **Live API**: [https://movie-watchlist-backend-hjxr.onrender.com](https://movie-watchlist-backend-hjxr.onrender.com)
