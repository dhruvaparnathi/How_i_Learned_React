# 📸 Image Gallery Web App

A modern and responsive **Image Gallery Web Application** built using **React + Tailwind CSS + Axios**.
This app fetches images dynamically from the Picsum API and displays them in a clean, interactive grid layout with pagination.

---

## 🚀 Live Features

* 🖼️ Dynamic image fetching from API
* 📄 Pagination support (Next / Prev navigation)
* 🎯 Click on image → Opens original image in new tab
* ✨ Smooth hover effects & transitions
* 📱 Fully responsive (mobile → desktop)
* 🎨 Clean UI using Tailwind CSS

---

## 🌐 Live Demo

👉 [Live](https://mini-random-gallery.netlify.app/)

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **HTTP Requests:** Axios
* **API:** https://picsum.photos/

---

## 📂 Project Structure

```bash
Image-Gallery/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/image-gallery.git

# Navigate to project
cd image-gallery

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📸 How It Works

* Images are fetched using:

```js
https://picsum.photos/v2/list?page=${page}&limit=10
```

* Pagination updates the `page` state
* `useEffect` triggers API call on page change
* Images are rendered in a responsive grid
* Clicking an image opens the original source

---

## 🔥 Key Features Explained

### 1. Pagination System

* Maintains current page using state
* Buttons allow navigation between pages
* Prevents going below page 1

```js
onClick={() => page > 1 && setPage(page - 1)}
```

---

### 2. Dynamic Data Fetching

* Axios used for API calls
* Updates UI instantly on state change

---

### 3. Interactive UI

* Hover zoom effect on images
* Author name overlay appears on hover
* Smooth transitions using Tailwind

---

### 4. Image Navigation

```js
open(selectedImage.url, '_blank');
```

* Opens high-quality image in new tab

---

## ⚠️ Challenges Faced & Solutions

### 🔴 1. Double API Calls Issue

**Problem:**
API was being called twice when clicking pagination buttons.

**Cause:**
Calling `getData()` manually along with `useEffect`.

**Solution:**
Removed manual calls and relied only on `useEffect`.

---

### 🔴 2. Handling Large Data Efficiently

**Problem:**
Loading too many images at once slowed down performance and affected user experience.

**Solution:**
Implemented **pagination** to fetch limited data (10 images per page), ensuring:

* Faster loading
* Better performance
* Smooth user experience

---

### 🔴 3. Key Placement Bug

**Problem:**
React key was not on the outermost element.

**Solution:**
Moved `key={item.id}` to parent div.

---

### 🔴 4. Layout Issues (Flex vs Grid)

**Problem:**
Using flex-wrap caused uneven spacing.

**Solution:**
Switched to Tailwind Grid:

```js
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```

---

## 🎯 Future Improvements

* 🔄 Infinite Scroll (instead of pagination)
* 🔍 Search functionality
* ❤️ Favorite / Save images
* 📥 Download button
* 🖼️ Modal preview instead of new tab
* 🌙 Dark mode

---

## 💡 Learnings

* Proper use of `useEffect` with dependencies
* State-driven UI updates in React
* API handling with Axios
* Building responsive layouts with Tailwind
* Performance optimization using pagination

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve UI or add features, feel free to fork and contribute.

---

## 📌 Author

**Dhruv Aparnathi**

* GitHub: https://github.com/dhruvaparnathi
* LeetCode: https://leetcode.com/u/Dhruv_Aparnathi/

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
