import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

//Layout
import RootLayout from "../layouts/RootLayout.jsx";
// Pages
import { Home } from "../pages/Home";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
{/*       <Route path="/market" element={<Market />} />
      <Route path="/company" element={<Company />} /> */}
    </Route>
  )
);

