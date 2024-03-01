# Nexly - Your Amazing E-commerce

Welcome to Nexly, an incredible e-commerce project built with Next.js, TypeScript, Strapi, Stripe, and Clerk Auth. This repository contains the source code and setup instructions to help you get started with your own e-commerce website.

<img src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1709292447/CDN%20for%20portfolio/Nexly_gif.gif" width="800">

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Frontend](#client)
  - [Backend](#server)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Modern Stack**: Next.js, TypeScript, Tailwind CSS, Strapi, Stripe, and Clerk Auth - the perfect combination for building a robust and scalable E-commerce platform.

- **Beautiful UI**: Our minimalistic and eye-catching design ensures an immersive shopping journey for users.

- **User-Centric Approach**: We understand that your time is precious. Nexly is designed to provide a seamless and personalized shopping experience.

- **Quality Products**: Our platform offers handpicked products that add value to your life, not just items you buy.

- **Sustainability**: We're committed to responsible shopping. You'll find eco-friendly options and ethically sourced products.

- **Community**: Nexly is more than a shopping destination; it's a community. Connect with us, share your thoughts, and join the journey.

- **Innovation**: Our dedication to innovation means you can expect a refined shopping experience with every visit.

## Prerequisites

Before you begin, ensure you have the following software and accounts set up:

- Node.js and npm: [Download and install Node.js](https://nodejs.org/)

- Stripe Account: [Sign up for a Stripe account](https://stripe.com/in)
- Cloudinary Account: [Create a Cloudinary account](https://cloudinary.com/)
- Clerk Account: [Create a Clerk account](https://clerk.com/)

## Tech Stack

- **Front-End (Client)**:

  - Next.js 14
  - TypeScript
  - Tailwind CSS

- **Back-End (Server)**:

  - Strapi

- **Payment Handling**:

  - Stripe

- **Authentication**:
  - Clerk

## Getting Started

### Client

1. Navigate to the client directory.
   ```bash
   cd client
   ```
2. Create a .env.local file in the client directory and set the following environment variables:

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`
`NEXT_PUBLIC_STRAPI_API_TOKEN`
`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

3. Install dependencies for the front-end.
   ```bash
   npm install
   ```
4. Start the development server.
   ```bash
   npm run dev
   ```

### Server

1. Navigate to the client directory.
   ```bash
   cd server
   ```
2. Create a .env file in the server directory and set the following environment variables:

`DATABASE_CLIENT`
`DATABASE_HOST`
`DATABASE_PORT`
`DATABASE_NAME`
`DATABASE_USERNAME`
`DATABASE_PASSWORD`
`DATABASE_SSL`
`CLOUDINARY_NAME`
`CLOUDINARY_KEY`
`CLOUDINARY_SECRET`
`JWT_SECRET`
`STRIPE_KEY`
`CLIENT_URL`

3. Install Strapi for the backend:

```bash
   npm install -g create-strapi-app
   create-strapi-app my-ecommerce-cms --quickstart
```

4. Create your content types and set up the Strapi admin panel.
5. Configure Stripe for payment handling and Clerk for authentication.
6. Start the Strapi server.

```bash
   npm run develop
```

7. Your Nexly E-commerce platform is now running locally.

## Deployment

You can deploy the front-end and back-end separately. We recommend using platforms like Vercel for the Next.js app (client) and dedicated hosting for your Strapi(server).

<img src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1708551058/CDN%20for%20portfolio/Nexly.png" width="600">

## License

This project is licensed under the [MIT](https://github.com/rishabh1S/nexly/blob/main/LICENSE).
