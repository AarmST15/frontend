import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import '../styles/NavBar.css'

export default function NavBar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [infos, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8082/cafeinfo")
      .then(res => res.json())
      .then(
        (result) => {
          setInfo(result);
        }
      )
  }, [])

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>

          {infos.map(info =>
            <MDBNavbarBrand href='/customer'>
              <img
                className='rounded-4 shadow-4'
                src={info.cafeLogo}
                alt='cafe logo'
                style={{ width: '80px', height: '80px' }}
              />
              Silent Café</MDBNavbarBrand>
          )}

          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>

                <MDBNavbarLink aria-current='page' href='/customer'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/menu'>Online orders</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/'>Log Out</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}