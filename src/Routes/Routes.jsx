import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Appointment from "../Pages/Appointment/Appointment";
import AllGallery from "../Pages/AllGallery/AllGallery";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
           path: "/",
           element: <Home></Home>
        },{
          path: "/about",
          element: <About></About>
        },{
          path: "/services",
          element: <Services></Services>
        },{
          path: "/appointment",
          element: <Appointment></Appointment>
        },{
          path: "/gallery",
          element: <AllGallery></AllGallery>
        },{
          path:"/contact",
          element: <Contact></Contact>
        }
        
    ]
  },
]);