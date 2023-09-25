# Ecommerce Backend Documentation

Welcome to the documentation for the Ecommerce Backend, a RESTful API built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This API provides the backend functionality for an e-commerce website, including user authentication, product management, order processing, and more.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [Cloning the Repository](#cloning-the-repository)
   - [Environment Configuration](#environment-configuration)
   - [Installing Dependencies](#installing-dependencies)
   - [Running the Server](#running-the-server)
3. [API Routes](#api-routes)
   - [Authentication](#authentication)
   - [Users](#users)
   - [Products](#products)
   - [Orders](#orders)
4. [Security Measures](#security-measures)
5. [Error Handling](#error-handling)
6. [Technologies Used](#technologies-used)
7. [Deployed Backend](#deployed-backend)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### Cloning the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/ecommerce-backend.git
```
### Environment Configuration

In the project folder, you'll find a `config` .
Make a config.env file in it. Update the variables in `config.env` with your specific configuration details.

Here's an example of config.env:

```bash
DB_URL="mongodb://127.0.0.1:27017/Ecommerce"
JWT_SECRET="your-secret-key"
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
SMTP_SERVICE=gmail
SMTP_MAIL='your-email@gmail.com'
SMTP_PASSWORD='your-email-password'
SMTP_HOST='smtp.gmail.com'
SMTP_PORT=465
```

### Installing Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd ./backend
npm install
```

### Running the Server

To start the server, use one of the following commands:

- For production:
   ```bash
  npm start
  ```

- For development (with nodemon for automatic server restarts):
  ```bash
  npm run dev
  ```
  By default, the server will run on port 3000. You can access the API at `http://localhost:3000/api/v1`

## API Routes

The Ecommerce Backend provides the following API routes:

### Authentication

- `POST /api/v1/register` : Register a new user.
- `POST /api/v1/login` : Log in as an existing user.
- `GET /api/v1/logout` : Log out the currently authenticated user.
- `POST /api/v1/password/forgot` : Request a password reset email.
- `PUT /api/v1/users/resetPassword/:token` : Reset the password using the provided token.

### Users

- `GET /api/v1/me` : Get the details of the currently authenticated user.
- `PUT /api/v1/me/update` : Update the user's profile information.
- `PUT /api/v1/password/update` : Update the user's password (requires authentication).
- `GET /api/v1/admin/users` : Get a list of all users (admin role required).
- `GET /api/v1/admin/user/:id` : Get details of a specific user (admin role required).
- `PUT /api/v1/admin/user/:id` : Update a user's details (admin role required).
- `DELETE /api/v1/admin/user/:id` : Delete a user (admin role required).

### Products

- `GET /api/v1/products` : Get a list of all products.
- `POST /api/v1/admin/product/new` : Create a new product (admin role required).
- `PUT /api/v1/admin/product/:id` : Update a product (admin role required).
- `DELETE /api/v1/admin/product/:id` : Delete a product (admin role required).
- `GET /api/v1/product/:id` : Get details of a specific product.
- `PUT /api/v1/review` : Add a product review (requires authentication).
- `GET /api/v1/reviews` : Get all product reviews.
- `DELETE /api/v1/reviews` : Delete a product review (requires authentication).

### Orders

- `POST /api/v1/order/new` : Create a new order (requires authentication).
- `GET /api/v1/order/:id` : Get details of a specific order (requires authentication).
- `GET /api/v1/orders/me` : Get all orders for the currently authenticated user (requires authentication).
- `GET /api/v1/admin/orders` : Get all orders (admin role required).
- `PUT /api/v1/admin/order/:id` : Update the status of an order (admin role required).
- `DELETE /api/v1/admin/order/:id` : Delete an order (admin role required).

## Security Measures

- User authentication using JWT (JSON Web Tokens).
- Password hashing using bcrypt.js.
- Password reset token generation with expiration.
- Role-based authorization for admin and user roles.
- Email sending for password reset and user registration verification.

## Error Handling

The backend handles errors gracefully and provides clear error messages when endpoints encounter issues.
Error responses include status codes and informative error messages.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- Bcrypt.js for password hashing
- Nodemailer for email sending
- Express Validator for input validation
- Crypto module for generating password reset tokens

## Deployed Backend

The backend is deployed on the following URL:

[https://ecombackend-w9y0.onrender.com/](https://ecombackend-w9y0.onrender.com/)

To access the API routes when not cloned locally, you can use tools like [Postman](https://www.postman.com/) or make `HTTP` requests from your frontend application to the above URL.

Feel free to explore and use this API for building your e-commerce application. If you have any questions or need further assistance, please don't hesitate to reach out.

Note: This documentation assumes you have basic knowledge of RESTful APIs and how to make HTTP requests.
