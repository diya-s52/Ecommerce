# E-Commerce Application

## Description

This is a full-stack e-commerce application that allows users to browse products, manage a shopping cart, and place orders. The application is built using modern technologies to provide a seamless and interactive user experience.

**Features:**
- User authentication and registration
- Product browsing and searching
- Cart management (add, remove, update items)
- Order placement and tracking
- Responsive design for various devices

## Technologies

- **Frontend:** React, Redux, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Netlify (Frontend), Render (Backend)
- **APIs:** RESTful APIs for product and user management

## Live Demo

You can view the live application at [Netlify URL](https://ecommerce-525.netlify.app/).

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js and npm
- MongoDB Atlas account

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Setup the Backend:**
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` directory with the following content:
      ```bash
      MONGO_URI=your_mongodb_atlas_connection_string
      PORT=8080
      ```
    - Start the server:
      ```bash
      npm start
      ```

3. **Setup the Frontend:**
    - Navigate to the frontend directory:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the development server:
      ```bash
      npm start
      ```
    - The application should now be running on `http://localhost:3000`.

### Configuration

- **Backend:** Ensure the backend server URL is correctly configured in the frontend code.
- **Frontend:** Update the API base URL in `src/api/index.js` to match the deployed backend URL.

## Usage

- **Register:** Create a new user account through the registration form.
- **Login:** Sign in to access personalized features.
- **Browse Products:** Explore available products and view details.
- **Manage Cart:** Add or remove items from the cart.
- **Place Orders:** Proceed to checkout and place orders.

## API Documentation

The backend API is accessible at the following endpoints:

- **User Endpoints:**
  - `POST /api/user/signup` - Register a new user
  - `POST /api/user/signin` - User login

- **Product Endpoints:**
  - `GET /api/products` - Get all products
  - `GET /api/products/:id` - Get product details

- **Cart Endpoints:**
  - `GET /api/user/cart` - Get cart items
  - `POST /api/user/cart` - Add item to cart
  - `PATCH /api/user/cart` - Update cart item

- **Order Endpoints:**
  - `POST /api/user/order` - Place a new order
  - `GET /api/user/order` - Get orders for a user

## Contributing

If you would like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
