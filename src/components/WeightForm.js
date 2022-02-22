import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addWeightToApi } from "../redux/api";

const WeightForm = () => {
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addWeightToApi(weight));

    setWeight("");

    inputRef.current.focus();
  };

  return (
    <div className="form-container">
      <form className="grid" onSubmit={handleSubmit}>
        <div>
          <input
            ref={inputRef}
            type="number"
            placeholder="Entrer votre poids du jour"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <button>Ajouter</button>
        </div>
      </form>
    </div>
  );
};

export default WeightForm;
