import axios from "axios";
import { AddTaskData, TaskData, UpdateTaskData } from "./types";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:9000/v1',
})

const getTasks = () => {
  return instance.get<TaskData[]>("/tasks");
};
const getTask = (label: string) => {
  return instance.get<TaskData>(`/tasks/${label}`);
};
const addTask = (data: AddTaskData) => {
  return instance.post("/tasks", data);
};
const deleteTask = (label: string) => {
  return instance.delete(`/tasks/${label}`);
};
const updateTask = (label: string, data: UpdateTaskData) => {
  return instance.put(`/tasks/${label}`, data);
};

const todoService = {
  getTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
};

export default todoService;