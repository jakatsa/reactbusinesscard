import React from "react"
import busImage from "./images/bus.jpg";
import logoImage from "./images/logo.png"

export default function InnerContainer(){
    return(
    <div className="inner-container" >
        
            <div>
            <img src={logoImage} alt="Bus" />
            </div>

            <div className="inner-body" >
                <h1>Joe Akatsa Buisness Card</h1>
                <h2>Frontend Developer</h2>
                <a href="https://joeakatsaportfolio.netlify.app/" >View Website</a>
               

                <div className="button" >
<a href="jakatsa5@gmail.com" >  Mail Me</a>
                    
                </div>

                <div className="section-2" >
                    <div className="About-me">
                        <h3>About Me</h3>
                        
                        <p className="paragraph" >I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                            I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                    
         
                    </div>

                 
                </div>
              

            </div>

           
</div>
    )
}

