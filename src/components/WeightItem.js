import { useDispatch } from "react-redux";
import { deleteWeightFromApi } from "../redux/api";

const WeightItem = ({ info }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWeightFromApi(info.id));
  };

  return (
    <tr>
      <td>{info.createdAt}</td>
      <td>{info.weight}</td>
      <td>
        <span className="delete-btn" role="button" onClick={handleDelete}>
          ×
        </span>
      </td>
    </tr>
  );
};

export default WeightItem;
