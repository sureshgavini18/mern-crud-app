MERN CRUD Blog Application

A full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can create, view, update, and delete blog posts through a simple and user-friendly interface.

🚀 Live Demo

- Frontend: https://mern-crud-app-1-nj4k.onrender.com
- Backend API: https://mern-crud-app-qp35.onrender.com

✨ Features

- Create new blog posts
- View all blog posts
- View individual blog posts
- Update existing posts
- Delete blog posts
- RESTful API integration
- MongoDB database connectivity
- Responsive React frontend

🛠️ Technologies Used

Frontend

- React.js
- Vite
- JavaScript
- CSS

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

Deployment

- GitHub – Source code management
- Render – Application hosting

📁 Project Structure

mern-crud-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── .gitignore

⚙️ Installation and Setup

1. Clone the Repository

git clone https://github.com/sureshgavini18/mern-crud-app.git

2. Backend Setup

cd mern-crud-app/backend
npm install

Create a ".env" file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=mern_crud_db

Start the backend:

npm start

3. Frontend Setup

Open another terminal:

cd mern-crud-app/frontend
npm install
npm run dev

Configure the frontend API URL to connect to your backend.

🔗 API Endpoints

Base URL: "/api/v1/posts"

Method| Endpoint| Description
POST| "/api/v1/posts"| Create a post
GET| "/api/v1/posts"| Get all posts
GET| "/api/v1/posts/:id"| Get a single post
PUT| "/api/v1/posts/:id"| Update a post
DELETE| "/api/v1/posts/:id"| Delete a post

🌐 Deployment

The frontend and backend are deployed separately using Render.

👨‍💻 Author

Suresh Gavini

GitHub: "sureshgavini18" (https://github.com/sureshgavini18)

---

⭐ If you find this project useful, consider giving it a star!
