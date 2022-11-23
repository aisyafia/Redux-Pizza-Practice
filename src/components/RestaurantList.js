import { useSelector } from "react-redux";
import { selectResto } from "../store/restaurants/selectors";
const RestaurantList = () => {
  const restos = useSelector(selectResto);

  return (
    <div>
      <h3>Restaurants: </h3>
      <div>
        {restos.map((resto) => {
          return (
            <ul>
              <li>{resto.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
