import { useState, useEffect } from 'react';
import '../styles/CardOrder.css'

export default function CardOrder({onclick}) {

    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8082/customer")
            .then(res => res.json())
            .then(
                (result) => {
                    setCustomer(result);
                }
            )
    }, [])

    return (
        <>
            {customers.map(customer =>
                <>
                    <div className="card-order-container">
                        <button onClick={onclick}>
                            <div className='order-info'>
                                <div className="order-subj">
                                    <p>Order</p>
                                </div>
                                <div className='order-number'>
                                    {customer.cusId}
                                </div>
                            </div>
                            <div className="username-card">
                                <p>{customer.cusName}</p>
                            </div>
                        </button>
                    </div>
                </>
            )}
        </>

    )
}