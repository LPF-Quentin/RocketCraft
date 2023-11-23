import { createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase-config"


export const UserContext = createContext()

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    
    const [modalState, setModalState] = useState({
        signUp: true,
        signIn: false
    })

    const toggleModals = modal => {
        if(modal === "signIn") {
            setModalState({
                signUp: false,
                signIn: true
            })
        }
        if(modal === "signUp") {
            setModalState({
                signUp: true,
                signIn: false
            })
        }
        if(modal === "close") {
            setModalState({
                signUp: false,
                signIn:false
            })
        }
    }

    return (
        <UserContext.Provider value={{modalState, toggleModals, signUp}}>
            {props.children}
        </UserContext.Provider>
    )
}