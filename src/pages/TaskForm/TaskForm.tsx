import { useMutation, useQueryClient } from "react-query";
import todoService from "../../api/todoApi";
import { AddTaskData } from "../../api/types";
import { useFormik } from "formik";
import { TaskSchema } from "./schema";
import { default as dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(todoService.addTask, {
    onSuccess: () => {
      client.invalidateQueries("getTasks");
      navigate("/");
    },
  });

  const formValidation = (task: AddTaskData) => {
    mutate(task);
  };

  const formik = useFormik({
    initialValues: { label: "", description: "" },
    onSubmit: (values) => {
      formValidation({
        ...values,
        start_date: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ssZ").toString(),
      });
    },
    validationSchema: TaskSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="label"
        name="label"
        onChange={formik.handleChange}
        value={formik.values.label}
      />
      <input
        type="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
