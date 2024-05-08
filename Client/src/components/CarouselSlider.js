import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlider = () => {
  const imagesCarousel = [
    {
      id: 1,
      image: "../assets/images/imageBg-1.jpg",
      label: "Spaghetti al sugo",
    },
    {
      id: 2,
      image: "../assets/images/imageBg-2.jpg",
      label: "Tagliata di manzo",
    },
    {
      id: 3,
      image: "../assets/images/imageBg-3.jpg",
      label: "Tiramisu classico",
    },
  ];

  return imagesCarousel.length <= 1 ? (
    <Carousel indicators={false} controls={false}>
      {imagesCarousel.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img.image} alt={img.label} />
          <Carousel.Caption>
            <h3>{img.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <Carousel>
      {imagesCarousel.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img.image} alt={img.label} />
          <Carousel.Caption>
            <h3>{img.label}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;


/*

TENTATIVO 1:

<div>
  <img className="d-block w-100" src={imagesCarousel[0].image} alt={imagesCarousel[0].label} />
</div>

<Carousel>

  {imagesCarousel.map((img, index) => (

<Carousel.Item key={index}>
  <img className="d-block w-100" src={img.image} alt={img.label} />
  <Carousel.Caption>
    <h3>{img.label}</h3>
  </Carousel.Caption>
</Carousel.Item>
  ))}
</Carousel> */

/*

TENTATIVO: 2

{images.Carousel.map((img, index) =>
  index.id === 0 ? (<Carousel indicators = {false} controls = {false} >
  <Carousel.Item key={index}>
   <img className="d-block w-100" src={img.image} alt={img.label} />
   <Carousel.Caption>
    <h3>{img.label}</h3>
   </Carousel.Caption>
 </Carousel.Item>
  </Carousel> ) : ( <Carousel >
  <Carousel.Item key={index}>
   <img className="d-block w-100" src={img.image} alt={img.label} />
   <Carousel.Caption>
    <h3>{img.label}</h3>
   </Carousel.Caption>
 </Carousel.Item>
  </Carousel> ))))}





TENTATIVO 3:

<Carousel indicators = {false} controls = {false} >
  <Carousel.Item key={index}>
   <img className="d-block w-100" src={img.image} alt={img.label} />
   <Carousel.Caption>
    <h3>{img.label}</h3>
   </Carousel.Caption>
 </Carousel.Item>
  </Carousel> ) : <Carousel >
  <Carousel.Item key={index}>
   <img className="d-block w-100" src={img.image} alt={img.label} />
   <Carousel.Caption>
    <h3>{img.label}</h3>
   </Carousel.Caption>
 </Carousel.Item>
  </Carousel> )


TENTATIVO 4:

      imagesCarousel.map((img, index) => (
        imagesCarousel.length === 1 ? (
          <Carousel indicators={false} controls={false} key={index}>
            <Carousel.Item>
              <img className="d-block w-100" src={img.image} alt={img.label} />
              <Carousel.Caption>
                <h3>{img.label}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel key={index}>
            <Carousel.Item>
              <img className="d-block w-100" src={img.image} alt={img.label} />
              <Carousel.Caption>
                <h3>{img.label}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
      ))

  */
