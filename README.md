# FilmStream - Movie Streaming Platform

A full-stack web application where users can discover, stream, and manage movies. Built with Django (backend) and React (frontend).

## 📌 What is FilmStream?

FilmStream is a movie streaming platform with two main parts:

1. **User Application** - Browse movies, create watchlists, track watch history
2. **Admin Dashboard** - Manage movies and monitor user activity

Backend Repository: [https://github.com/Gayathri-12s/admin_project.git]
Frontend Repository: [https://github.com/Gayathri-12s/filmstream.git]

## 💡 Key Features

### For Users
- Sign up and login
- Browse and search movies
- View movie details
- Create and manage a personal watchlist
- Track watch history
- Update profile and password

### For Admins
- Add, edit, and delete movies
- View registered users
- Monitor user activity and watch history
- Generate reports

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React with Vite |
| Backend | Django & Django REST Framework |
| Database | SQLite |
| Styling | CSS |

## 📂 Project Structure

```
FINAL PROJECT/
├── ADMIN/               → Django Backend
│   └── admin_project/
├── USER/                → React Frontend
│   └── filmstream/
└── README.md            → This file
```

## 🚀 Quick Start

### Backend Setup

```bash
cd "FINAL PROJECT/ADMIN/admin_project"

# Create virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Apply database migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Run server
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

### Frontend Setup

```bash
cd "FINAL PROJECT/USER/filmstream"

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend runs at: `http://localhost:5173`

## 📋 Main Pages & Features

### User Interface
- **Landing Page** - Welcome screen for new users
- **Login/Signup** - User authentication
- **Home** - Browse and discover movies
- **Movie Details** - View full movie information
- **Watchlist** - Saved movies
- **Watch History** - Previously watched movies
- **Profile** - User settings and password change

### Admin Dashboard
- **Dashboard** - Overview and statistics
- **Movie Management** - Add, edit, delete movies
- **Users Management** - View all registered users
- **Reports** - View user engagement and activity

## 🔄 How It Works

1. User creates account and logs in through React frontend
2. Frontend sends request to Django backend API
3. Backend validates user credentials and returns authentication token
4. User can now access personalized features (watchlist, history)
5. Admin can manage content through the admin dashboard

## 📖 Running the Application

1. **Start Backend**: Open PowerShell, navigate to admin_project, run `python manage.py runserver`
2. **Start Frontend**: Open another PowerShell, navigate to filmstream, run `npm run dev`
3. **Open Browser**: Visit `http://localhost:5173` for the user app
4. **Admin Panel**: Visit `http://localhost:8000/admin` with admin credentials

## 📝 Project Highlights

✅ Clean, modular code structure  
✅ Responsive design for all devices  
✅ Secure authentication system  
✅ Separate user and admin interfaces  
✅ RESTful API architecture  
✅ Reusable React components  

---

**Built by**: [Your Name]  
**Date**: March 2026
