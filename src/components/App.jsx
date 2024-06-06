import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Country from "../pages/Country";
import RootLayout from "../layouts/RootLayout";
import { Box } from "@mui/material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="country/:id" element={<Country />} />
    </Route>
  )
);

function App() {
  return (
    <Box className="App">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
