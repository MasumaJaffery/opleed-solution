import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import main from "../assets/img/Source-01.png";
import icon1 from "../assets/img/Icon 1.png";
import icon4 from "../assets/img/blue1.png";
import icon3 from "../assets/img/Icon 3.png";
import main1 from "../assets/img/Image presenter.png";
import icon5 from "../assets/img/Icon 5.png";
import "../assets/css/home.css"; // Ensure the CSS file is correctly imported

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="home-area home-seven wow fadeInUp2 animated"
      data-wow-delay=".1s"
    >
      <div id="slider-one" className="main-slider-area home-7">
        <div className="slider-bg-three">
          <div className="container">
            <div className="row align-items-center" style={{ paddingTop: "2.8rem" }}>
              <div className="col-lg-6 col-md-6">
                <div className="slider__content3">
                  <h1
                    className="main-title-three mb-30"
                    style={{ fontSize: "72px" }}
                  >
                    <span className="black">We Got</span>{" "}
                    <span style={{ color: "rgb(82, 126, 251)" }}>IT!</span>
                    <img
                      src={icon3}
                      alt="#"
                      style={{
                        transform: "rotate(12deg)",
                        height: "4vh",
                        position: "relative",
                        bottom: "30px",
                      }}
                    />
                  </h1>
                  <p
                    className="desc mb-40"
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                      width: "100%",
                      color: "#000",
                    }}
                  >
                    <span>{t("Unlock growth potential")}</span>
                    <br />
                    <span style={{ display: "flex", marginBottom: "1rem" }}>
                      {t("Empower your Business with our")}
                    </span>
                    <span
                      style={{
                        backgroundImage: `url(${icon4})`,
                        backgroundSize: "contain",
                        display: "block",
                        height: "14px",
                        position: "fixed",
                        paddingLeft: '12px',
                        marginLeft: '-15px'
                      }}
                    >
                      <span style={{ position: "relative", top: "-16px" }}>
                        {t("Innovative Solutions!")}
                      </span>
                    </span>
                  </p>
                  <Link to="/contact">
                    <button
                      className="btn"
                      style={{
                        fontSize: "1rem",
                        borderRadius: "20px",
                        width: "fit-content",
                        height: "36px",
                        display: "flex",
                        gap: "0.60rem",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "#527EFB",
                        color: "#fff",
                        marginTop: "3.6rem",
                      }}
                    >
                      Let's Talk <span>&gt;</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="hero-section">
                  <img src={main} alt="" style={{width: '112%'}} />
                  <img
                    className="arrow" // Corrected class name
                    src={icon1}
                    alt=""
                    style={{
                      position: "absolute",
                      right: "65%",
                      top: "72%",
                      transform: "rotate(-2.82deg)",
                      width: "60%",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center about" id="about">
              <div className="col-lg-6 col-md-6">
                <div className="hero-section">
                  <img className="about-img" // Applied the class name
                   src={main1} alt="" style={{ width: "70%" }} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="Heading">
                  <img
                    src={icon5}
                    alt="#"
                    style={{
                      transform: "rotate(12deg)",
                      height: "4vh",
                      position: "relative",
                      bottom: "-12px",
                      right: "30px",
                    }}
                  />
                  <h3 style={{ width: "100%", lineHeight: "2.5rem" }}>
                    <span style={{ color: "#086ad8" }}>OPLEED </span>
                    {t("provides you with the best IT solution")}{" "}
                    {t("To develop your business:")}
                  </h3>
                  <br />
                  <p style={{ width: "100%" }}>
                    {t(
                      "Explore our advanced tools, designed to optimize your processes. Benefit from proactive and personalized technical support. Increase your efficiency with our technological expertise. Transform your challenges into opportunities with tailored strategies."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
