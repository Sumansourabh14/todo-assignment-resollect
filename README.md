# 🧠 Smart Todo App

A modern, responsive Todo application built with **React + Vite**, styled using **Tailwind CSS** and **shadcn/ui**, and powered by a lightweight **mock backend using JSON Server**.

This app categorizes your tasks intelligently based on their content — for example, tasks containing time-related keywords like "at 5pm" or "tomorrow" are tagged automatically. The UI is clean, accessible, and snappy with zero page reloads.

---

## 🚀 Tech Stack

- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: React hooks (`useState`, `useEffect`)
- **Backend**: JSON Server (for mocking API)
- **Deployment**: Vercel

---

## 🧪 Innovative Feature

### 🔎 Smart Task Categorization

The app intelligently categorizes tasks based on their content:

- **Time-based**: Words like "5pm", "tomorrow", "in 2 hours"
- **Urgency-based**: Words like "urgent", "ASAP"
- **Meeting-related**: Words like "call", "meeting", "zoom"

This categorization updates in real-time, making it easier to filter and prioritize your day without manually tagging tasks.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sumansourabh14/todo-assignment-resollect
cd smart-todo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Mock API (JSON Server)

If you're running the API locally:

```bash
npm run serve:api
# OR
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
🔗 https://smart-todo.vercel.app (replace with your actual link)

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
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   ├── RiskMeter.tsx
│   ├── utils/
│   │   └── categorize.ts
│   ├── App.tsx
│   └── main.tsx
├── db.json
├── package.json
├── tailwind.config.ts
└── README.md
```
