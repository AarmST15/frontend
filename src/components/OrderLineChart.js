import {
    Tooltip,
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis
} from "recharts";
import { useState, useEffect } from 'react';
import '../styles/PieChartStatement.css';

export default function ChartStatement() {
    const [orders, setOrders] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [ordersSum, setOrdersSum] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8082/cafeorder-statement')
            .then(res => res.json())
            .then(
                (result) => {
                    setOrdersSum(result);
                }
            )
    }, [])


    useEffect(() => {
        fetch('http://127.0.0.1:8082/ordercafe')
            .then(res => res.json())
            .then((result) => {
                setOrders(result);
            });
    }, []);

    const filteredDataOrderSum = ordersSum.map(order => {
        return {
            name: order.menuName,
            value: order.total_order
        };
    });

    const filteredDataOrder = orders.reduce((acc, order) => {
        const orderDate = order.orderDate.split('T')[0];
        const orderMonth = new Date(orderDate).getMonth() + 1;
        const menuName = order.menuName;

        const key = `${orderMonth}-${menuName}`;

        if (!acc[key]) {
            acc[key] = {
                month: orderMonth,
                [menuName]: 0,
            };
        }

        acc[key][menuName] += 1;

        return acc;
    }, {});

    const chartData = Object.values(filteredDataOrder).sort((a, b) => a.month - b.month);

    const menuOptions = [...new Set(orders.map(order => order.menuName))];

    const handleMenuChange = (event) => {
        setSelectedMenu(event.target.value);
    };

    const filteredChartData = chartData.filter(data => data[selectedMenu] !== undefined);

    return (
        orders.length > 0 ? (
            <div className="chart-ctn">
                <div className="line-chart">
                    <div className="graph-title">Total Orders</div>
                    <div className="filter-container">
                        <label style={{color:'#fff'}}>Select Menu:</label>
                        <select value={selectedMenu} onChange={handleMenuChange}>
                            <option value="">All Menus</option>
                            {menuOptions.map((menu, index) => (
                                <option key={index} value={menu}>{menu}</option>
                            ))}
                        </select>
                    </div>
                    <div className="graph-ctn">
                    <div>
                            <h6 style={{color:'#d17102'}}>Unit</h6>
                        </div>
                        {selectedMenu === '' ? (
                                <LineChart width={530} height={500} data={filteredDataOrderSum}>
                                    <Line type="monotone" dataKey="value" stroke="#d17102" />
                                    <CartesianGrid stroke="#1425" />
                                    <XAxis dataKey="name" stroke="#000" />
                                    <YAxis stroke="#000" />
                                    <Tooltip />
                                </LineChart>
                        ) : (
                            <LineChart width={530} height={500} data={filteredChartData}>
                                <Line
                                    type="monotone"
                                    dataKey={selectedMenu}
                                    stroke={`#${((Math.random() * 0xffffff) << 0).toString(16)}`}
                                    strokeWidth={3}
                                />
                                <CartesianGrid stroke="#1425" />
                                <XAxis dataKey="month" stroke="#000" />
                                <YAxis stroke="#000" />
                                <Tooltip />
                            </LineChart>
                        )}
                        <div>
                            <h6 className="graph-btn">Month</h6>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
}




