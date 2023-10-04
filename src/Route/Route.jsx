import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsCard.jsx/NewsDetails";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
                loader:()=>fetch('/news.json'),
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<NewsDetails></NewsDetails>
            }
        ]
      },
])


export default route;