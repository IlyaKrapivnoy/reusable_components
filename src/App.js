import "./App.css";
import Accordion from "./components/accordion";
import Editable from "./components/editable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion title="Product Info" content="This is my content" />
        <Editable />
      </header>
    </div>
  );
}

export default App;
