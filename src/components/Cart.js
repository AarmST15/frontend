import { useEffect, useState } from "react"
import '../styles/Cart.css'
import PaymentPopup from "./PaymentPopup"

export default function Cart({ cart, setCart, emptyCart, orderId, cusName }) {

    const [price, setPrice] = useState(0)
    const [oriPrice, setOriPrice] = useState(0)
    const [popup, setPopup] = useState(false)
    const [qrcode, setQRCode] = useState("")
    const [cusPoint, setCusPoint] = useState(0);
    const [usePoint, setUsePoint] = useState(false)
    const [image, setImage] = useState("")

    let URL = "http://127.0.0.1:8082"

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.onload = () => {
          setImage(reader.result);
          const formData = new FormData();
          formData.append("image", file);
          fetch("http://127.0.0.1:8082/saveImage", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        };
      
        reader.readAsDataURL(file);
      };


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.menuId !== id)
        setCart(arr)
        handlePrice()
    }

    const deleteOrder = (id) => {
        const deleteid = {
            orderId: id
        }
        console.log(deleteid)
        console.log(JSON.stringify(deleteid))
        fetch(URL + '/delete/' + id, { method: 'DELETE', body: JSON.stringify(deleteid), headers: { "content-type": "application/json" } })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handlePrice = () => {
        let total = 0
        cart.map((item) => (
            total += item.price
        ))
        setOriPrice(total)
        if (usePoint) {
            if (total < cusPoint) {
                total = 0
            }
            else {
                total = total - cusPoint
            }
            setPrice(total)
        }
        else {
            setPrice(total)
        }

    }

    const PointDiscount = () => {
        fetch(URL + "/customer")
            .then((res) => res.json())
            .then((result) => {
                const filteredCus = result.filter((cus) => cus.cusName === cusName);
                setCusPoint(filteredCus[0].cusPoint)
            });
    };

    console.log(cusPoint)

    useEffect(() => {
        handlePrice();
        PointDiscount();
    })

    const updatePoint = () => {
        let cal_point
        if (usePoint) {
            if (oriPrice > cusPoint) {
                cal_point = (oriPrice / 10) - cusPoint
            } else {
                cal_point = (-oriPrice)
            }
        } else {
            cal_point = price / 10
        }
        const add_point = {
            cusName: cusName,
            cusPoint: cal_point
        }
        console.log(add_point)
        console.log(JSON.stringify(add_point))
        fetch(URL + '/customer/update/' + cusName, {
            method: 'PUT',
            body: JSON.stringify(add_point),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const genQR = () => {
        const url = "http://127.0.0.1:8082/generateQR"
        const new_qr = {
            amount: price
        }
        console.log(new_qr)
        console.log(JSON.stringify(new_qr))
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(new_qr),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setQRCode(res.Result)
            })
            .catch(err => console.log(err))

    }

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.menuId}>
                    <div className="cart_img">
                        <img src={item.menuPic} alt="" />
                        <p>{item.menuName}</p>
                    </div>
                    <div>
                        <span id="price">{item.price}฿</span>
                        <button onClick={() => {
                            handleRemove(item.menuId)
                            deleteOrder(orderId)
                        }}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price</span>
                <span>{price}฿</span>
                {genQR()}
            </div>
            <div className="point-discount">
                <label>Do you want to use your point</label>
                <button
                    onClick={() => {
                        setUsePoint(true);
                    }}
                >Yes</button>
                <button onClick={() => setUsePoint(false)}>No</button>
                <p>Your points: {cusPoint}</p>
            </div>
            
            <div className="pay-popup">
                <button onClick={() => {
                    setPopup(true)
                    updatePoint()
                }}>check out</button>
                <PaymentPopup trigger={popup} setTrigger={setPopup} emptyCart={emptyCart}>
                    <h3>Scan QR to pay</h3>
                    <p>*Do not close this window before you make payment</p>
                    <img src={qrcode} alt="payment dummy qr" id="imgqr" />
                    <script src="https://code.jquery.com/jquery-3.6.4.js"
                        integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
                        crossorigin="anonymous">
                    </script>
                    <div>
                        <input type="file" accept="image/*" onChange={handleImageChange} required/>
                        {image && <img src={image} alt="Selected" />}
                    </div>
                    <button  onClick={() => {
                        setPopup(false)
                        emptyCart()
                        }}>Submit</button>
                </PaymentPopup>
            </div>
        </article>
    )
}