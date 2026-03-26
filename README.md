#  FilmStream – Full Stack OTT Streaming Platform

FilmStream is a full-stack OTT (Over-The-Top) streaming web application built using React for the frontend and Django for the backend, with MySQL as the database.

The application allows users to browse movies, view details, and interact with dynamically loaded content through API integration.

---

##  Key Features

###  User Features
- Browse movies and view details  
- Dynamic content rendering using API data  
- Client-side routing with React Router  
- Responsive UI design  

###  Backend Integration
- Fetch data from Django backend APIs  
- Display real-time movie data in UI  
- Structured API communication  

---

##  System Architecture

React Frontend → Django Backend → MySQL Database  

- React sends HTTP requests to backend APIs  
- Django processes data and interacts with MySQL  
- JSON responses are rendered dynamically in UI  

---

## 🛠️ Tech Stack

| Layer       | Technologies Used |
|------------|------------------|
| Frontend   | React (Vite), React Router, CSS |
| Backend    | Django |
| Database   | MySQL |

---

##  Project Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── MovieCard.jsx
│ ├── MovieRow.jsx
│ ├── HeroCarousel.jsx
│ └── Footer.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── MovieDetails.jsx
│ ├── Login.jsx
│ ├── Landing.jsx
│ └── ChangePassword.jsx
│
├── App.jsx
├── AppRoutes.jsx
└── main.jsx

##  Backend Repository

Backend (Django):  
 https://github.com/Gayathri-12s/admin_project

---

## Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/Gayathri-12s/filmstream.git
cd filmstream

2️⃣ Install Dependencies
npm install
3️⃣ Run Application
npm run dev


📌 Key Concepts Demonstrated:
Component-based architecture in React
Client-side routing using React Router
API integration with backend
Dynamic rendering of data
Separation of UI components and pages

 Future Improvements:

Add search and filtering functionality
Implement authentication (login/signup)
Add pagination
Improve UI/UX design
Deploy application
