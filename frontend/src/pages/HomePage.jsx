import { useEffect, useState } from 'react';

const slides = ['/images/new-res.avif', '/images/new-res2.avif', '/images/new-res3.avif'];
const steps = [
  { num: 1, img: '/images/step1image.avif', title: 'Register' },
  { num: 2, img: '/images/step2image.avif', title: 'Explore Restaurants' },
  { num: 3, img: '/images/step3image.avif', title: 'Book Table' }
];
const services = [
  { title: 'Breakfast', img: '/images/service-1.jpg' },
  { title: 'Appetizers', img: '/images/service-2.jpg' },
  { title: 'Beverages', img: '/images/service-3.jpg' }
];

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (step) => {
    setSlideIndex((prev) => (prev + step + slides.length) % slides.length);
  };

  return (
    <>
      <hr />
      <div className="slider">
        <div className="slides">
          {slides.map((image, idx) => (
            <div className="slide" key={image} style={{ display: idx === slideIndex ? 'block' : 'none' }}>
              <img src={image} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="image-container">
          <div className="text-overlay">
            <h1>Where every flavor tells a story</h1>
            <p>Come with family and feel the joy of mouthwatering food</p>
            <br />
            <a href="/reservations" className="explore-button">EXPLORE RESTAURANTS</a>
          </div>
        </div>
        <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
        <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
      </div>

      <div className="container-steps-info">
        <div className="steps-title"><h2>EASY ORDER IN 3 STEPS</h2></div>
        <div className="steps-container">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-icon">
                <div className="step-number">{step.num}</div>
                <img src={step.img} alt={`Step ${step.num}`} />
              </div>
              <h3>{step.title}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h1>Flavors For Royalty</h1>
          <h2>We Offer Top Notch</h2>
          <ul className="grid-list">
            {services.map((service) => (
              <li key={service.title}>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
                    <figure className="card-banner img-holder">
                      <img src={service.img} alt={service.title} className="img-cover" />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">{service.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="section-text">
            Our restaurants offer a symphony of flavors, catering to every palate. Whether you are in the mood for
            traditional cuisine or bold contemporary dishes.
          </p>
        </div>
      </section>

      <hr />
      <div className="story-container">
        <div className="story-container-text">
          <h1>Every Place Tells a Story</h1>
          <p>
            We create exceptional dining experiences that bring people together across our restaurant collection.
          </p>
        </div>
        <div className="story-container-image">
          <img src="/images/story-image.png" alt="Story Image" width="570" height="570" />
        </div>
      </div>

      <hr />
      <br /><br />
      <div className="banner">
        <img src="/images/location1.webp" alt="Coffee House Banner" />
        <div className="banner-content">
          <p className="banner-text">BOOK A TABLE FOR YOU AND FAMILY MEMBERS</p>
          <h2 className="banner-title">NEED A TABLE ON COFFEE HOUSE</h2>
          <a href="/reservations" className="banner-button">BOOK A TABLE</a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
