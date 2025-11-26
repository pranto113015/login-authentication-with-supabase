# Login Authentication with Supabase

A modern React application that provides secure user authentication using Supabase as the backend authentication service. This project includes email/password login and Google OAuth integration.

## Project Overview

This is a authentication system built with React and Supabase. It demonstrates a production-ready authentication flow with protected routes and user session management.

### Key Features

- ✅ **Email/Password Authentication** - Traditional login with email and password
- ✅ **Google OAuth Integration** - One-click login with Google
- ✅ **Protected Routes** - Dashboard accessible only to authenticated users
- ✅ **Session Management** - Automatic session checking and persistence
- ✅ **User Profile Display** - Shows authenticated user information and avatar
- ✅ **Responsive Design** - Beautiful UI with Tailwind CSS
- ✅ **Modern Stack** - Built with React 19, Vite, and React Router Dom

## Project Structure

```
login-authentication-with-supabase/
├── src/
│   ├── pages/
│   │   ├── Login.jsx              # Login page with email/Google auth forms
│   │   └── Dashboard.jsx          # Protected dashboard for logged-in users
│   ├── components/
│   │   └── ProtectedRoute.jsx     # Route guard component for authentication
│   ├── App.jsx                    # Main app with routing configuration
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles
│   ├── supabaseClient.js          # Supabase client initialization
│   └── assets/                    # Static assets
├── public/                         # Public static files
├── package.json                    # Project dependencies
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
└── index.html                      # HTML entry point
```

## Technology Stack

### Frontend
- **React 19.2.0** - UI framework
- **React Router DOM 7.9.6** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### Authentication
- **@supabase/supabase-js 2.84.0** - Supabase client library

### Development Tools
- **ESLint 9.39.1** - Code linting
- **@vitejs/plugin-react 5.1.1** - Vite React plugin

## Component Details

### `src/supabaseClient.js`
Initializes the Supabase client using environment variables:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

### `src/pages/Login.jsx`
The login page component featuring:
- Email input field
- Password input field
- Login button with email/password authentication
- Google OAuth button
- Error message display
- Professional UI with gradient background

### `src/pages/Dashboard.jsx`
Protected dashboard displaying:
- User profile picture (from metadata or default)
- User full name and email
- Sidebar navigation menu
- Information cards (Profile, Messages, Notifications, Settings)
- Logout button

### `src/components/ProtectedRoute.jsx`
Higher-order component that:
- Checks user session status
- Shows loading message while checking authentication
- Redirects unauthenticated users to login page
- Renders protected component if user is authenticated

### `src/App.jsx`
Main application component with routing:
- `/` - Login page (public)
- `/dashboard` - Protected dashboard route

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pranto113015/login-authentication-with-supabase.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will start at `http://localhost:5173`



## Authentication Flow

### Login
1. User enters email and password on the login page
2. Credentials are sent to Supabase authentication service
3. On success, user is redirected to the dashboard
4. Session is stored in browser storage

### Google OAuth
1. User clicks "Continue with Google" button
2. Redirected to Google login page
3. After authorization, redirected back to dashboard
4. Session automatically managed by Supabase

### Protected Routes
1. When accessing `/dashboard`, `ProtectedRoute` checks session
2. If no session, user is redirected to login page
3. If session exists, dashboard component is rendered

## UI/UX Highlights

- **Modern Design** - Glassmorphism effects with backdrop blur
- **Responsive Layout** - Mobile and desktop optimized
- **Gradient Backgrounds** - Professional color schemes
- **Interactive Elements** - Hover effects and smooth transitions
- **User Information** - Profile display with metadata integration

## Configuration

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Enable email/password authentication in Auth settings
3. Enable Google OAuth provider and add your Google credentials
4. Get your project URL and anonymous key from project settings

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous public key |



## License

This project is open source and available under the MIT License.

## Author

Created as a modern authentication solution using Supabase and React.

