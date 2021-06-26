import React from 'react'
import './Header.css'
import { FaBars } from "react-icons/fa";
import {  FiLock } from "react-icons/fi";
import { FiMenu  } from "react-icons/fi";
import { FiX  } from "react-icons/fi";
import {VscLocation} from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { VscArchive} from "react-icons/vsc";

function Header()
{ 
    return(
        <div>
                <nav class="uk-navbar-container" uk-navbar='true'>
                    
                        
                        <div class="uk-navbar-left l1 ">
                            
                        <ul class="uk-navbar-nav">
                            <li class="uk-active l11"><a class="" href=" "
                             style={{fontWeight:"bold",fontFamily:"NokiaKokia",color:"#183693",WebkitFontSmoothing:"antialiased",fontSize:"30px"}}>NOKIA </a></li>
                            <a class="l12" style={{fontFamily:"sans-serif",color:"#183693",marginTop:"30px",textDecoration:"none"}}>|  Phones</a>
                            
                        </ul>
                        </div>
                        
                    
                    <div class="uk-navbar-right r1">

        <ul class="uk-navbar-nav">
            <li class=""><a href="" style={{fontSize:"17px",fontFamily:"sans-serif",color:"black"}}>Smart Phones</a></li>
           
            <li><a href="#" style={{fontSize:"17px",fontFamily:"sans-serif",color:"black"}}>Feature phones </a></li>
            <li><a href="#" style={{fontSize:"17px",fontFamily:"sans-serif",color:"black"}}>Accessories</a></li>
            
        </ul>
        </div>

    <div class="ic">
        <a href="button" style={{color:"black",height:"30px",fontWeight:"bold"}}><FiLock size={29} /></a>
    <button class="uk-button uk-button-default ico1" type="button" uk-toggle="target: #offcanvas-flip" 
    style={{border:"none"}}><FiMenu style={{fontSize:"29",fontWeight:"bold"}}  /></button>

<div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar rect" style={{}}>

        <button class="uk-offcanvas-close off" type="button" uk-close style={{border:"none"}}><FiX  size={25}/></button>
        
        <ul class="uk-list uk-list-divider d1 ">
            <li> <a class=""  href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"30px"}}>Smart phones</a></li>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"30px"}}>Feature phones</a></li>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"30px"}}>Accessories</a></li><br></br>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"20px",borderColor:"black"}}>Explore Android<VscChevronRight  class="ero" style={{fontSize:"28px",fontWeight:"40px"}}/></a></li>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"22px"}}>For enterprises <VscChevronRight class="ero1" style={{fontSize:"28px",fontWeight:"40px"}}/></a></li>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"22px"}}>Community</a></li>
            <li> <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"22px"}}>Support</a></li><br></br>

              
               <button class="uk-button uk-button-primary btn" class="btn1" style={{height:"70px",borderColor:"white",backgroundColor:"#0065ed",
              display:"flex",fontFamily:"Nokia,Arial,Helvetica,sans-serif",borderRadius:"10px",fontSize:"23px",
              alignContent:"center",alignItems:"center",textTransform:"none",color:"white",marginLeft:"4px",paddingTop:"3px"}}><a class="" style={{alignItems:"center",marginLeft:"86px"}}  >Create Account</a></button>
             <li class="acct" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",
             fontSize:"20px",fontWeight:"bold"}}>Already have a account?  
            <a class=""   href="#" style={{color:"#0065ed",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"22px",marginLeft:"20px"}}>Sign in</a></li>
            <li><FiLock style={{fontSize:"26px",fontWeight:"bold",color:"black",fontWeight:"bold"}} />
             <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"23px",fontWeight:"bold",marginLeft:"26px"}}>Shopping bag</a></li>
             <li>< VscArchive style={{fontSize:"29px",fontWeight:"bold",color:"black",fontWeight:"bold"}} />
             <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"23px",fontWeight:"bold",marginLeft:"26px"}}>Track order</a></li>
         
             <li><VscLocation style={{fontSize:"29px",fontWeight:"bold",color:"black",fontWeight:"bold"}} />
             <a class=""   href="#" style={{color:"black",fontFamily:"Nokia,Arial,Helvetica,sans-serif",fontSize:"23px",fontWeight:"bold",marginLeft:"26px"}}>India</a></li>
             
            
         </ul>
         </div>
        
    </div>
</div>




                </nav>



                
        </div>
    );
}
 export default Header;