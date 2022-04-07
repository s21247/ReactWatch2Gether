import React from 'react';
import {Link} from "react-router-dom";
import {Close} from "@mui/icons-material";

const MenuItems = ({showMenu,active}) => {
    return (
        <div>
            <ul className={active ? 'flex-col flex items-center fixed' +
                ' inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg' +
                ' gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <Close onClick={showMenu}/>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Contact"}>Contact me</Link></li>
            </ul>
        </div>
    );
};

export default MenuItems;