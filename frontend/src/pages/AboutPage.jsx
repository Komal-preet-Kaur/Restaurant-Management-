function AboutPage() {
  return (
    <>
      <hr />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="imgContainer">
            <img className="mainImg" src="/images/aboutus.jpg" alt="About Us" />
          </div>
          <div className="responsive-container-block textSide">
            <p className="text-blk heading">About Us</p>
            <p className="text-blk subHeading">
              Welcome to our restaurant reservation platform! We aim to simplify the way people find and reserve tables
              at their favorite restaurants. Our mission is to create a smooth and reliable experience for users while
              supporting restaurants in reaching their customers more efficiently.
            </p>

            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="/images/location6.jpeg" alt="Easy Table Reservations" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Easy Table Reservations</p>
                <p className="text-blk cardSubHeading">Book your favorite restaurants quickly and hassle-free.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="/images/location5.jpeg" alt="User-Friendly Interface" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">User-Friendly Interface</p>
                <p className="text-blk cardSubHeading">Designed for smooth navigation across all devices.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="/images/location4.jpeg" alt="Reliable Booking" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Reliable and Instant Booking</p>
                <p className="text-blk cardSubHeading">Get real-time availability and instant confirmation.</p>
              </div>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src="/images/location3.jpeg" alt="Restaurant Partners" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Support for Restaurant Partners</p>
                <p className="text-blk cardSubHeading">
                  Helping restaurants manage bookings efficiently and grow their customer base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
