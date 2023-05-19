import React, { useState, useEffect } from "react";
import "../styles/OrderMember.css";
import StaffHeader from "../components/StaffHeader";
import "../styles/CardOrder.css";
import Button from '@mui/material/Button';


export default function OrderMember() {
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState("finished");

    useEffect(() => {
        fetch("http://127.0.0.1:8082/ordercafe")
            .then((res) => res.json())
            .then((result) => {
                setOrder(result);
            });
    }, []);

    const updateStatus = (orderId) => {
        const up_state = {
            orderId: orderId,
            orderStatus: status,
        };
        fetch("http://127.0.0.1:8082/ordercafe/update/" + orderId, {
            method: "PUT",
            body: JSON.stringify(up_state),
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        window.location.reload(false)
    };

    return (
        <>
            <div className="bg-choose"></div>
            <StaffHeader />
            <Button 
                variant="outlined" 
                href='/staff-homepage' 
                className='text-black header-stye' 
                style={{ backgroundColor: 'rgb(255, 255, 255, 0.6)' ,color:'#FFF' ,borderColor:'#000',marginTop:'20px',marginLeft:'200px'}}>
                    <h5 style={{paddingTop:'10px'}}>Back </h5>
            </Button>

            <div className="order-list">
                <h3>Order List</h3>
                <table className="styled-table" width="900">
                    <thead>
                        <tr>
                            <th>orderId</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Menu</th>
                            <th>Table</th>
                            <th>Unit</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order
                            .filter((o) => o.orderStatus === "unfinished")
                            .map((o) => (
                                <tr key={o.orderId}>
                                    <td>{o.orderId}</td>
                                    <td>{o.orderDate}</td>
                                    <td>{o.cusName}</td>
                                    <td>{o.menuName}</td>
                                    <td>{o.noTable}</td>
                                    <td>{o.unit}</td>
                                    <td>{o.total}</td>
                                    <td>
                                        <button onClick={() => {
                                            setStatus("finished")
                                            updateStatus(o.orderId)
                                        }}>
                                            {o.orderStatus}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className="order-list">
                <h3>History List</h3>
                <table className="styled-table" width="900">
                    <thead>
                        <tr>
                            <th>orderId</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Menu</th>
                            <th>Table</th>
                            <th>Unit</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order
                            .filter((o) => o.orderStatus === "finished")
                            .map((o) => (
                                <tr key={o.orderId}>
                                    <td>{o.orderId}</td>
                                    <td>{o.orderDate}</td>
                                    <td>{o.cusName}</td>
                                    <td>{o.menuName}</td>
                                    <td>{o.noTable}</td>
                                    <td>{o.unit}</td>
                                    <td>{o.total}</td>
                                    <td>{o.orderStatus}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}