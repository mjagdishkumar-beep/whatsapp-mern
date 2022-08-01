import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {
    const[{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/6b/20200905003027%21WhatsApp.svg/119px-WhatsApp.svg.png" alt="whatsapp" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login