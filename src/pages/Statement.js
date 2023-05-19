import { useState, useEffect } from 'react';
import '../styles/Statement.css';
import StaffHeader from '../components/StaffHeader';
import PieChartStatement from '../components/PieChartStatement';
import Button from '@mui/material/Button';

export default function Statement() {
    const [orders, setOrders] = useState([]);
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8082/cafeorder-statement')
            .then(res => res.json())
            .then((result) => {
                setOrders(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const total = orders.reduce((acc, order) => acc + order.total_price, 0);
        setTotalSum(total);
    }, [orders]);

    console.log(totalSum);

    return (
        <>
            <div className='bg-choose'></div>
            <StaffHeader />
            <Button 
                variant="outlined" 
                href='/staff-homepage' 
                className='text-black header-stye' 
                style={{ backgroundColor: 'rgb(255, 255, 255, 0.6)' ,color:'#FFF' ,borderColor:'#000', marginTop:'20px',marginLeft:'200px'}}>
                    <h5 style={{paddingTop:'10px'}}>Back </h5>
            </Button>
            <h1 id='stat-head'>Statement</h1>
            <div className="total-sum">
                <h3>Total income: {totalSum}</h3>
            </div>
            <PieChartStatement />
            <div className='statement-table'>
                <table className="styled-table" width='800' >
                    <thead>
                        <tr>
                            <th>Menu name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Total Orders</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.menuName}>
                                <td>{order.menuName}</td>
                                <td>{order.price}</td>
                                <td>{order.menuType}</td>
                                <td>{order.total_order}</td>
                                <td>{order.total_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}