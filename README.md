This application consists of three primary pages: Home, Online Resources, and Help (originally Home, About, and Contact before the project’s context changed). The application leverages React hooks, routing, and the Open Library API to display book information.

Home Page (App.js)
Implements useState to manage user input and API data.
Utilizes useEffect to fetch data from the Open Library API in JSON format.
Includes error handling to manage scenarios where data cannot be reached.
Displays a list of books by a given author inside a styled <ul> element.

Routing
Currently, routing requires improvement. Visiting localhost:3000 does not render content directly, though all three pages work as intended.
The pages were renamed to:
HOME – Main application interface
ONLINE RESOURCES – Contains curated external links
HELP – Provides user assistance and guidance

Search Component
Search component is exported to the main page but is not fully functional.

Intended behavior:
Fetch data from Open Library using user input.
Conditionally display either an array of books or search results using a ternary operator.
Current state: Data is fetched successfully, but the conditional rendering logic is flawed.

Getting Started

1. Clone the repository

bash
git clone <your-repository-url>

2. Navigate into the project directory

bash
cd <project-folder>

Install dependencies

bash
npm install

3. Run the development server

bash
npm start

4. Visit the app at http://localhost:3000

Technologies Used
React – Component-based UI library
React Router – Client-side routing
Open Library API – Data source for book information
JavaScript (ES6+) – Core language
HTML5 & CSS3 – Markup and styling
Fetch API – For asynchronous HTTP requests

Outstanding Issues to Fix
Routing: Ensure localhost:3000 shows the Home page by default.
Search Component: Debug and fix the initial conditional state logic using the ternary operator.
Error Handling: Verify API error messages are user-friendly and informative.
Page Structure: Confirm all links and resource references are up-to-date with the new page names and context.
UI Enhancements: Consider adding loaders or placeholder content when data is being fetched.
