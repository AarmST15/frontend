import { useState } from "react"

export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Enter = (e) => {
        e.preventDefault()
        const url = "http://127.0.0.1:8082/customer/"
        const new_user = {
            cusId: Math.floor(Math.random() * 100) + 3,
            cusName: username,
            cusEmail: email,
            cusPassword: password,
            cusPoint: 0
        }
        console.log(new_user)
        console.log(JSON.stringify(new_user))
        fetch(url + "formsave", {
            method: 'POST',
            body: JSON.stringify(new_user),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.href = "/customer"
    }

    return (
        <>
            <div className="login-form">
                <form action=''>
                    <h3>Register</h3>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}>
                    </input>

                    <label for="email">Email</label>
                    <input
                        type="text"
                        placeholder="email"
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}>
                    </input>

                    <label for="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}>
                    </input>

                    <button onClick={Enter}>Register</button>
                </form>

            </div>

        </>
    )
}