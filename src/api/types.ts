export type TaskData = {
  label: string;
  description: string;
  start_date: string;
  end_date: string;
};

export type AddTaskData = Omit<TaskData, 'end_date'>;

export type UpdateTaskData = Pick<TaskData, 'end_date'>;