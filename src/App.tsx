import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={['TypeScript', 'React']}/>
    </div>
  );
}

export default App;
