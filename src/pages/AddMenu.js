import React from "react";
import { useState, useEffect, useMemo } from 'react';
import '../styles/AddMenu.css';
import StaffHeader from "../components/StaffHeader";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function AddMenu() {

    const [id, setId] = useState(0)
    const [menuname, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [detail, setDetail] = useState("");
    const [type, setType] = useState("");
    const [img, setImg] = useState("");

    const [newPrice, setNewPrice] = useState(0)

    const [items, setItems] = useState([]);
    
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
    }, [items, page]);



    // delete menu
    let menuid;
    let deleteURL = "http://127.0.0.1:8082/menuitem/delete/"
    const deleteMenu = (e) => {
        e.preventDefault()
        const deleteid = {
            menuId: menuid
        }
        console.log(deleteid)
        console.log(JSON.stringify(deleteid))
        fetch(deleteURL + menuid, { method: 'DELETE', body: JSON.stringify(deleteid), headers: { "content-type": "application/json" } })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }



    // get all menu
    useEffect(() => {
        fetch("http://127.0.0.1:8082/menuitem")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    // submit function for add menu
    const Submit = (e) => {
        e.preventDefault()
        const url = "http://127.0.0.1:8082/menuitem/"
        const new_menu = {
            menuId: id,
            menuName: menuname,
            price: price,
            menuDetail: detail,
            menuType: type,
            menuPic: img
        }
        console.log(new_menu)
        console.log(JSON.stringify(new_menu))
        fetch(url + "formsave", {
            method: 'POST',
            body: JSON.stringify(new_menu),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload(false)
    }

    //update new price of menu by id
    const Update = (e) => {
        e.preventDefault()
        const url = "http://127.0.0.1:8082/menuitem/"
        const new_menu = {
            menuId: menuid,
            price: newPrice
        }
        console.log(new_menu)
        console.log(JSON.stringify(new_menu))
        fetch(url + "update/" + id, {
            method: 'PUT',
            body: JSON.stringify(new_menu),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload(false)
    }

    console.log(newPrice)

    return (
        <>
            <div className="bg-choose" ></div>
            <StaffHeader />
            <div className="App container">
            <Button 
                variant="outlined" 
                href='/staff-homepage' 
                className='text-black header-stye' 
                style={{ backgroundColor: 'rgb(255, 255, 255, 0.6)' ,color:'#FFF' ,borderColor:'#000', marginTop:'20px'}}>
                    <h5 style={{paddingTop:'10px'}}>Back </h5>
            </Button>

                <h1 style={{marginTop:'30px' , marginBottom:'30px'}}>Setting Menu</h1>

                <div className="information">
                    <form action="" >
                    <Grid container spacing={2}>
                            <Grid item xs={12} md={2}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">
                                Menu ID
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Menu ID"
                                onChange={(event) => {
                                    setId(event.target.value)
                                }}
                            />
                        </div>
                        </Grid>
                            <Grid item xs={12} md={6}>

                        <div className="mb-3">
                            <label htmlFor="menuname" className="form-label">
                                Menu Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Menu Name"
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                        </div>
                        </Grid>
                        <Grid item xs={12} md={4}>                        
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Price"
                                onChange={(event) => {
                                    setPrice(event.target.value)
                                }}
                            />
                        </div>
                        </Grid>
                        </Grid>
                        <div className="mb-3">
                            <label htmlFor="detail" className="form-label">
                                Detail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Detail of Menu"
                                onChange={(event) => {
                                    setDetail(event.target.value)
                                }}
                            />
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={10}>
                        
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">
                                Image
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your link for menu picture (.jpg)"
                                onChange={(event) => {
                                    setImg(event.target.value)
                                }}
                            />
                        </div>
                        </Grid>
                        <Grid item xs={12} md={2}>

                        <div className="mb-3">
                            <label>
                                Type
                            </label>
                            <div className='select-type'>                                
                                <select value={type} onChange={(e) => setType(e.target.value)} >
                                    <option></option>
                                    <option>coffee</option>
                                    <option>tea</option>
                                    <option>milk</option>
                                    <option>soda</option>
                                    <option>bakery</option>
                                    <option>water</option>
                                </select>
                            </div>
                        </div>
                        </Grid>
                        </Grid>


                        <button className="btn btn-success" onClick={Submit}>Add</button>

                    </form>
                </div>
                <hr></hr>
                <div className="menu-list-a
                dd">
                    <table className="styled-table" width='1000'>
                        <thead>
                            <th>Menu ID</th>
                            <th>Menu</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Img.</th>
                            <th>Update Price</th>
                        </thead>
                        <tbody>
                            {displayData.map(item =>
                                <>
                                    <tr>
                                        <td>
                                            {item.menuId}
                                        </td>
                                        <td>
                                            {item.menuName}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.menuType}
                                        </td>
                                        <td>
                                            {item.menuPic}
                                        </td>
                                        <td>
                                            <input type="number" onChange={(e) => setNewPrice(e.target.value)} />
                                        </td>
                                        <td>
                                            <button key={item.menuId} className="update-btn" onClick={(e) => {
                                                console.log(item.menuId)
                                                menuid = item.menuId
                                                Update(e)
                                                window.location.reload(false)
                                            }}>
                                                <b>Update</b>
                                            </button>
                                        </td>
                                        <td>
                                            <button key={item.menuId} className="del-btn" onClick={(e) => {
                                                console.log(item.menuId)
                                                menuid = item.menuId
                                                alert('Deleting this menu (menuId:' + item.menuId + ')')
                                                deleteMenu(e)
                                                window.location.reload(false)
                                            }}>
                                                <b>Delete</b>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
            <div>
            <nav aria-label="Pagination">

            <Button variant="outlined"  className='text-dark header-stye' style={{ backgroundColor: 'rgb(255, 255, 232, 0.3)' ,color:'#FFF' ,borderColor:'#000', marginLeft:'90vh'}} 
                  onClick={() => {
                    if (page != 1) setPage(page - 1);
                  }}
                                   
                >
                    back                  
                </Button>

                <Button variant="outlined" className='text-dark header-stye' style={{ backgroundColor: 'rgb(255, 255, 232, 0.3)' ,color:'#FFF' ,borderColor:'#000'}}
                  onClick={() => {
                    if (page != Math.ceil(items.length / itemsPerPage))
                      setPage(page + 1);
                  }}                 
                >
                  
                  next
                  
                </Button>
              </nav>                          

            </div>
        </>
    )
}