import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'

function SendMessage({ scroll }) {
    //Manejo el estado de los mensajes
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        
        //Obtengo el id, el nombre y la foto del usuario
        const { uid, photoURL, displayName } = auth.currentUser

        //Agrego a firestore los datos
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input required className= "inputSendMsg"  placeholder='Escribir mensaje...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <input className="buttonSendMsg" type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default SendMessage