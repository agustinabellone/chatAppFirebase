import React from "react";
import firebase from "firebase";
import { auth } from "../firebase.js";

function SignIn() {

  //Ingreso con Google
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      console.log("Todo ok")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="signInContainer">
      <h1>BIENVENIDOS</h1>
      <h2>Para ver y formar parte del chat debe ingresar con su cuenta de Google.</h2>
      <input className="buttonSignInSignOut" onClick={signInWithGoogle} type="submit" value="Ingresar" />
    </div>
  );
}

export default SignIn;
