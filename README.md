# Authentication API [on development]

A robust and secure authentication API built with Express.js, PostgreSQL, and Prisma ORM. This API provides comprehensive authentication and user management functionality including both traditional email-password and social authentication methods.

## Features

- **Multiple Authentication Methods**

  - Email/Password authentication
  - Social authentication (Google)
  - Passwordless authentication via email links
  - Session-based authentication
  - JWT-based authentication

- **Security Features**

  - Rate limiting for sensitive routes
  - Password hashing with bcrypt
  - Secure session management
  - JWT token management
  - Email verification
  - Two-factor authentication support

- **User Management**

  - User registration and login
  - Password reset functionality
  - Email verification
  - Profile updates
  - Session management
  - Account linking
  - Profile image upload

- **Session Management**
  - Multiple session support
  - Session listing
  - Individual session revocation
  - Bulk session revocation
  - Session expiry management

## Tech Stack

- Node.js/Express.js
- PostgreSQL
- Prisma ORM
- Passport.js for social authentication
- AWS S3 for image storage
- Nodemailer for email services
- Express-session for session management
- Jose for JWT handling

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- AWS Account (for S3 image storage)
- SMTP Server access (for email services)

## Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# JWT
JWT_SECRET="your-secret-key"
SESSION_SECRET="your-session-secret"

# Email (SMTP)
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_USER="your-email@example.com"
SMTP_PASS="your-password"

# AWS S3
S3_BUCKET="your-bucket-name"
S3_ACCESS_KEY="your-access-key"
S3_SECRET_KEY="your-secret-key"

# Social Auth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App
BASE_URL="http://localhost:3000"
PORT=3000
```

5. Run Prisma migrations:

```bash
npx prisma migrate dev
```

6. Start the server:

```bash
npm run dev # for development
npm start   # for production
```

## API Routes

### Authentication

- `POST /auth/sign-up/email` - Register with email/password
- `POST /auth/sign-in/email` - Login with email/password
- `POST /auth/sign-in/social` - Social authentication
- `POST /auth/sign-out` - Sign out
- `GET /auth/get-session` - Get current session

### Password Management

- `POST /auth/forget-password` - Request password reset
- `POST /auth/reset-password` - Reset password
- `POST /auth/change-password` - Change password

### Email Management

- `GET /auth/verify-email` - Verify email address
- `POST /auth/send-verification-email` - Resend verification email
- `POST /auth/change-email` - Change email address

### Session Management

- `GET /auth/list-sessions` - List all active sessions
- `POST /auth/revoke-session` - Revoke specific session
- `POST /auth/revoke-sessions` - Revoke all sessions
- `POST /auth/revoke-other-sessions` - Revoke all other sessions

### Account Management

- `POST /auth/update-user` - Update user profile
- `POST /auth/delete-user` - Delete user account
- `POST /auth/link-social` - Link social account
- `GET /auth/list-accounts` - List linked accounts

## Rate Limiting

The API implements rate limiting to prevent abuse:

- Auth routes: 5 requests per 15 minutes
- General routes: 100 requests per hour

## Error Handling

The API returns consistent error responses in the following format:

```json
{
  "error": "Error message here"
}
```

Common HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error

## Security Best Practices

1. **Password Storage**

   - Passwords are hashed using bcrypt
   - Salt rounds are configurable

2. **Session Security**

   - Secure session cookies in production
   - Session expiry
   - Database-backed session storage

3. **JWT Security**

   - Short-lived tokens
   - Secure token transmission
   - Token refresh mechanism

4. **API Security**
   - Rate limiting
   - Input validation
   - CORS configuration
   - Helmet middleware for HTTP headers
