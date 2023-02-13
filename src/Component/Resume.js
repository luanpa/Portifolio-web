import React,{Fragment, useEffect}from 'react'
import "../CSS/Resume.css"
import Aos from 'aos';
import "aos/dist/aos.css"
const Resume = () => {
    useEffect(()=>{
        Aos.init({duration: 2000, once:true, easing:"ease"});
    })

  return (
    <Fragment>


     <section className='resume'>
      
      <div className="main-title">
        <h2>Minha trajetória</h2>
      </div>
        
        <div className="res-data">
            <div className="timeline">
                <ul>
                <li>
               
               <div data-aos="zoom-in" className="content">
                <span>Análise e desenvolvimento de Sistema(Unopar) </span>
               </div>

                </li> 
                <li>
               
               <div data-aos = "fade-right" className="content">
                <span>Cursando Engenharia de software(Unopar)</span>
               </div>

                </li> 
                
                
                </ul>
            </div>
        </div>
      
     </section>

    </Fragment>
  )
}

export default Resume