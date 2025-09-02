Customer Management App
 A simple full-stack application to manage customers and their addresses.
 Built using React (frontend) and Node.js + Express (backend) with SQLite as the database.

# Project Structure
 customer-management-app
 /- client/       # React frontend
  - src/
    - components/
    - App.js
    - index.js
- package.json
/- server/       # Backend
  - index.js
  - database.db
  - package.json- README.md

# Features- 
 
 Add, edit, delete customers.- View customer details.- Add, view, delete addresses for each customer.- Beginner-friendly, clean code with readable SQL queries.- Responsive UI with Edit/Delete buttons properly aligned.

 # Installation
 1. Clone the repository
 git clone <repository-url>
 cd  customer-management-app

 2. Install backend dependencies
 cd server
 npm install express sqlite3 cors
 3. Install frontend dependencies
cd ../client
 npm install
 Running the App

 Start Backend
 cd server
 node index.js
 Backend server will run on: http://localhost:5000

 Start Frontend
 cd client
 npm start
 Frontend will run on: http://localhost:3000


 Note: Backend must be running before using the frontend.


# API Endpoints

 Customers
 POST   /api/customers      Create a new customer
 GET    /api/customers      Get all customers
 GET    /api/customers/:id  Get a single customer
 PUT    /api/customers/:id  Update a customer
 DELETE /api/customers/:id  Delete a customer

 Addresses
 POST   /api/customers/:id/addresses   Add an address for a customer
 GET    /api/customers/:id/addresses   Get all addresses for a customer
 DELETE /api/addresses/:addressId      Delete an address
 Notes for Beginners- Backend queries use named parameters for clarity (e.g., :first_name).- Frontend communicates with backend via Axios.- Foreign keys ensure addresses are linked to the correct customer.- Edit/Delete buttons are aligned in a row with CSS for clean UI.- No changes needed in the frontend if backend is implemented as provided.- Database file (database.db) is created automatically when backend starts.
 
# Tips
- Start backend first, then frontend.- If CORS errors occur, make sure cors middleware is included in backend.- Focus on understanding the flow: Frontend -> Backend -> Databa