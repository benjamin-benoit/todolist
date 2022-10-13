import { useNavigate } from "react-router-dom";
import * as S from "./layout";

const Panel = () => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate("/taskForm")}>
      Ajouter une tâche
    </S.Container>
  );
};

export default Panel;
