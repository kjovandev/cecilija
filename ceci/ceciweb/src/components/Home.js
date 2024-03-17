import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./Navbar";
import Footer from "./Footer";
import "./home.css";
import CallButton from "./callme.js"


const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // to do : for each loop for the function and export

      document.querySelector(".parallaxMainDivHome").style.backgroundPositionY = `${-600 + scrolled * 0.5}px`;
      document.querySelector(".parallaxMainDivHome2").style.backgroundPositionY = `${1300+ scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome3").style.backgroundPositionY = `${700 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome4").style.backgroundPositionY = `${900 + scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome5").style.backgroundPositionY = `${scrolled * 0.2}px`;
      document.querySelector(".parallaxMainDivHome6").style.backgroundPositionY = `${-100 + scrolled * 0.2}px`;

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mainDivHome">
      
      <ResponsiveNavbar />
      
      <div className="parallaxMainDivHome slikaHome" style={{ backgroundImage: `url(/resources/plumbingdark.jpg)`, backgroundPositionY:"-600px"  }}>
      
        <div className="headerContentHome" style={{paddingTop:"7rem"}} >
            <h1>
              <span className="first-rowH1Home">VODO</span>  
              <br />
              <span className="second-rowH1Home">FIRMA</span>
            </h1>
            <h2  style={{fontSize : "5rem", fontWeight: 700, paddingTop : "2rem"}} >061-123-456</h2> 
            <CallButton  ></CallButton>

        </div>
      
      </div>

    

      <div className="parallaxMainDivHome2 slikaHome" style={{ backgroundImage: `url(/resources/plumb5.webp)`,backgroundPositionY:"1300px" }}>

      <div className="picContentDivHome">
        <p className="invertedTextHome textPic2Home"  >
          Masinsko odgusenje
          <br/>
          KANALIZACIJE
          </p>
      </div>
      
      </div>


      <div className="parallaxMainDivHome3 slikaHome" style={{ backgroundImage: `url(/resources/plumb6.jpg)`,backgroundPositionY:"700px" }}>
      
      <div className="picContentDivHome">
      <p className="invertedTextHome textPic3Home" >
          Popravka starih i 
          <br/>
          izrada novih instalacija.
        </p>
      </div>
      
      
      </div>

      <div className="parallaxMainDivHome4 slikaHome" style={{ backgroundImage: `url(/resources/plumb2.webp)`,backgroundPositionY:"900px" }}>
      
        <div className="picContentDivHome">
          <p className="invertedTextHome textPic4Home"   > 
          Montaza svih vrsta
          <br/>
          SANITARIJA.
        </p>
        </div>

      </div>


      <div className="parallaxMainDivHome5 slikaHome" style={{ backgroundImage: `url(/resources/img21.jpg)` }}>
      
        <div className="picContentDivHome">
          <p className="invertedTextHome textPic5Home">Kako u 
              <br/>
              Industriji...
          </p>
        </div>

      </div>
      
      <div className="parallaxMainDivHome6 slikaHome" style={{ backgroundImage: `url(/resources/img22.jpg)`, backgroundPositionY:"-100px" }}>
      
        <div className="picContentDivHome">
            <p className="invertedTextHome textPic6Home ">
            Tako i u <br/>
            Vašem domu.
            </p>
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

export default Home;
