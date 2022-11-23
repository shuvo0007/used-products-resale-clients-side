import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Outlets/Home/Home";
import Main from "../Layouts/Outlets/Main/Main";

export const routes  = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Main></Main>
      }
    ]
  }
])