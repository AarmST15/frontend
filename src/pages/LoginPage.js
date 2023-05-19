import { useState } from "react";
import EnterForm from "../components/EnterForm";
import '../styles/LoginPage.css'

export default function LoginPage() {
    const [member, setMember] = useState(true)
    console.log(member)

    return (
        <>

            <div className='bg-choose'></div>
            <div className="login-container">

                <div className="login-choice">
                    <button onClick={(e) => {
                        e.preventDefault()
                        setMember(true)
                        console.log(member)
                    }}>
                        Login
                    </button>
                    /
                    <button onClick={(e) => {
                        e.preventDefault()
                        setMember(false)
                        console.log(member)
                    }}>
                        Register
                    </button>
                </div>

                <EnterForm member={member} />

            </div>


        </>
    )
}