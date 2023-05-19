import React, { useState } from 'react';
import '../styles/Menu.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import MenuByType from './MenuByType';
import ShoppingCart from '../components/ShoppingCart';
import Cart from '../components/Cart';

function Menu() {

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [num, setNum] = useState(0);
  const [cusName, setCusName] = useState("");
  const [selects, setSelects] = useState([]);


  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomNum = () => {
    setNum(randomNumberInRange(100, 1000));
  };

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    addOrder(item)
  }

  const emptyCart = () => {
    setCart([])
  }

  const addOrder = (item) => {
    getRandomNum()
    const url = "http://127.0.0.1:8082/ordercafe/"
    const new_order = {
      orderId: num,
      cusName: cusName,
      menuName: item.menuName,
      noTable: parseInt(selects),
      unit: 1,
      total: item.price,
      orderStatus: "unfinished"
    }
    console.log(cusName)
    console.log(new_order)
    console.log(JSON.stringify(new_order))
    fetch(url + "formsave", {
      method: 'POST',
      body: JSON.stringify(new_order),
      headers: { "content-type": "application/json" }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='page'>
      <NavBar />
      <header>
      <div className='p-3 text-center order-head'>
        <h1 className='mb-3'>Online orders</h1>
        <h6 className='mb-3'>Please choose the menu you want to eat and sit back and do your work and we will serve you.</h6>        
      </div>

    </header>      

      <div className='cus-id'>
        <label>Enter your username to order</label>
        <input type='text'
          onChange={(e) => (
            setCusName(e.target.value))}
          placeholder='your username' />
      </div>

      <div className='select-table'>
        <label>Select your table</label>
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option></option>
          <option value='1' >Table 1</option>
          <option value='2'>Table 2</option>
          <option value='3'>Table 3</option>
          <option value='4'>Table 4</option>
          <option value='5'>Table 5</option>
          <option value='6'>Table 6</option>
        </select>
      </div>


      <ShoppingCart setShow={setShow} size={cart.length} />
      {
        show ? (
          <MenuByType handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} emptyCart={emptyCart} orderId={num} cusName={cusName} />
        )
      }
      <br></br>
      <Footer />
    </div>
  );
}

export default Menu;