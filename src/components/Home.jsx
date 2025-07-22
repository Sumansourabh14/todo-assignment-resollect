import BucketTabs from "./BucketTabs";
import TaskForm from "./TaskForm";

export default function Home() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Smart Todo List</h1>
      <TaskForm />
      <BucketTabs />
    </div>
  );
}
