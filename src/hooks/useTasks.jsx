import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/tasksApi";

export function useTasks() {
  return useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });
}
