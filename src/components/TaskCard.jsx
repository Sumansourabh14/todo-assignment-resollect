import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { deleteTask, updateTask } from "../services/tasksApi";

export default function TaskCard({ task }) {
  const queryClient = useQueryClient();
  const diff = dayjs(task.deadline).diff(dayjs(), "minute");
  const overdue = diff < 0;

  const update = useMutation({
    mutationFn: updateTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });
  const remove = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const riskLevel = overdue
    ? "🔴"
    : diff <= 60
    ? "🟡"
    : diff <= 1440
    ? "🟢"
    : "✅";

  return (
    <div className="p-3 border rounded shadow-sm bg-white">
      <h3 className="font-medium">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-xs text-gray-400">
        {overdue ? `Overdue by ${-diff} mins` : `Due in ${diff} mins`} | Risk:{" "}
        {riskLevel}
      </p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() =>
            update.mutate({ ...task, isCompleted: !task.isCompleted })
          }
          className="text-xs px-2 py-1 bg-green-200 rounded"
        >
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => remove.mutate(task.id)}
          className="text-xs px-2 py-1 bg-red-200 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
