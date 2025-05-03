🛸 Rick and Morty Characters Viewer (React)
A responsive React web application that displays Rick and Morty characters in a paginated 3×2 grid layout using the Rick and Morty API. Users can view detailed information about each character in a separate tab.

🔗 Live Demo: https://elevate-practice.vercel.app/

✨ Features
⚡ Built with React.js

📡 Fetches character data from the Rick and Morty API

🖼️ Displays characters in a 3×2 responsive grid (6 characters per page)

📋 Each character card includes:

Image

Name

Species

Status (Alive, Dead, Unknown)

🔄 Pagination using "Next" and "Previous" buttons

🔗 Clicking on a character opens a detailed view in a new tab (with routing or a separate route)

🕒 (Planned) Live-updating footer clock in the format HH:MM:SS Day Date

🔍 Character Detail Page
Each character detail view displays:

Full-size character image

Name

Status

Species

Type (if available)

Gender

Origin location

Current location

Episode appearances (count or names)

🕒 Live-updating clock is planned but not implemented yet.

🧩 Tech Stack
React.js (with Hooks)

CSS (Responsive Grid)

JavaScript (ES6+)

Rick and Morty API

Deployed on Vercel

📁 Project Structure
bash
Copy
Edit
rick-and-morty-viewer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterDetail.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CharacterPage.jsx
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
🚀 Run Locally
Clone the project:

bash
Copy
Edit
git clone https://github.com/your-username/rick-and-morty-viewer.git
Navigate into the project directory:

bash
Copy
Edit
cd rick-and-morty-viewer
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
📌 TODO
 Add live-updating clock to footer

 Improve UI/UX and styling

 Handle loading and error states gracefully

 Enhance accessibility

📄 License
This project is open-source under the MIT License.
