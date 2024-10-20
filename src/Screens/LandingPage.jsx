import React from 'react'
import Buttons from '../Components/Inputs_and_Buttons/Buttons';
import google from '../Assets/Images/google.webp'
import { Link } from 'react-router-dom';
import gptLogo from '../Assets/Images/chatgptlogo.png';
import gptLogoWhite from '../Assets/Images/gptLogoWhite2.png';
import { colorConfigs } from '../colorConfig';

export default function LandingPage() {
  return (
    <div className='landing_page_main'>
        <div style={{height:"25px"}}>

        </div>
        <div className='lp_main_wrapper'>
        <div className='lp_upper_part'>
            <div className='globsyn_badge'>
                <div style={{color:"red",fontSize:"20px",fontWeight:"600"}}>globsyn</div>
                <div style={{color:"black",fontSize:"16px",fontWeight:"700"}}>business school</div>
                <div style={{fontSize:"8px",fontWeight:"600",color:"grey"}}>AMBITION OF THE YOUNG</div>
            </div>
            <div className='ai_part'>
                <div style={{color:"white",fontSize:"15px",fontWeight:"600"}}>Powered by</div>
                <div style={{color:"white",fontSize:"27px",fontWeight:"600",fontStyle:"italic",paddingTop:"10px",display:"flex",alignItems:"center",gap:"5px"}}>
                <img src={gptLogoWhite} style={{height:"30px",}} alt="" />
                  Open AI</div>
            </div>

        </div>

      <div className='lp_middle_part_main'>
        <center style={{fontSize:"90px",}}>
            <center style={{fontWeight:"700"}}>IVT</center>
        <center style={{fontSize:"28px",}}>Interactive Virtual Tutor</center>
        </center>
  
        <center>By</center>
        <center style={{fontSize:"23px"}}>Globsyn Business School</center>

      </div>

      <div className='lp_lower_part'>
        <div className='know_about'>
        Know about IVT
        </div>
        <div  className='lp_sign_options_main'>
            <Link style={{textDecoration:"none",color:"black"}} to='/signin'>
            <Buttons className='lp_button_main'  bgColor='white' text='Sign in' onClick="" />
            </Link>
          <Link style={{textDecoration:"none",color:"black"}} to='signup' >
          <Buttons className='lp_button_main' width='300px' bgColor={colorConfigs.buttonColor}  text='Sign up' onClick='' />
          </Link>
          
            <div className='google_button'>
                Continue with Google <img style={{height:"25px"}} src={google} alt="" />

            </div>
        </div>

      </div>
        </div>


      

       
      
    </div>
  )
}
