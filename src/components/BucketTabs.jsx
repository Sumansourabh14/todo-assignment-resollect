import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "./TaskCard";

export default function BucketTabs() {
  const { data: tasks = [], isLoading, isError, error } = useTasks();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <p>Loading tasks...</p>;
  if (isError) return <p>Error loading tasks: {error.message}</p>;

  const buckets = {
    ongoing: tasks.filter((t) => !t.isCompleted && new Date(t.deadline) > now),
    success: tasks.filter((t) => t.isCompleted),
    failure: tasks.filter((t) => !t.isCompleted && new Date(t.deadline) <= now),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(buckets).map(([status, items]) => (
        <div key={status}>
          <h2 className="text-lg font-semibold capitalize mb-2">{status}</h2>
          <div className="space-y-2">
            {items.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
