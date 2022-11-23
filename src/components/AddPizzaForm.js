import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/slice";

const AddPizzaForm = () => {
  const [pizzaName, setPizzaName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    // dispatch(addPizza({ name: pizzaName, description: description }));
    console.log("new pizza", pizzaName, description);
  };
  return (
    <div>
      <form>
        <h3>Add new pizza: </h3>
        <p>
          What is your pizza called? Please also include a brief description:
        </p>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={pizzaName}
              onChange={(event) => setPizzaName(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Description:{" "}
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </p>
        <p>
          <button
            type="button"
            onClick={() => {
              dispatch(addPizza({ pizzaName, description }));
              setPizzaName(" ");
              setDescription(" ");
            }}
          >
            Click to submit new pizza!
          </button>
        </p>
      </form>
    </div>
  );
};

export default AddPizzaForm;
