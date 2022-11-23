import { useSelector } from "react-redux";
import { selectAllPizzas } from "../store/pizzas/selectors";
const PizzaList = () => {
  const allPizzas = useSelector(selectAllPizzas);
  return (
    <div>
      <h1>Pizza Frenzy!!!</h1>
      <p>
        <em>What's bakin' good lookin'?</em>
      </p>
      <div>
        {allPizzas.map((pizza) => {
          return (
            <ul>
              <li>
                {pizza.id} -- {pizza.name} -- {pizza.description}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;
