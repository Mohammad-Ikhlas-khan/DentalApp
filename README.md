# 🦷 Dental Appointment System

A full-stack MERN application that allows users to browse dentists, book appointments, and manage healthcare interactions efficiently.

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Mohammad-Ikhlas-khan/DentalApp
cd DentalApp
```

### 2. Setup Backend
```bash
cd backend
npm install
```
#### Create a .env file
```bash
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FOLDER_NAME=your_folder_name
```
#### Run Backend
```bash
npm run dev
```
### 3. Setup Frontend
```bash
cd ../frontend
npm install
```
#### Create a .env file
```bash
VITE_BASE_URL=your_backend_url/api/v1
```
#### Run Frontend
```bash
npm run dev
```

## 🛠 Tech Stack

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- Context API

### 🔹 Backend
- Node.js
- Express.js

### 🔹 Database
- MongoDB Atlas

### 🔹 Other Tools & Services
- JWT Authentication (User auth & security)
- Cloudinary (Image upload & storage)
- Render (Backend deployment)
- Vercel (Frontend deployment)

## 🏗 Architecture Explanation

### 🔹 Overall Architecture
This application follows a **MERN stack client-server architecture**:

- **Frontend (React)** → Handles UI and user interactions  
- **Backend (Node + Express)** → Handles APIs and business logic  
- **Database (MongoDB)** → Stores users, dentists, and appointments  

---

### 🔹 Data Flow

1. User interacts with the frontend UI  
2. Frontend sends HTTP requests to backend APIs  
3. Backend processes requests and communicates with MongoDB  
4. Backend sends response back to frontend  
5. Frontend updates UI dynamically  

---

### 🔹 Authentication Flow

- User logs in → backend generates JWT token  
- Token is stored in localStorage  
- Token is sent in Authorization header for protected routes  
- Backend verifies token before allowing access  

---

### 🔹 Image Upload Flow

- User uploads dentist image from frontend  
- Backend receives file using middleware  
- File is uploaded to Cloudinary  
- Cloudinary returns image URL  
- URL is stored in MongoDB  
- Frontend displays image using stored URL  

## 🌐 Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📌 Features

- User Authentication (Login/Register)
- Dentist Listing
- Add Dentist (with image upload)
- Appointment Booking
- Responsive UI