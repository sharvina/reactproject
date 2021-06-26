import React from 'react'
import  './Home.css'
import h1 from "../../assesets/h1.jpg";

import n34 from "../../assesets/n34.jpg";
import n53 from "../../assesets/n53.jpg";


import {VscArrowRight}  from "react-icons/vsc";
import a11 from "../../assesets/a11.png";
import ho5 from "../../assesets/ho5.jpeg";
import n10 from "../../assesets/n10.jpg";
import n110 from "../../assesets/n110.png";
import n150 from "../../assesets/n150.png";
import h77 from "../../assesets/nh7.jpg";
import vd from "../../assesets/vd.mp4";
import n24 from "../../assesets/n24.jpg";





import { MdCallMade } from "react-icons/md";

import { FaArrowRight } from "react-icons/fa";
import Backtop from "./Backtop.js";
import {Link} from "react-router-dom";


function Home()
{
    return(
        
        
              
              <div>
                   
               <div class="uk-inline">
               <img src={h1} class="pho" ></img>
    <div class="uk-overlay-default "></div>
    <div class="uk-overlay uk-position-left uk-dark" style={{imageOrientation:"", 
    backgroundSize:"cover", backgroundPosition:"center"}}>
        <div class="text1">
            <p class="ho1" style={{color:"#192841",fontWeight:"bold"}} >Nokia 5.4</p>
            <p class="ho2"  style={{color:"#192841",fontWeight:"bold"}}>With one-year Screen</p>
            <p class="ho2"  style={{color:"#192841",fontWeight:"bold"}}>Protection*</p><br></br>
            <button class="" style={{color:"white",fontWeight:"bold",fontFamily:"Nokia,sans-serif",width:"155px",height:"60px",borderRadius:"8px",backgroundColor:"#192841",fontSize:"21px"}}
            >Buy now</button><br></br>
            
        </div>
         
 </div>
    
            
 </div>

        <div class="text2"> 
        <p>You might also like<a class="text3"   href="#" style={{color:"#0065ed"}}>
                See all smartphones <VscArrowRight style={{color:"#0065ed",fontWeight:"bold"}}/></a></p>
        
        </div>
        
        <div class="uk-inline n34">
               <img src={n34} style={{}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 3.4</a></li>
                  <li><a class="d234">Build for streaming</a></li>
                  <li> <a class="d134">₹11,999.00</a></li><br></br>
                  
                  <Link to="/Cart">  <button class="uk-button uk-button-default btn34">Shop now</button></Link> 
                
                
                   
               
               </div>
        </div>
        
            <div class="uk-inline n24">
               <img src={n24} style={{}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 2.4</a></li>
                  <li><a class="d234">Smart imaging, smart battery</a></li>
                  <li> <a class="d134">₹10,399.00</a></li><br></br>
                  
                  <button class="uk-button uk-button-default btn34">Shop now</button>
                   
               
               </div>

            </div>
            <div class="uk-inline n53">
               <img src={n53} style={{}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 5.3</a></li>
                  <li><a class="d234">More cameras, more screen</a></li>
                  <li> <a class="d134">₹15,499.00</a></li><br></br>
                  
                  <button class="uk-button uk-button-default btn34">Shop now</button>
                   
               
               </div>
               </div>
               

               
               
               <div>
        <div class="uk-card uk-card-primary uk-card-body cad">
        <img src={a11} class="pho2" style={{}} ></img> 
        <p class="h3" style={{}} >Android™ 11 is on</p>
       
            
        <p class="h3" style={{}} >its way</p>
        
        <p class="h31" style={{}} >The latest version of Android brings a bunch of cool </p>
        <p class="h31" style={{}} >features to Nokia smartphones, improving everything </p>
        <p class="h31" style={{}} >from the way you message to the way you get </p>
        <p class="h31" style={{}} >security updates. </p><br></br>     
           <button class="btn31" style={{color:"black",borderColor:"white"}} >Take a look</button><br></br>
        
        

        </div>
    </div>
    

      
    

    <div class="uk-clearfix">
    
    <div class="uk-float-left ho">
        <div class="uk-card uk-card-default uk-card-body">
        <li><a class="ho4">Pure Android</a></li><br></br><br></br>
                  <li><a class="ho41">Sometimes, less</a></li><br></br>
                  <li> <a class="ho41">is more. Much,</a></li><br></br>
                  <li> <a class="ho41">much more.</a></li><br></br>
        </div>
    </div>
    <div class="uk-float-right hor ">
        <div class="uk-card uk-card-default uk-card-body">
                  <li><a class="hor1">There are little things in our everyday that hold us</a></li>
                  <li> <a class="hor1">back: the traffic; the weather; the store you forgot</a></li>
                  <li> <a class="hor1">to visit. So when you turn to your phone for</a></li>
                  <li><a class="hor1">answers, the last thing you need is something</a></li>
                  <li> <a class="hor1">slowing you down.</a></li><br></br>
                  <li> <a class="hor1">We don’t add bloatware that wastes your battery.</a></li>
                  <li><a class="hor1">We don’t add clutter that hogs processing power.</a></li>
                  <li> <a class="hor1">Nokia smartphones come with Android. Purely,</a></li>
                  <li> <a class="hor1">wholly, Android. Nothing you don’t want, nothing to</a></li>
                  <li> <a class="hor1">get in your way.</a></li>
      
        </div>
    </div>
</div>


<img src={ho5} class="phone" style={{}} ></img>
<div>
        <div class="uk-card uk-card-hover uk-card-body hc">
        <div class="text2"> 
        <p>You might also like<a class="text3"   href="#" style={{color:"#0065ed"}}>
            See all feature phone <VscArrowRight style={{color:"#0065ed",fontWeight:"bold"}}/></a></p>
        
        </div>
        
            <p><div class="uk-inline n34">
               <img src={n150} style={{}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 150 2020</a></li>
                  <li><a class="d234">All the essentials</a></li>
                  <li> <a class="d134">₹2,299.00</a></li><br></br>
                  
                  <button class="uk-button uk-button-default btn34">Shop now</button>
                   
               
               </div>
        </div>
        
            <div class="uk-inline n24">
               <img src={n110} style={{}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 110</a></li>
                  <li><a class="d234">Talk, play and snap</a></li>
                  <li> <a class="d134">₹1,749.00</a></li><br></br>
                  
                  <button class="uk-button uk-button-default btn34">Shop now</button>
                   
               
               </div>

            </div>

            
            <div class="uk-inline n53">
               <img src={n10} style={{height:"320px"}} ></img>
               <div class="des">

                  <li><a class="d134">Nokia 5310</a></li>
                  <li><a class="d234">Big on sound</a></li>
                  <li> <a class="d134">₹3,399.00</a></li><br></br>
                  
                  <button class="uk-button uk-button-default btn34" link="">Shop now</button>
                   
               
               </div>
               </div></p>
        </div>
    </div>


  

              < div class="uk-inline learn">
              <img src={h77}  class="h7" style={{}} ></img>
    <div class="uk-overlay-default "></div>
    <div class="uk-overlay uk-position-left uk-dark" style={{imageOrientation:"", 
    backgroundSize:"cover", backgroundPosition:"center"}}>
        <div class="text7">
            <a class="text71"  style={{color:"white",fontStyle:"Nokia,Arial,Helvetica,sans-serif",textDecoration:"none",fontWeight:"bold"}}>Care comes home</a><br></br><br></br>
            <a class="text72"  style={{color:"white",fontSize:"20px",fontStyle:"Nokia,Arial,Helvetica,sans-serif",textDecoration:"none"}}>Now get pick-up and drop service for your Nokia</a><br></br>
            <a class="text72"  style={{color:"white",fontSize:"20px",fontStyle:"Nokia,Arial,Helvetica,sans-serif",textDecoration:"none",fontWeight:"bold"}}>smartphone from the comfort of your home*</a><br></br><br></br>
            <button class="" style={{color:"#192841",fontWeight:"bold",fontFamily:"Nokia,sans-serif",width:"225px",height:"67px",borderRadius:"8px",backgroundColor:"white",fontSize:"21px",borderColor:"white"}}
            ><MdCallMade style={{marginRight:"22px",fontWeight:"bold",size:"20px"}}   />Learn more</button><br></br>
        </div>
        
 </div>
 </ div>

               < div class="uk-inline vde">    
                <video src={vd} class="vd1"  loop muted playsinline uk-video="autoplay: inview" style={{}}></video>      
                <div class="uk-overlay-default "></div>
                <div class="uk-overlay uk-position-left uk-dark" style={{imageOrientation:"", 
                backgroundSize:"cover", backgroundPosition:"center"}}>
                    <div class="vd4">
                    <li><p class="" style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif"}}>We asked people all</p></li>
                  <li><p class="" style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif"}}>over the world to</p></li>
                  <li> <p class="" style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif"}}>create</p></li>
                  <li><p class="" style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif"}}>#48HoursOfChange</p></li>
                  <li><p class="" style={{color:"white",fontFamily:"Arial,Helvetica,sans-serif"}}>and capture it.</p></li>
                  </div>
                  <div class="uk-list uk-link-text">
                 <li><a class="" style={{color:"white",fontSize:"20px",fontWeight:"bold",fontFamily:"Arial,Helvetica,sans-serif",marginLeft:"122px"}}>Watch now <FaArrowRight /></a></li>
                 </div>

                 <div class="blu">
                 <div class="uk-float-left lcl">
        <div class="uk-card uk-card-default uk-card-body lcl">
        <div class="lcl1">
                    <li><p class="" style={{}}>Nothing to lose, plenty to gain. Get</p></li>
                  <li><p class="" style={{}}>the latest Nokia phone news and</p></li>
                  <li> <p class="" style={{}}>offers.</p></li>

                  </div>
                  </div>
        
    </div>

        
    <div class="uk-float-right rcl">
        <div class="uk-card uk-card-default uk-card-body rcl">
        <form class="box">
        
    <input class="uk-input uk-width-1-2 email" type="text" placeholder="Email Address" style={{}}></input>
    </form>

    
            <p class="sty" style={{listStyle:"none",color:"white"}}>By signing up, I agree to the HMD Globel  <a class="" style={{color:"white",textDecorationLine:"underline"}}> Privacy policy</a></p>
            <button class=" btnr">Sign me up</button>
           
        </div>
    </div>
    </div>
    
    
    

            
       <div class="uk-inline last">
       <p class="last1" style={{}}>*One-year screen protection offer is applicable only for
        Nokia 5.4 devices purchased in India.
        <a class="" style={{textDecorationLine:"underline",color:"black",fontSize:"17px"}}> Read the full T&C here.</a></p>
          
          </div>


  

<Backtop />



</div>
</ div>
</div>
        
    );
}
 export default Home;