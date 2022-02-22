import WeightItem from "./WeightItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUserWeightFromApi } from "../redux/api";

const TaskList = () => {
  const weightInfos = useSelector((state) => {
    return state.userWeight.weightInfos;
  });

  const isLoading = useSelector((state) => state.userWeight.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserWeightFromApi());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Jour</th>
            <th>Poids</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {weightInfos.map((info) => (
            <WeightItem key={info.id} info={info} />
          ))}
        </tbody>
        <tfoot>
          <tr>{isLoading && <td aria-busy="true">Chargement en cours...</td>}</tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TaskList;
