import { useEffect, useState } from "react";

export default function StaffTable() {

    const [staffs, setStaffs] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8082/employee")
            .then(res => res.json())
            .then(
                (result) => {
                    setStaffs(result)
                })
    })

    return (
        <div className="staff-table">
            <table className="styled-table" width='1200'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {staffs.map(staff =>
                        <>
                            <tr>
                                <td>{staff.emId}</td>
                                <td>{staff.emName}</td>
                                <td>{staff.emEmail}</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}