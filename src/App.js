import './App.css';
import WeightList from './components/WeightList';
import WeightForm from './components/WeightForm';
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <main>
        <section>
          <h1>Weight Daily Journal</h1>
        </section>
        <section>
          <WeightForm />
        </section>
        <section>
          <WeightList />
        </section>
      </main>
    </Provider>
  );
}

export default App;
