import React from 'react'
import './Footer.css' 
import { Card, Icon, Image } from 'semantic-ui-react';
import { WiDirectionUpRight } from "react-icons/wi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import {RiLinkedinFill} from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

import { RiArrowDownSLine } from "react-icons/ri";

function Footer()
{
    return(
        <div>



<div class="uk-flex foot">
    <div class="uk-card uk-card-default uk-card-body ft1">
        <div class="ftrr">
                 <li><a class="ftr1">Smart phones</a></li><br></br><br></br>
                  <li><a class="ftr1">Feature phones</a></li><br></br><br></br>
                  <li> <a class="ftr1">Accessories</a></li><br></br><br></br>
                  </div>
            
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left ft2">
        <div class="ft22">
                  <li><p class="ftr2">Nokia phones and Android</p></li>
                  <li><a class="ftr3">Our Android story</a></li><br></br>
                  <li> <a class="ftr3">Google one</a></li><br></br>
                  <li><a class="ftr3">Android™ 11</a></li><br></br><br></br>
                  <li><p class="ftr2">Support</p></li>
                  <li> <a class="ftr3">Custumer support</a></li><br></br>
                  <li> <a class="ftr3">User guid</a></li><br></br>
                  <li> <a class="ftr3">FAQs</a></li><br></br>
                  <li> <a class="ftr3">Service and repairs</a></li><br></br>
                  <li> <a class="ftr3">Warranty and insurance</a></li><br></br>
                  </div>
    </div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-left ft3">
                  <li><p class="ftr2">For businesses</p></li>
                  <li><a class="ftr3">Android enterprise recommended smart phones</a></li><br></br>
                  <li> <a class="ftr3">Mobile security</a></li><br></br>
                  <li><a class="ftr3">HMD connect pro</a></li><br></br><br></br>
                  <li><p class="ftr2">Get involved</p></li>
                  <li> <a class="ftr3">Community forum</a></li><br></br>
                  <li> <a class="ftr3">Beta labs</a></li><br></br>
                  <li> <a class="ftr3">Developer portal</a></li><br></br><br></br><br></br>
                  <li> <a class="ftr4">Visit Nokia.com<WiDirectionUpRight style={{fontSize:"35px",fontWeight:"bold"}}   /></a></li><br></br>
                  
    </div>
</div>

<div class="uk-inline ss">
    <ul>

<div class="uk-card uk-card-default uk-card-body sms">
        <div class="">
                 <li><a class="" style={{color:"black",fontWeight:"bold"}}>Smart phones</a></li>
                  <li><a class="" style={{color:"black",fontWeight:"bold"}}>Feature phones</a></li>
                  <li> <a class="" style={{color:"black",fontWeight:"bold"}}>Accessories</a></li>
                  </div>
            
    </div>



  <li><a class="" type="link" style={{marginLeft:"30px",listStyle:"none",width:"400px",color:"black",fontSize:"17px",fontWeight:"bold"}}>Nokia phones and Android <RiArrowDownSLine /></a></li>
    <div uk-dropdown="mode: click">
                  <li><a class="font">Our Android story</a></li><br></br>
                  <li> <a class="font">Google one</a></li><br></br>
                  <li><a class="font">Android™ 11</a></li><br></br><br></br>
       
        </div><br></br>
        
    
   <li> <a class="" type="link" style={{marginLeft:"30px",listStyle:"none",width:"400px",color:"black",fontSize:"17px",fontWeight:"bold"}}>Support</a></li>
    <div uk-dropdown="mode: click">
                  <li><a class="font">Custumer support</a></li><br></br>
                  <li> <a class="font">User guid</a></li><br></br>
                  <li><a class="font">FAQs</a></li><br></br>
                  <li> <a class="font">Service and repairs</a></li><br></br>
                  <li><a class="font">Warranty and insurance</a></li><br></br>
                  <br></br>
    </div>
    <br></br>

    <li> <a class="" type="link" style={{marginLeft:"30px",listStyle:"none",width:"400px",color:"black",fontSize:"17px",fontWeight:"bold"}}>For businesses</a></li>
    <div uk-dropdown="mode: click">
                  <li><a class="font">Android enterprise recommended smart phones</a></li><br></br>
                  <li> <a class="font">Mobile security</a></li><br></br>
                  <li><a class="font">HMD connect pro</a></li><br></br><br></br>
        </div>
        <br></br>

        <li> <a class="" type="link" style={{marginLeft:"30px",listStyle:"none",width:"400px",color:"black",fontSize:"17px",fontWeight:"bold"}}>Get involved</a></li>
    <div uk-dropdown="mode: click">
                  <li><a class="font">Community forum</a></li><br></br>
                  <li> <a class="font">Beta labs</a></li><br></br>
                  <li><a class="font">Developer portal</a></li><br></br><br></br>
        </div>
        <br></br>
     
        <br></br>
        </ul>
</div>










<div>
        <div class="uk-card uk-card-default uk-card-body icn">

            <p><RiFacebookCircleFill  class="icn1"   style={{marginRight:"60px"}}  />
            <RiInstagramLine  style={{marginRight:"60px"}}/>
            <RiLinkedinFill style={{marginRight:"60px"}}/>
            <RiYoutubeFill style={{marginRight:"60px"}}/>
            <RiTwitterFill  style={{marginRight:"60px"}}/></p>
            
        </div>
    </div>
            

    <div class="uk-clearfix">

    <div class="uk-float-left lastl">
        <div class="uk-card uk-card-default uk-card-body">
            <h2 class="" style={{color:"rgb(145, 142, 142)",fontWeight:"bold"}}>hmd.</h2>
            <p>© 2021 HMD Global. All rights reserved. Nokia is a registered trademark of Nokia Corporation. HMD Global Oy 
                is the exclusive licensee of the Nokia brand for phones & tablets.</p>
        </div>
    </div>


    <div class="uk-float-right lastr">
        <div class="uk-card uk-card-default uk-card-body">
            <div class="final">
            <a class="fr">Site terms</a>
            <a class="fr"> Seller terms</a>
            <a class="fr">Privacy</a>
            <a class="fr">Manage cookies</a>
            <a class="fr">E-waste</a>
            </div><br></br>
            <div class="fr1">
                <a class="fr2" style={{color:"black"}}>Press <WiDirectionUpRight style={{color:"black",fontSize:"22px"}}  /></a>
            </div>
        </div>
    </div>
   
</div>

    


    </div>
    );
}
 export default Footer;