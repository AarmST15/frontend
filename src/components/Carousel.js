import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block h-25'
        itemId={1}
        src='https://i.imgur.com/VyHIYBL.jpg'
        alt='...'
      >
        <h5>Relax and calm enviroment</h5>
        <p>Sit back and enjoy our cozy cafe and some drinks.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block h-auto'
        itemId={2}
        src='https://i.imgur.com/KxjKCgV.jpg'
        alt='...'
      >
        <h5>Co-working space</h5>
        <p>We are open for our customer to held meeting and work here while enjoy our drinks and bakeries.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block h-auto'
        itemId={3}
        src='https://i.imgur.com/TbIWBUb.jpg'
        alt='...'
      >
        <h5>Drinks for you</h5>
        <p>We create a magical drink, just for you.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}