import { RouterProvider } from "react-router-dom";
import { useSignals } from "@preact/signals-react/runtime";
import { router } from "./Routing/router.jsx";


const App = () => {
  useSignals();


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
