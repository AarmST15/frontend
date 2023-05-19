import React from "react";
import { useState, useEffect } from 'react';
import '../styles/CustomerList.css'

export default function CustomerList() {

    const [customers, setCustomer] = useState([]);
    let id;
    let deleteURL = "http://127.0.0.1:8082/customer/delete/"

    useEffect(() => {
        fetch("http://127.0.0.1:8082/customer")
            .then(res => res.json())
            .then(
                (result) => {
                    setCustomer(result);
                }
            )
    }, [])

    const deleteMember = (e) => {
        e.preventDefault()
        const deleteid = {
            cusId: id
        }
        console.log(deleteid)
        console.log(JSON.stringify(deleteid))
        fetch(deleteURL + id, { method: 'DELETE', body: JSON.stringify(deleteid), headers: { "content-type": "application/json" } })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <table className="styled-table" width='600'>
                <thead>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Point</th>
                    <th></th>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        <>
                            <tr>
                                <td>
                                    {customer.cusId}
                                </td>
                                <td>
                                    {customer.cusName}
                                </td>
                                <td>
                                    {customer.cusEmail}
                                </td>
                                <td>
                                    {customer.cusPoint}
                                </td>
                                <td>
                                    <button key={customer.cusId} className="del-btn" onClick={(e) => {
                                        console.log(customer.cusId)
                                        id = customer.cusId
                                        alert('Deleting this member (cusId:' + id + ')')
                                        deleteMember(e)
                                        window.location.reload(false)
                                    }}>
                                        <b>Delete</b>
                                    </button>
                                </td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>

        </>
    )
}