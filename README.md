# Music-Institute-Website
MEAN stack web development project, as an application on MEAN stack course

Music Institute Website 🎵
Table of Contents
- About the Project
- Features
- Technologies Used
- Installation
- Usage
- Folder Structure
- Future Improvements

About the Project
The Music Institute Website is a web application developed for managing and promoting a music academy. It provides a user-friendly interface for both students and administrators to access information, manage courses, and handle enrollments efficiently.

Features
- Homepage with course and event details.
- User registration and login.
- Admin dashboard for managing:
  Courses
  Instructors
  Events
  Users
  Secure authentication and authorization.
  Enrollments and course management.
  
Technologies Used
- Frontend: Angular
- Backend: Node.js, Express.js
- Database: MongoDB
Other Tools:
- JWT for authentication.
- CSS for styling.
- 
Installation
To run this project locally:

Clone the repository:

bash
git clone https://github.com/Nouran936/Music-Institute-Website.git
cd Music-Institute-Website
Install dependencies for both frontend and backend:

bash
cd backend
npm install
cd ../my-app
npm install
Configure environment variables:

Create a .env file in the backend folder with the following:
makefile
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Start the application:

Backend:
bash
cd backend
npm start
Frontend:
bash
Copy code
cd my-app
ng serve
Open your browser and navigate to http://localhost:4200.

Usage
Visit the homepage for basic information about the institute.
Admins can log in via writing /admin in the url to access the dashboard.

Users can log in or register via /user-login.
View courses, events, and enroll directly from the site, also eceryone can send a contact us message not just users.

Folder Structure
plaintext

Final Project MEAN/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routers/
|   ├── middleware/
|   ├── utili/
│   └── app.js
│
├── my-app/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components folders separately each one/
│   │   │   ├── services/
│   │   │   └── guards/
│   │   └── environments/
│   └── angular.json
│
└── README.md


Future Improvements
- Add more detailed analytics and more contorl for admins in the dashboard.
- Integrate payment gateways for course enrollments.
- Enhance the user profile functionality.
- Add multi-language support.


Contact
If you have any questions, feel free to reach out:

Nouran
GitHub Profile
Email: nouranelmorsy@gmail.com

Demo video will be added soon
