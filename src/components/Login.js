import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'

function Login() {
    const [state, dispach] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispach({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack logo"/>
                <h1>Sign in</h1>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
