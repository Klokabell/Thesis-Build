import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSignals } from "@preact/signals-react/runtime";

const RootLayout = () => {
  useSignals();

  return (
    <div className="root-layout">
      <nav>
        <Header />
        <main>
          <Outlet />
        </main>
      </nav>
    </div>
  );
};

export default RootLayout;
