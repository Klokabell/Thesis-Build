import { useSignals } from "@preact/signals-react/runtime";
import Header from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";

const App = () => {
  useSignals();

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
