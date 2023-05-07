
import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home/Home';
import { Map } from '../Pages/Map/Map';
import { Contact } from '../Pages/Contact/Contact';
import { Blog } from "../Pages/Blog/Blog";
import { PageNotFound } from '../Pages/PageNotFound/PageNotFound';

export const Routing = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='map' element={<Map />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
};