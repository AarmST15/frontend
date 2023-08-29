import React from 'react'
import '../styles/PaymentPopup.css'

function PaymentPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button style={{textAlign:"end"}} className='close-btn' onClick={() => {
          props.setTrigger(false)
          props.emptyCart()
          }}>Submit</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default PaymentPopup