import { createBrowserRouter } from "react-router-dom";
import Blog from "../Layouts/Outlets/Blog/Blog";
import Asus from "../Layouts/Outlets/Category/Asus/Asus";
import Dell from "../Layouts/Outlets/Category/Dell/Dell";
import Hp from "../Layouts/Outlets/Category/Hp/Hp";
import Home from "../Layouts/Outlets/Home/Home";
import Main from "../Layouts/Outlets/Main/Main";
import LogIn from "../Layouts/Outlets/logIn/LogIn";
import Registration from "../Layouts/Outlets/Registration/Registration";
import Private from "../Layouts/Outlets/Private/Private";
import NotFound from "../Errors/NotFound";
import AddProduct from "../Layouts/Outlets/Category/AddProduct/AddProduct";
import MyProducts from "../Layouts/Outlets/Category/MyProducts/MyProducts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/asus",
        element: <Asus></Asus>,
      },
      {
        path: "/hp",
        element: <Hp></Hp>,
      },
      {
        path: "/dell",
        element: <Dell></Dell>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/private/addProduct",
        element: (
          <Private>
            <AddProduct></AddProduct>
          </Private>
        ),
      },
      {
        path: "/private/myProducts",
        element: (
          <Private>
            <MyProducts></MyProducts>
          </Private>
        ),
        loader: () => fetch(`http://localhost:5000/laptop`),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
