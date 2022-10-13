import { useState } from "react";
import { useQuery } from "react-query";
import todoService from "../../api/todoApi";
import { TaskData } from "../../api/types";
import Header from "../../common/components/Header";
import Panel from "../../common/components/Panel";
import Task from "../../common/components/Task";
import * as S from "./layout";

const Home = () => {
  const [tasks, setTasks] = useState<TaskData[]>();

  const { isLoading } = useQuery("getTasks", async () => {
    const data = await todoService.getTasks();
    setTasks(data.data);
  });

  return (
    <S.Container>
      <Panel />
      <Header />
      {!isLoading ? tasks?.map((task: TaskData) => <Task task={task} />) : null}
    </S.Container>
  );
};

export default Home;
