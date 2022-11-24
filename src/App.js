import { routes } from "./Components/Routes/Routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </div>
  );
}

export default App;
