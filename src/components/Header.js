import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../styles/Header.css'
import Button from '@mui/material/Button';


export default function Header() {

  return (
    <header className='header-stye'>
      <div className='p-3 text-center bg-image bg-header'>
        <div className='mask' style={{ backgroundColor: 'rgba(255, 150, 80, 0.5)' , backdropFilter: 'blur(5px)',borderRadius: '7%'}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              
              <h1 className='mb-3'>
                <b>Silent Café</b>
              </h1>
              <h6 className='mb-3' style={{paddingLeft:'20px' , paddingRight:'20px'}}>
                Welcome to Silent Café and feel atmosphere conduciue to work
              </h6>

              {/* <MDBBtn outline className='text-dark' color='light' href='/menu'>
                Order Now
              </MDBBtn> */}

              <Button variant="outlined" href='/menu' className='text-dark header-stye' style={{ backgroundColor: 'rgb(255, 255, 232, 0.3)' ,color:'#FFF' ,borderColor:'#000'}}>
                Online Orders
              </Button>

            </div>
          </div>
        </div>
      </div>
    </header>

  );
}