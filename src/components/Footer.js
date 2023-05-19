import React from 'react';
import { useState, useEffect } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
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
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        </section>

        <section className='cafeinfo'>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              {infos.map(info =>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>

                  <h6 className='text-uppercase fw-bold mb-4'>
                    <img
                      className='rounded-4 shadow-4'
                      src={info.cafeLogo}
                      alt='cafe logo'
                      style={{ width: '80px', height: '80px' }}
                    />
                    {info.cafeName}
                  </h6>
                  <p>
                    Our cafe will provide the best service for you.
                    We hope to see you very soon.
                  </p>
                </MDBCol>
              )}


              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
                <p>
                  <a href='/customer' className='text-reset'>
                    Home
                  </a>
                </p>
                <p>
                  <a href='/about' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='/menu' className='text-reset'>
                    Order online
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Don't know what to order ?</h6>
                <p>
                  <a href='/menu-random' className='text-reset'>
                    Let us choose for you
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright POS cafe
        </div>
      </MDBFooter>
    </>
  );
}