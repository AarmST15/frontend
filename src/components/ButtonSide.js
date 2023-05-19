import React from 'react';
import '../styles/ButtonSide.css'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ButtonSide() {

    return (
        <>
            <div className='bg-choose'>             

            </div>
            <div className='side-con'>
            <React.Fragment>
            <CssBaseline />
                <Container fixed>
                    <Box sx={{height: '100vh' ,paddingTop:'5vh'}} >
                        <img class="overflow-hidden" style={{height:"300px" ,width:"300px" , marginBottom:"5vh"}} src='./images/logo-B.png'/>
                        <div className='subj'>
                            <h1><b>Enter as</b></h1>
                        </div>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Card sx={{ maxWidth: 500, background:"#d68d4d" , marginBottom:"15px" ,borderRadius:'5rem',}}>
                                    <CardActionArea href='/login'>
                                        <CardContent style={{textAlign:'center'}}>
                                           <h4 style={{paddingTop:'7px'}}> Customer </h4>                                           
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                               
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Card sx={{ maxWidth: 500, background:"#d68d4d" , marginBottom:"15px",borderRadius:'5rem' }}>
                                    <CardActionArea href='/staff-login'>
                                        <CardContent style={{textAlign:'center'}}> 
                                        <h4 style={{paddingTop:'7px'}} >Staff</h4>                                            
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                                                                 
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
        </React.Fragment>
                
                {/* <div className='subj'>
                <img class="overflow-hidden" style={{height:"250px" ,width:"250px" , marginBottom:"5vh"}} src='./images/logo-B.png'/>
                    <h1><b>Enter as</b></h1>
                </div>
                <div className='side-container' >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div className='staff-btn'>
                                <a href='/staff-login'><button >Staff</button></a>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='cus-btn'>
                                <a href='/login'><button>Customer</button></a>
                            </div>
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        </>
    );
}