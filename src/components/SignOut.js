import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div className = "signOutContainer">   
            <input className="buttonSignInSignOut" onClick={() => auth.signOut()} type="submit" value="Salir del Chat" />
        </div>
    )
}

export default SignOut