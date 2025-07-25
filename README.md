# Task Manager Backend

A professional backend API for a task management application, built with Node.js, Express, and MongoDB. This backend provides secure authentication, role-based access control, task CRUD operations, and analytics endpoints.

## Features

### Authentication & Authorization
- User registration and login with email/password
- JWT-based authentication
- Role-based access control (User, Manager)
- Secure password hashing with bcrypt

### Task Management
- Create, read, update, and delete tasks
- Task properties: title, description, status (pending, in-progress, completed)
- Users manage their own tasks
- Managers can view and manage all users' tasks

### Advanced Features
- Filtering, sorting, and searching tasks
- Pagination for task lists
- Analytics dashboard with task statistics

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## Project Structure

```
.
├── config/              # Database connection
├── controllers/         # Route controllers
├── middlewares/         # Auth and role middlewares
├── models/              # Mongoose models
├── routes/              # Express route definitions
├── server.js            # Entry point
├── package.json
├── .env
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```sh
git clone <repository-url>
cd taskManager-Backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### 4. Run the Server
```sh
npm run dev
```
The API will be available at [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT
- `GET /api/auth/me` - Get current user info

### Tasks
- `GET /api/tasks` - Get tasks (filter, sort, search, paginate)
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Dashboard
- `GET /api/dashboard` - Get analytics/statistics

## Usage

- Register as a user or manager
- Login to receive a JWT token
- Use the token in the `Authorization: Bearer <token>` header for protected routes
- Managers can access all tasks and analytics; users can only manage their own tasks

## Development

### Scripts
- `npm run dev` - Start server with nodemon
- `npm start` - Start server

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the# Task Manager Backend

A professional backend API for a task management application, built with Node.js, Express, and MongoDB. This backend provides secure authentication, role-based access control, task CRUD operations, and analytics endpoints.

## Features

### Authentication & Authorization
- User registration and login with email/password
- JWT-based authentication
- Role-based access control (User, Manager)
- Secure password hashing with bcrypt

### Task Management
- Create, read, update, and delete tasks
- Task properties: title, description, status (pending, in-progress, completed)
- Users manage their own tasks
- Managers can view and manage all users' tasks

### Advanced Features
- Filtering, sorting, and searching tasks
- Pagination for task lists
- Analytics dashboard with task statistics

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## Project Structure

```
.
├── config/              # Database connection
├── controllers/         # Route controllers
├── middlewares/         # Auth and role middlewares
├── models/              # Mongoose models
├── routes/              # Express route definitions
├── postman/             # Postman collections
│   └── taskmanager-collection.json
├── server.js            # Entry point
├── package.json
├── .env
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```sh
git clone <repository-url>
cd taskManager-Backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### 4. Run the Server
```sh
npm run dev
```
The API will be available at [http://localhost:5000](http://localhost:5000)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT
- `GET /api/auth/me` - Get current user info

### Tasks
- `GET /api/tasks` - Get tasks (filter, sort, search, paginate)
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Dashboard
- `GET /api/dashboard` - Get analytics/statistics

## Postman Collection

A ready-to-use Postman collection is available in [postman/taskmanager-collection.json](postman/taskmanager-collection.json).  
You can import this collection into Postman to test all API endpoints, including authentication, task management, and dashboard analytics.  
- Use the `{{token}}` variable for authenticated requests (set after login).
- Update `{{taskId}}` for task-specific operations.

## Usage

- Register as a user or manager
- Login to receive a JWT token
- Use the token in the `Authorization: Bearer <token>` header for protected routes
- Managers can access all tasks and analytics; users can only manage their own tasks

## Development

### Scripts
- `npm run dev` - Start server with nodemon
- `npm start` - Start server

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the ISC