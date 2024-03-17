import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./about.css";


const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
        document.querySelector(".parallaxMainDivAbout").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
       };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDivAbout">
      
      <ResponsiveNavbar />
      
      <div className="parallaxMainDivAbout slikaAbout" style={{ backgroundImage: `url(/resources/img17.jpg)`, backgroundPositionY:"-600px"  }}>
        <div className="headerContentAbout" >
            <p className="headerAbout">Upoznajte VODO FIRMU</p>
        </div>
      </div>
      
      <div className="noImageDivAbout noImageDivAboutLarge">
        <div className="contentDivAbout">

          <p className="contentAbout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo vel 
          sapien vehicula tempus. Duis posuere diam ut est pulvinar, eget consequat sapien convallis.
           Mauris id lobortis nisi. Integer ut diam euismod, aliquet urna id, consequat libero. Mauris
            eget efficitur velit, vitae placerat odio. Integer vitae risus quis sapien fermentum ultricies.
             Vivamus bibendum eros ac eros efficitur, id feugiat purus efficitur. Sed nec ante vel dui volutpat pharetra. 
          </p>
          <hr/>
          <p className="contentAbout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo vel sapien vehicula tempus.
           Duis posuere diam ut est pulvinar, eget consequat sapien convallis. Mauris id lobortis nisi. 
           Integer ut diam euismod, aliquet urna id, consequat libero. 
          </p>
          <hr/>
          <p className="contentAbout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo vel sapien vehicula tempus. Duis posuere diam ut est pulvinar, eget consequat sapien convallis. Mauris id lobortis nisi. Integer ut diam euismod, aliquet urna id, consequat libero. Mauris eget efficitur velit, vitae placerat odio. Integer vitae risus quis sapien fermentum ultricies. Vivamus bibendum eros ac eros efficitur, id feugiat purus efficitur. Sed nec ante vel dui volutpat pharetra. 
          </p>

        </div>

        <div className="imageDivAbout" >
          <img className="imageAbout" src="/resources/people.jpg" />
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
