import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import MenuItems from "./MenuItems";
import {MenuOutlined} from "@mui/icons-material";

const Header = () => {
    const [active,setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }
    return (
        <div className={'fixed w-full text-blue50 justify-between p-4 ' +
            'items-center'}>
            <nav className={'float-right'}>
                <div className={'absolute left-1'}>
                    <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
                </div>
                <ul className={'hidden md:flex gap-8 p6 uppercase p-2 bg-white/10'}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/Contact"}>Contact me</Link></li>
                </ul>
                <MenuItems showMenu={showMenu} active={active}/>
            </nav>
        </div>
    );
};

export default Header;