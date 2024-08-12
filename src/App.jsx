import { useSignals } from "@preact/signals-react/runtime";
import Header from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";

const App = () => {
  useSignals();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
};

export default App;
