import { useState } from "react";
import '../styles/AddStaffForm.css'

export default function AddStaffForm() {

    const [id, setId] = useState(0)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Submit = () => {
        const url = "http://127.0.0.1:8082/employee/"
        const new_staff = {
            emId: id, 
            emName: name, 
            emEmail: email, 
            emPassword: password
        }
        console.log(new_staff)
        console.log(JSON.stringify(new_staff))
        fetch(url + 'formsave', {
            method: 'POST',
            body: JSON.stringify(new_staff),
            headers: { "content-type": "application/json" }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
        window.location.reload(false)
    }
    

    return (
        <>
            <div className="information">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">
                            Staff ID
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter your ID"
                            onChange={(event) => {
                                setId(event.target.value)
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                    </div>


                    <button className="btn btn-success" onClick={Submit}>Add</button>

                </form>
            </div>
        </>
    )
}