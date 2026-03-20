# Employee_CRM_System
# Employee CRM System (Frontend)

## Overview
This project is a multi-page Employee CRM (Customer Relationship Management) system developed using HTML, CSS, JavaScript, Bootstrap, and jQuery. It allows users to manage employee information, conduct assessments, and track performance without requiring a backend server.

The application uses browser localStorage to simulate persistent data storage and maintain application state across pages.

---

## Features

### Employee Management
- Displays a list of employees dynamically
- Allows toggling employee status (Active/Inactive)
- Stores employee data using localStorage

### Employee Profile
- View individual employee details
- Displays assigned clients and assessment performance
- Shows progress using a dynamic progress bar

### Assessment Module
- Multiple-choice quiz system
- Questions generated dynamically from JavaScript objects
- Score calculation based on user input
- Grade and feedback generation

### Performance Tracking
- Stores assessment results per employee
- Displays percentage, grade, and progress visually
- Maintains data even after page reload

### Dashboard
- Shows employee statistics
- Displays client assignment status
- Highlights performance progress and top performers

---

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- jQuery
- Web Storage (localStorage)

---

## Project Structure
employee-crm-project/
│
├── Dashboard.html
├── Employees.html
├── Assessment.html
├── Profile.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── employees.js
│ ├── assessment.js
│ ├── profile.js
│ └── storage.js
│
└── tests/
└── assessment.test.js

---

## Core Logic

### Data Handling
Employee and assessment data are stored as JavaScript objects and persisted using localStorage.

### Dynamic Rendering
UI elements such as tables, quiz questions, and profile details are generated dynamically using DOM manipulation.

### Assessment Evaluation
User responses are validated by comparing selected options with predefined answers. Scores are calculated and converted into percentages and grades.

### State Management
localStorage is used to maintain:
- Employee data
- Selected employee
- Assessment results per employee

---

## How to Run
1. Download or clone the repository
2. Open `Dashboard.html` in a browser
3. Navigate through the application using the navbar

---

## Limitations
- No backend integration
- Data is stored only in the browser (localStorage)
- Not suitable for multi-user environments

---

## Future Enhancements
- Backend integration with database
- Authentication and authorization
- Role-based access control
- Real-time data updates

---

## Author
Developed as a frontend project to demonstrate CRM functionality, dynamic UI rendering, and client-side data management.
