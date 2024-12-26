# cloud-based-task-hub
MERN Task Hub Project

Project Task Manager Web Application(Promanager)
A web-based task management application designed to help teams and individuals organize and track their tasks, projects, and deadlines. This application allows users to create, manage, and monitor the progress of their tasks in an intuitive and user-friendly interface.

Features
User Authentication: Secure login and registration system.
Task Management: Create, edit, delete, and prioritize tasks.
Project Management: Organize tasks into projects for better collaboration.
Task Assignment: Assign tasks to specific users within a project.
Deadline Tracking: Set due dates and track task progress.
Progress Visualization: View task statuses (e.g., Pending, In Progress, Completed).
Notifications: Get notified about task updates, deadlines, and assignments.

Tech Stack
Frontend:
HTML5, JavaScript,React.js ,Tailwind CSS 
Backend:
Node.js with Express.js 
RESTful API for communication between frontend and backend
Database:
MongoDB and Firebase
Authentication:
JWT (JSON Web Tokens) for secure user authentication
Prerequisites
Before running this project, make sure you have the following installed:

Node.js (for backend)
npm (Node Package Manager)
MongoDB abd firebase
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sahil-clould/Task-Hub.git
cd Task-Hub
Install backend dependencies:

bash
Copy code
cd server
npm i
Install frontend dependencies:

bash
Copy code
cd client
npm i
Set up environment variables for your database, JWT, etc. (Refer to .env.example file).

Run the application:
Server:
bash
npm start

client:
bash
npm run dev
Your web application should now be running at http://localhost:3000 

Usage
Creating a New Task
After logging in, navigate to the "Tasks" section.
Click the "Add Task" button.
Fill in the task name, description, project, and due date.
Assign the task to a team member.
Click "Save" to create the task.
Managing Tasks
Edit Task: Click on a task to view details and click "Edit" to update its information.
Delete Task: Click on the task you want to delete, and select "Delete".
Task Status: Change task status between "Pending", "In Progress", and "Completed".
Viewing Projects
Click on the "Projects" tab to view all your active projects.
Click on a project to view the list of tasks associated with it.
Testing
To run tests for this application, ensure you have installed the necessary dependencies and run:

Acknowledgements
React.js
Node.js
MongoDB
Express.js
Firebase

Admin side view:
![Screenshot (5)](https://github.com/user-attachments/assets/09e1d2b2-9bb1-4e15-b6de-57aa977f297b)
user side view:
![Screenshot (6)](https://github.com/user-attachments/assets/f4337c73-eb5f-4ebc-abd5-3e1bedd4e7e9)


