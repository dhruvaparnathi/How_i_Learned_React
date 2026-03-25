# 💼 Job Cards UI (React)

A modern and reusable **Job Listing UI** built with React, focused on **component-based architecture and props handling**.

This project demonstrates how to efficiently pass and render dynamic data using **props**, making components scalable and reusable.

---

## 🚀 Live Demo

🔗 (https://basic-card-components.netlify.app/)

---

## ✨ Key Features

* ⚛️ Built with **React functional components**
* 🔁 **Props-driven UI rendering**
* 📦 Reusable `Card` component
* 🧩 Clean component structure
* 🏷️ Dynamic job tags (type & level)
* 💰 Salary and 📍 location display
* 🎯 Minimal and responsive design

---

## 🧠 Core Concept: Props Handling

The main highlight of this project is **passing data via props** from parent to child components.

### 🔹 Example:

```jsx
// App.jsx
{jobs.map((job) => (
  <Card key={job.id} job={job} />
))}
```

```jsx
// Card.jsx
const Card = ({ job }) => {
  return (
    <>
      <h2>{job.company}</h2>
      <p>{job.role}</p>
    </>
  );
};
```

### ✅ What this demonstrates:

* Passing **objects as props**
* Accessing nested data inside components
* Creating **dynamic UI from data arrays**
* Writing **clean and reusable components**

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6+)
* CSS
* Vite

---

## 📂 Project Structure

```
src/
 ├── components/
 │    └── Card.jsx        # Reusable UI component
 ├── assets/
 │    └── cardData.js    # Job data source
 ├── App.jsx             # Parent component
 └── main.jsx            # Entry point
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## 📌 Future Improvements

* 🔍 Add job search & filters
* ❤️ Save/Bookmark functionality
* 🌐 API integration (real job data)
* 📱 Improve mobile responsiveness
* 🎨 Add animations & better UI polish

---

## 🙌 Author

**Dhruv Aparnathi**

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!
