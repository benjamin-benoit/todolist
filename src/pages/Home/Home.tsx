import { useState } from "react";
import { useQuery } from "react-query";
import todoService from "../../api/todoApi";
import { TaskData } from "../../api/types";
import Header from "../../common/components/Header";
import Panel from "../../common/components/Panel";
import Task from "../../common/components/Task";
import * as S from "./layout";

const Home = () => {
  const { data, isLoading } = useQuery("getTasks", async () => {
    return await todoService.getTasks();
  });

  return (
    <S.Container>
      <Panel />
      <Header />
      {!isLoading && data
        ? data?.data?.map((task: TaskData) => <Task task={task} />)
        : null}
    </S.Container>
  );
};

export default Home;
