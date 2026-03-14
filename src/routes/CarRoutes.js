import { Route } from "react-router-dom";

import Cars from "../views/Cars";
import CarDetails from "../views/CarDetails";

const carRoutes = (

    <>

        <Route path="/" element={

            <Cars></Cars>

        } />

        <Route path="/car/:slug" element={<CarDetails />} />

    </>

);

export default carRoutes;