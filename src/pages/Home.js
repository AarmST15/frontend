import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import BodyHome from '../components/BodyHome'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CommentSection from '../components/CommentSection'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <header>
        <Header />
      </header>
      <MDBCarousel  showControls fade>
    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={1}
      src='./images/promo01.png'      
      >
      
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={2}
      src='./images/promo02.png'      
    >
      
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 carousel-bg'
      itemId={3}
      src='./images/promo03.png'      
    >
      
    </MDBCarouselItem>
  </MDBCarousel>


      <h1 style={{padding:'20px' , background:'#C09A51'}}>
        <b>Steps to use</b>
      </h1>
      <div className='carousel-stye'>
        <BodyHome />
        <Carousel />
      </div>
      <div className='openhr'>
        <h2>Open</h2>
        <h4>Sun - Fri</h4>
        <p>11 : 00 - 22 : 00</p>
      </div>
      <br></br>
      <CommentSection />
      <Footer />
    </div>

  )
}

export default Home