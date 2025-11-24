## 🛒 Ecommerce Website

A modern and fully responsive Ecommerce Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
This project includes a complete user-facing storefront and a separate admin dashboard for managing products, categories, and orders.

This repository represents a scalable and production-ready ecommerce solution designed with clean UI, secure APIs, reusable components, and industry-standard development practices.

## ✨ Overview

- This ecommerce application allows customers to browse products, view details, add items to their cart, and proceed to checkout.
- The admin panel enables administrators to manage the entire store efficiently using a dedicated dashboard interface.
- The project is divided into three main modules:
* Frontend (User Storefront) built with React
* Admin Panel built with React
* Backend API built with Node.js, Express, and MongoDB

## 🔥 Key Features
* 👥 User Features

- User Registration & Login
- Secure JWT Authentication
- Browse and Search Products
- Detailed Product Pages
- Add to Cart & Remove from Cart
- Responsive Design for All Devices
- Smooth User Experience

* 🛠 Admin Features

- Admin Authentication
- Add, Update, and Delete Products
- Manage Product Categories
- View Customer Orders
- Dashboard Overview
- Reliable API Communication

## 📁 Project Structure

/ecommerce-website

   /admin        → Admin dashboard (React)
   
   /frontend     → User storefront (React)
   
   /backend      → REST API (Node.js + MongoDB)
   
   README.md

Each module is structured independently and can be developed or deployed separately.


## 🚀 Running the Project Locally
1. Clone the Repository

git clone https://github.com/your-username/ecommerce_website.git

cd ecommerce_website

2. Backend Setup

cd backend

npm install

Create .env file:

MONGO_URI=your-mongodb-connection-string

JWT_SECRET=your-secret-key

PORT=5000

Start the backend:

npm start


3. Frontend Setup

cd ../frontend

npm install

npm start

4. Admin Panel Setup

cd ../admin

npm install

npm start

* Your application will now run on multiple local ports:

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001
- Backend API: http://localhost:5000

## 🌐 Deployment

This project supports cloud deployment using AWS services such as:

- S3 Static Website Hosting
- CodePipeline + CodeBuild (CI/CD)
- CloudFront for CDN
- MongoDB Atlas for Production Database

## 📄 License

This project is released under the MIT License, allowing free personal and commercial use.

## 🤝 Contributions

- Contributions, issues, and feature requests are always welcome.
- Feel free to open a pull request or suggest improvements.




