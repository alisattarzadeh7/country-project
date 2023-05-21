import React from "react";
import './App.css'
import {
   useLocation, useRoutes,
} from "react-router-dom";
const  CountryList  = React.lazy(()=>import("~/src/Pages/CountryList"));
import {AnimatePresence} from "framer-motion";
import AnimatedPage from "~/components/AnimatedPage.tsx";

function App() {

  const routes = useRoutes([
    {
      path: "/",
      element:<CountryList/>,
    },
    {
      path: "/country/:cca",
      element: <AnimatedPage key="/countryDetial" ><div>countryDetial</div></AnimatedPage>,
    },
  ]);
  const location = useLocation();
  return (
    <>
    <AnimatePresence mode="wait">
      { routes ? React.cloneElement(routes, { key: location.pathname }) : null}
        </AnimatePresence>
    </>
  )
}

export default App
