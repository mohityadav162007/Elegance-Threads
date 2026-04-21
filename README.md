# Style-lit

A premium, luxury fashion e-commerce platform built with React, Vite, and Node.js.

## Tech Stack
-   **Frontend**: React, Vite, Tailwind CSS (v4)
-   **Backend**: Node.js, Express, MongoDB
-   **Icons**: Lucide React
-   **Fonts**: Cormorant Garamond (Serif), Inter (Sans-serif)

## Getting Started

### Prerequisites
-   Node.js installed
-   MongoDB database (Atlas or local)

### Installation

1.  **Clone the repository**
2.  **Frontend Setup**:
    ```bash
    npm install
    npm run dev
    ```
3.  **Backend Setup**:
    -   Navigate to the `server/` directory.
    -   Create a `.env` file based on the provided configuration.
    -   Run the server:
    ```bash
    npm install
    node server.js
    ```

## Admin Panel

The admin panel is used to manage products and view recent customer orders.

-   **Link**: `http://localhost:5173/manage-style-lit-portal-xyz89`
-   **Credentials**: The password is defined as `ADMIN_PASSWORD` in your server `.env` file.

## Environment Variables (Server)

| Variable | Description |
| :--- | :--- |
| `PORT` | The port the backend server runs on (default: 5000) |
| `MONGO_URI` | Your MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT authentication |
| `ADMIN_PASSWORD` | Password for the admin panel portal |

## Features

-   **Luxury Aesthetic**: Dark mode design with gold accents and high-end typography.
-   **Dynamic Catalog**: Integrated with MongoDB for real-time product management.
-   **Admin Dashboard**: Manage inventory and track order status (Pending, Shipped, Delivered, etc.).
-   **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
