import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//Layout
import RootLayout from "./RootLayout.jsx";
// Pages
import { Home } from "./pages/Home.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
{/*   <Route path="/company" element={<Company />} /> */}
    </Route>
  )
);
