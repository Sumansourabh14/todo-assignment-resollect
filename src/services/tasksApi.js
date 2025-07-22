import axios from "axios";

const API_URL = "http://localhost:3001/tasks";

export async function fetchTasks() {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function createTask(data) {
  const res = await axios.post(API_URL, {
    ...data,
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  return res.data;
}

export async function updateTask(task) {
  const res = await axios.put(`${API_URL}/${task.id}`, {
    ...task,
    updatedAt: new Date().toISOString(),
  });
  return res.data;
}

export async function deleteTask(id) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
