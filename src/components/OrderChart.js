import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
} from 'recharts';
import '../styles/PieChartStatement.css';

export default function PieChartStatement() {
    const [orders, setOrders] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const currentMonth = new Date().getMonth() + 1;

    useEffect(() => {
        fetch('http://127.0.0.1:8082/ordercafe')
            .then((res) => res.json())
            .then((result) => {
                setOrders(result);
            });
    }, []);

    useEffect(() => {
        setSelectedMonth(currentMonth.toString());
    }, [currentMonth]);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const filteredData = orders
        .filter((order) => {
            const orderMonth = new Date(order.orderDate).getMonth() + 1;
            return selectedMonth === '' || orderMonth.toString() === selectedMonth;
        })
        .reduce((acc, order) => {
            const menuName = order.menuName;
            const totalSales = (acc[menuName] || 0) + order.total;
            acc[menuName] = totalSales;
            return acc;
        }, {});

    const chartData = Object.keys(filteredData).map((menuName) => ({
        name: menuName,
        sales: filteredData[menuName],
    }));

    const months = [
        { value: '', label: 'All Months' },
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'August' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
    ];

    return (
        orders.length > 0 ? (
            <div className="chart-ctn">
                <div>
                    
                    <div className="graph-title">Total Sales</div>
                    <div className="filter-container">
                        <label htmlFor="month" style={{color:'#fff'}}>Select Month:</label>
                        <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                            {months.map((month) => (
                                <option
                                    key={month.value}
                                    value={month.value}
                                    selected={currentMonth.toString() === month.value}
                                >
                                    {month.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="graph-ctn">
                        <div>
                            <h6 style={{color:'#d17102'}}>Total</h6>
                        </div>
                    
                        <BarChart width={500} height={500} data={chartData}>
                            <XAxis dataKey="name" stroke="#000" />
                            <YAxis stroke="#000" />
                            <CartesianGrid stroke="#1425" />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#d17102" />
                        </BarChart>
                        <div>
                            <h6 className="graph-btn">Menu</h6>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
}




