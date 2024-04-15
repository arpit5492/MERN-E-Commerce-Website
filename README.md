# FullStack E-Commerce Website

Welcome to Market Verse, an e-commerce platform where users can register, log in, view products, add products to the cart, and filter products by categories and price. This application uses MySQL for the database, Node.js and Express.js for the backend API, and React.js with Bootstrap for the frontend.

## Screenshot
<img width="1432" alt="Screenshot 2024-04-15 at 12 58 09 PM" src="https://github.com/arpit5492/MERN-ECommerce-Website/assets/48523103/bece8543-5cd8-4f39-81be-acf61e63b9b2">

## Technologies
- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Containerization:** Docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker (for Docker-based setup)
- Node.js and npm (for non-Docker setup)

### Using Docker (Recommended)

1. **Install Docker**: Make sure Docker and Docker Compose are installed on your system.

2. **Clone the repository**:

```
git clone https://github.com/arpit5492/MERN-ECommerce-Website.git
```

3. **Navigate to the application directory**:

```
cd MERN-ECommerce-Website/
```

4. **Build the Docker images**:

```
docker-compose build
```

5. **Run the Docker containers**:

```
docker-compose up
```

6. **Access the application**:
- Open your browser and visit `http://localhost:3000` to view the app.
- Administer the database via phpMyAdmin at `http://localhost:8080`.

### Without Docker

1. **Clone the repository**:

2. **Run the Backend Server**:
- Navigate to the backend server directory:
  ```
  cd backend-server/
  ```
- Start the backend server:
  ```
  nodemon index.js
  ```

3. **Run the Frontend Server**:
- Open a new terminal and navigate to the frontend server directory:
  ```
  cd frontend-server/
  ```
- Start the frontend server:
  ```
  npm start
  ```

4. **Access the application**:
- Open your browser and visit `http://localhost:3000` to view the app.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.




