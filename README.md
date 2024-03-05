Meeting Room Booking API
========================

This is a simple API for managing meeting rooms and booking appointments in those rooms. It allows users to:

*   Get details of available rooms.
*   Create new rooms.
*   Book rooms for appointments.
*   Retrieve booked rooms.
*   Fetch customer details.
*   Count the number of bookings for a specific customer.

Technologies Used
-----------------

*   **Node.js**: The backend runtime environment.
*   **Express.js**: A web application framework for Node.js used to build the RESTful API.
*   **JavaScript (ES6+)**: The programming language used for server-side logic.
*   **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
*   **Postman**: A collaboration platform for API development used for testing endpoints.
Endpoints
---------

### 1\. GET /hallapi

*   Retrieves details of available rooms.

### 2\. POST /hallapi/room

*   Creates a new room with specified details.

### 3\. POST /bookapi/book

*   Books a room for a specific appointment.

### 4\. GET /bookapi/booked-room

*   Retrieves details of all booked rooms.

### 5\. GET /bookapi/booked-cust

*   Retrieves details of customers who have booked rooms.

### 6\. GET /bookapi/booked-count/:customer\_name

*   Retrieves the count and details of bookings for a specific customer.

Usage
-----

1.  Use Postman or any API testing tool to make requests to the provided endpoints.
2.  Ensure the necessary parameters are provided for creating rooms and booking appointments.
3.  Handle responses accordingly based on the API documentation.
