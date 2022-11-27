import { routes } from "./Components/Routes/Routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App yatra-font">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
