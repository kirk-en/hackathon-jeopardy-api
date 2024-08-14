<div align="center">
  <h1>🔧 Hackathon Jeopardy API</h1>
</div>

The Hackathon Jeopardy API is a robust back-end service built using Node.js and Express. It provides the necessary endpoints to manage game data, including categories, questions, and scoring. This API serves as the backbone of the Hackathon Jeopardy platform.

## 🚀 Features

- 📦 **Game Data Management:** Handles categories, questions, and scores for the Jeopardy game.
- 🌐 **RESTful API:** Provides easy-to-use endpoints for front-end integration.
- 📄 **Documentation:** Well-documented API endpoints for easy integration and use.

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:kirk-en/hackathon-jeopardy-api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd hackathon-jeopardy-api-main
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Running the API

To start the API server, run:

```bash
node server.js
```

This will start the API server on `http://localhost:8080` (or the port specified in your environment variables).

## 📄 API Documentation

The API provides endpoints for managing game data:

- **GET /categories:** Retrieves all game categories.
- **GET /questions:** Retrieves questions based on category.
- **POST /score:** Submits and tracks player scores.

Refer to the API documentation within the repository for detailed setup instructions and endpoint usage.

## 🛠️ Technologies Used

- 🛠️ **Node.js:** For building the server-side logic.
- 🌐 **Express:** For handling API requests and routing.
- 💽 **MongoDB (optional):** For data persistence (if required).
