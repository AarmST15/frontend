import {
    BarChart,
    Bar,
    Tooltip,
    Line,
    LineChart,
    CartesianGrid, XAxis, YAxis
} from "recharts";
import { useState, useEffect } from 'react';
import '../styles/PieChartStatement.css'

export default function PieChartStatement() {
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

    const filteredData = orders.map(order => {
        return {
            name: order.menuName,
            value: order.total_price
        };
    });

    const filteredDataOrder = orders.map(order => {
        return {
            name: order.menuName,
            value: order.total_order
        };
    });

    return (
        orders.length > 0 ? (
            <div className="chart-ctn">
                <div>
                    <div className="graph-title">Total Sales</div>
                    <div className='graph-ctn'>
                        <BarChart width={500} height={500} data={filteredData}>
                            <XAxis dataKey="name" stroke="#000" />
                            <YAxis stroke="#000" />
                            <CartesianGrid stroke="#1425" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#d17102" />
                        </BarChart>
                    </div>
                </div>

                <div className="line-chart">
                    <div className="graph-title">Total Orders</div>
                    <div className='graph-ctn'>
                        <LineChart width={530} height={500} data={filteredDataOrder}>
                            <Line type="monotone" dataKey="value" stroke="#d17102" />
                            <CartesianGrid stroke="#1425" />
                            <XAxis dataKey="name" stroke="#000" />
                            <YAxis stroke="#000" />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>

            </div>
        ) : null
    )
}

