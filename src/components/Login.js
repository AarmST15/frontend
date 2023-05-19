import { useState } from 'react'
import '../styles/Login.css'

export default function Login() {

    const [members, setMembers] = useState([])
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    const fetchMembers = () => {
        fetch('http://127.0.0.1:8082/customer')
            .then(res => res.json())
            .then(
                (result) => {
                    setMembers(result)
                }
            )
    }

    const checkLogIn = (e) => {
        fetchMembers()
        e.preventDefault()

    }

    return (
        <>
            <div className="login-form">
                <form action=''>
                    <h3>Login</h3>
                    <label for="username">Username*</label>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}></input>
                    <label for="password">Password*</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}></input>
                    <button onClick={checkLogIn}>Log In</button>
                </form>
                {members.filter(member =>
                    member.cusName === name && member.cusPassword === password)
                    .map(checked => (
                        window.location.href = "/customer"
                    ))}

            </div>

        </>
    )
}