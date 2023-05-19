import React from 'react'
import '../styles/PaymentPopup.css'

function PaymentPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => {
          props.setTrigger(false)
          props.emptyCart()
          }}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default PaymentPopup