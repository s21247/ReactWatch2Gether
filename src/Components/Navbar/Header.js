import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import MenuItems from "./MenuItems";
import {MenuOutlined} from "@mui/icons-material";
import firebase from "firebase/compat/app";

const Header = ({setUser,user}) => {
    const [active,setActive] = useState(false);
    const auth = firebase.auth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user)
                setUser(user)
            else
                setUser(null)
        })
        return unsubscribe;
    }, [])

    const showMenu = () => {
        setActive(!active);
    }

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error)
        }
    }
    const signOut = async () => {
            try {
                await firebase.auth().signOut();
            }catch(error){
                console.error(error)
            }
        }

    return (
        <div className={'fixed w-full text-blue50 justify-between p-4 ' +
            'items-center'}>
            <nav className={'float-right'}>
                <div className={'absolute left-1'}>
                    <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
                </div>
                <ul className={'hidden md:flex gap-8 p6 uppercase p-2 bg-white/10'}>
                    <li><Link to={"/"}>home</Link></li>
                    <li><Link to={"/Contact"}>Contact me</Link></li>
                    {!user ? (
                        <li><button onClick={signInWithGoogle}>Login</button></li>
                    ) : (
                        <li><button onClick={signOut}>Logout</button></li>
                    )
                    }
                </ul>
                <MenuItems showMenu={showMenu} active={active}/>
            </nav>
        </div>
    );
};

export default Header;