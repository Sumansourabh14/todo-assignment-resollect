# Smart Todo App

A modern, responsive Todo application built with **React + Vite**, styled using **Tailwind CSS**, and powered by a lightweight **mock backend using JSON Server**.

The UI is clean, accessible, and snappy.

---

## Tech Stack

- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS
- **State Management**: React hooks (`useState`, `useEffect`)
- **Data Fetching**: Tanstack Query
- **Backend**: JSON Server (for mocking API)
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sumansourabh14/todo-assignment-resollect
cd todo-assignment-resollect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Mock API (JSON Server)

If you're running the API locally:

```bash
npm run json
#OR
npx json-server --watch db.json --port 3001
```

Make sure `db.json` is in the root directory:

```json
{
  "tasks": []
}
```

### 4. Start the Frontend

```bash
npm run dev
```

Visit the app at: [http://localhost:5173](http://localhost:5173)

## 📦 Deployment

### Frontend – Vercel

Deployed on **Vercel**  
🔗 https://smart-todo.vercel.app

To deploy:

1. Push your code to GitHub
2. Import the repo into [Vercel](https://vercel.com/)
3. Set build settings:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`

## 📁 Project Structure

```
smart-todo/
├── public/
├── src/
│   ├── components/
│   │   ├── BucketTabs.jsx
│   │   ├── Home.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```
