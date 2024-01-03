import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksProvider from "./state-management/TasksProvider";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
      <TasksProvider>
        <NavBar />
        <HomePage />
        <Counter />
      </TasksProvider>
  );
}

export default App;
