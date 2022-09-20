import { Routes, Route } from "react-router-dom";

import Home  from '../pages/Home';
import  About  from '../pages/About';
import Projects  from '../pages/Projects';
import Certificates  from '../pages/Certificates';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Certificates" element={<Certificates  />} />
        </Routes>
    )
}
