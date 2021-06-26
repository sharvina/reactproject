import React, { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";


export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <a class="" style={{fontSize:"22px",fontWeight:"bold",marginLeft:"80px"}} >Back to top<TiArrowUpThick style={{fontSize:"22px",fontWeight:"bold"}} /></a>
        </div>}
    </div>
  );
}
