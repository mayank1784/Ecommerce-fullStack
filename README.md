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
