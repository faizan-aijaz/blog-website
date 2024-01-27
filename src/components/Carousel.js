import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import '../index.css'; // Import your CSS file

export default function App() {
  return (
    <>
      <div className="carousel-container">
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem itemId={1}>
            <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div className="spacer"></div>

      {/* Centered heading with custom CSS */}
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <h1>Show Your Interest!</h1>
      </div>
    </>
  );
}
