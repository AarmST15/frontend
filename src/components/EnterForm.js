import Register from "./Register"
import Login from './Login'

export default function EnterForm({member}) {
    if (member) {
        return (
            <Login />
        )
    }
    if (!member) {
        return (
            <Register/>
        )
    }
}