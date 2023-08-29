import { useState, useEffect } from 'react';
import '../styles/PieChartStatement.css'
import OrderChart from './OrderChart';
import OrderLineChart from './OrderLineChart';

export default function ChartStatement() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8082/cafeorder-statement')
            .then(res => res.json())
            .then(
                (result) => {
                    setOrders(result);
                }
            )
    }, [])

    return (
        orders.length > 0 ? (
            <div className="chart-ctn">
                <OrderChart />
                <OrderLineChart />
            </div>
        ) : null
    )
}

