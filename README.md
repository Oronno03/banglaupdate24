# Bangla Update 24

A modern Bangla news portal that collects and displays news from **BBC News** through a dedicated API.

## Live Demo

**Live Website:** https://banglaupdate24.vercel.app/

---

## About the Project

**Bangla Update 24** is a news portal designed to provide users with a simple and organized way to browse the latest news.

The project uses an external API that scrapes news data from **BBC News** and makes that information available to the frontend. The website then organizes the fetched news into different sections and categories for easier navigation.

Users can browse the main/latest news, explore section-wise news, and access category-specific news directly from the navigation menu.

The platform also includes authentication, allowing users to **sign up** and **sign in** to the website.

---

## Features

* Latest/main news displayed on the homepage
* Section-wise news organization
* Category-wise news browsing
* Navigation links for different news categories
* News data fetched through a dedicated API
* BBC News used as the source for scraped news data
* User registration
* User login
* Google authentication
* Email/password authentication
* Responsive and clean user interface
* Custom 404 / Not Found page

---

## How It Works

The project consists of two main parts:

### News API

A external API scrapes news data from **BBC News** and provides the processed data to the frontend.

```text
BBC News
    ↓
News Scraping API
    ↓
Processed News Data
    ↓
Bangla Update 24
    ↓
Users
```

### Frontend

The frontend consumes the API and displays the news in different sections.

```text
API
 ↓
Homepage
 ├── Main News
 ├── Section-wise News
 └── Category-wise News
```

Users can navigate between different categories through the website's navigation menu.

---

## Authentication

Bangla Update 24 supports user authentication using:

* Email and password
* Google OAuth

Users can:

* Create an account
* Sign in with email and password
* Sign in with Google
* Log out of their account

---

## News Navigation

The website provides multiple ways to discover news.

### Main News

The homepage displays the primary/latest news selected from the available BBC News data.

### Section-wise News

News is organized into different sections so users can browse related stories together.

### Category-wise News

Users can access specific news categories through the navigation bar.

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Authentication

* Better Auth
* Email & Password Authentication
* Google OAuth


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Oronno03/banglaupdate24
```

### 2. Navigate to the Project

```bash
cd bangla-update-24
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

Or using yarn:

```bash
yarn install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
# Better Auth
BETTER_AUTH_SECRET=YOUR_BETTER_AUTH_SECRET
BETTER_AUTH_URL=YOUR_BETTER_AUTH_URL

# Google OAuth
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

# MongoDB
MONGODB_URL=YOUR_MONGODB_URL
```

Add any additional environment variables required by your API or authentication configuration.

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Authentication Flow

### Email & Password

```text
User
 ↓
Sign Up
 ↓
Better Auth
 ↓
Account Created
 ↓
User Can Sign In
```

### Google

```text
User
 ↓
Continue with Google
 ↓
Google OAuth
 ↓
Better Auth
 ↓
Authenticated User
```

---

## Data Flow

```text
                 ┌─────────────────┐
                 │    BBC News     │
                 └────────┬────────┘
                          │
                       Scraping
                          │
                          ▼
                 ┌─────────────────┐
                 │    News API     │
                 └────────┬────────┘
                          │
                       API Data
                          │
                          ▼
                 ┌─────────────────┐
                 │ Bangla Update 24│
                 │    Frontend     │
                 └────────┬────────┘
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
         Main News    Sections    Categories
```

---

## Pages

| Page            | Description                   |
| --------------- | ----------------------------- |
| `/`             | Main homepage and latest news |
| `/sign-in`      | User sign-in                  |
| `/sign-up`      | User registration             |
| `/not-found`    | Custom 404 page               |
| Category routes | Category-specific news        |

---

## Authentication Features

The authentication system provides:

```text
┌─────────────────────────────┐
│        Authentication       │
├─────────────────────────────┤
│                             │
│  Email + Password           │
│  Google OAuth               │
│  Sign Up                    │
│  Sign In                    │
│  Sign Out                   │
│                             │
└─────────────────────────────┘
```

---

## Disclaimer

Bangla Update 24 uses news data collected from BBC News through a scraping API.

The project is intended for educational and demonstration purposes. News content belongs to its respective publishers and copyright holders.

---

## Future Improvements

Potential future improvements include:

* Search functionality
* Bookmarking articles
* User profiles
* Personalized news feeds
* Dark mode
* Push notifications
* More news sources
* Improved caching
* Pagination and infinite scrolling
* Advanced filtering
* Article sharing

---

## Author

**Bangla Update 24**

A news portal project built with Next.js, React, Tailwind CSS, Better Auth, and a custom news API.

---

## Live Website
**[Visit Bangla Update 24](https://banglaupdate24.vercel.app/)**
```
