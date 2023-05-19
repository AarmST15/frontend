import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import '../styles/BodyHome.css'

export default function BodyHome() {
  return (
    <div>
    {/* <MDBRow className='grid-stye'>
      <MDBCol ms='12' md='4' className='img-stye'>
        <img class="overflow-hidden" style={{height:"250px" ,width:"250px" ,textAlign:"center" }} src='./images/Bodyhome-2.jpg' alt='banner' />
      </MDBCol>
      <MDBCol ms='12' md='8' className='display-4  text-stye'>
        Drink and Enjoy
        <p>First I drink the coffee.</p>
        <p>Then I do the things </p>
      </MDBCol>
    </MDBRow> */}

    <Grid container spacing={2} justifyContent="center"  alignItems="center"  marginBottom="15px">
            <Grid item md="4" xs="auto" >
                <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/fillout.jpg'/>
            </Grid>
            <Grid item xs="12" md="8" className='text-stye' >
              <h2>Step no. 1</h2>
              Enter your username and table number.               
                     
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center"  alignItems="center"  marginBottom="15px">
            <Grid item md="4" xs="auto" >
                <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/select menu.jpg'/>
            </Grid>
            <Grid item xs="12" md="8" className='text-stye' >
              <h2>Step no. 2</h2>
              Choose the menu that you like.               
                     
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center"  alignItems="center"  marginBottom="15px">
            <Grid item md="4" xs="auto" >
                <img class="overflow-hidden" style={{height:"220px" ,width:"400px" }} src='./images/pay.jpg'/>
            </Grid>
            <Grid item xs="12" md="8" className='text-stye' >
              <h2>Step no. 3</h2>
              Press Checkout and scan the qrcode to pay and attach the slip.                
                     
            </Grid>
        </Grid>

    </div>


  );
}