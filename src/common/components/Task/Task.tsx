import { TaskData } from "../../../api/types";
import * as S from "./layout";
import { default as dayjs } from "dayjs";
import todoService from "../../../api/todoApi";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

interface Props {
  task: TaskData;
}

const Panel = ({ task }: Props) => {
  const client = useQueryClient();
  const navigate = useNavigate();
  const { label, description, start_date, end_date } = task;

  const deleteTask = useMutation(
    (value: { label: string }) => {
      return todoService.deleteTask(value.label);
    },
    {
      onSuccess: () => {
        client.invalidateQueries("getTasks");
        navigate("/");
      },
    }
  );

  const updateTask = useMutation(
    (value: { label: string; end_date: string }) => {
      return todoService.updateTask(value.label, { end_date: value.end_date });
    },
    {
      onSuccess: () => {
        client.invalidateQueries("getTasks");
        navigate("/");
      },
    }
  );

  return (
    <S.TaskElement key={label}>
      <S.TaskDate>
        <S.StartDate>{`Ajouté le: ${dayjs(start_date).format(
          "DD/MM/YYYY à HH:mm:ss"
        )}`}</S.StartDate>
        {end_date.length ? (
          <S.EndDate>{`Terminé le: ${dayjs(end_date).format(
            "DD/MM/YYYY"
          )}`}</S.EndDate>
        ) : (
          <S.EndDateButton
            onClick={() =>
              updateTask.mutate({
                label: label,
                end_date: dayjs(new Date())
                  .format("YYYY-MM-DDTHH:mm:ssZ")
                  .toString(),
              })
            }
          >
            Terminer
          </S.EndDateButton>
        )}
      </S.TaskDate>
      <S.TaskInfos>
        <S.TaskLabel>
          {label}
          <S.DeleteButton
            onClick={() =>
              deleteTask.mutate({
                label: label,
              })
            }
          >
            X
          </S.DeleteButton>
        </S.TaskLabel>
        <S.TaskDescription>{`Description: ${description}`}</S.TaskDescription>
      </S.TaskInfos>
    </S.TaskElement>
  );
};

export default Panel;
