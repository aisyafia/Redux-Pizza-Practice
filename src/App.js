import "./App.css";
import PizzaList from "./components/PizzaList";
import { useSelector } from "react-redux";
import { selectUser } from "./store/user/selectors";
import AddPizzaForm from "./components/AddPizzaForm";

function App() {
  const userToHi = useSelector(selectUser);

  return (
    <div>
      <div className="App">
        <p>Welcome, {userToHi}</p>
        <PizzaList />
      </div>
      <div>
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
