
# Session Based Authentication

This is a **session-based authentication system** built using Express.js and MongoDB. It includes secure authentication, user management, and developer utilities.

## Features

- User authentication (via password or OTP)
- Secure session management with `express-session` and Redis
- User email and password update
- Developer tools for testing login methods and OTP generation
- Swagger documentation for API exploration

## Prerequisites

1. **Redis**: This project requires Redis for session storage. Make sure Redis is installed and running on your system.
   - [Install Redis](https://redis.io/docs/getting-started/installation/)

2. **Node.js**: Install Node.js (version 14 or higher).

3. **MongoDB**: Ensure MongoDB is installed and running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohsen104/Session-Based-Authentication.git
   cd Session-Based-Authentication
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   NODE_ENV
   PORT
   MONGO_URI
   COOKIE_PARSER_SECRET_KEY
   JWT_SECRET_KEY
   SESSION_SECRET_KEY
   ```

4. Start the application:

   - Development mode:

     ```bash
     npm run dev
     ```

   - Production mode:

     ```bash
     npm start
     ```

## API Documentation

The API is documented using Swagger and can be accessed at:

```
http://localhost:3000/api-docs
```

### Swagger Overview

- **Base URL**: `http://localhost:3000/api`
- **Tags**:
  - `User`: Routes for user authentication and management
  - `Dev`: Developer utilities

## Scripts

- `npm run dev`: Run the app in development mode using `nodemon`.
- `npm start`: Run the app in production mode.

## Dependencies

- **Production**:
  - `express`: Web framework
  - `express-session`: Session management
  - `connect-redis`: Redis session store
  - `mongoose`: MongoDB object modeling
  - `bcryptjs`: Password hashing
  - `helmet`: Security headers
  - `cors`: Cross-origin resource sharing

- **Development**:
  - `dotenv`: Environment variable management
  - `nodemon`: Development server reloader
  - `swagger-jsdoc`: API documentation generator
  - `swagger-ui-express`: Swagger UI for documentation
