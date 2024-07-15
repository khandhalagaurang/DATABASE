import React from 'react'
import { app } from './firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

export default function GoogleAuth() {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const GooglePopUp = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div>
            <button onClick={GooglePopUp}>Google</button>
        </div>
    )
}