# OAuth Demo with Next.js, Tailwind, and Express

This project demonstrates a basic Google OAuth 2.0 flow using a Next.js frontend (with TypeScript and Tailwind CSS) and an Express.js backend. The app lets users log in with Google and fetches their basic profile info.

## Prerequisites
- Node.js (v18 or later)
- A Google Cloud account to set up OAuth credentials
- Basic familiarity with Next.js, Express, and TypeScript

## Setup Instructions

### 1. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the "Google+ API" (for basic profile info).
4. Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client IDs".
5. Set "Authorized redirect URIs" to `http://localhost:5000/auth/google/callback`.
6. Note down your **Client ID** and **Client Secret**.

# OAuth Demo for Beginners

Welcome to the OAuth Demo! This project shows you how to log in with Google using a simple web app. The frontend (what you see) is built with **Next.js**, **TypeScript**, and **Tailwind CSS**, and the backend (behind-the-scenes stuff) uses **Express.js**. It’s perfect for beginners who want to learn OAuth in a hands-on way!

## What Does This Do?
When you click "Login with Google," the app:
1. Asks Google for permission to see your basic profile info.
2. Gets a special key (called an access token).
3. Uses that key to fetch your name and Google ID.