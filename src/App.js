import Section from "./Components/Navbar/Section";
import Header from "./Components/Navbar/Header";
import React, {useEffect, useState} from "react";
import 'firebase/compat/auth'
import 'firebase/firestore'
import Channel from "./Components/Chat/Channel";
import firebase from "firebase/compat/app";

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})
const auth = firebase.auth();


function App() {
    const [user, setUser] = useState(auth.currentUser);

    // const signInWithGoogle = async () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.useDeviceLanguage();
    //     try {
    //         await auth.signInWithPopup(provider);
    //     }catch (error){
    //         console.error(error)
    //     }
    //}
    // const signOut = async () => {
    //     try {
    //         await firebase.auth().signOut();
    //     }catch(error){
    //         console.error(error)
    //     }
    // }
    return (
        <>
            <Header setUser={setUser} user={user}/>
                    <Section/>
                    {/*<Channel user={user} db={''}/>*/}
        </>
    )
}

export default App;
