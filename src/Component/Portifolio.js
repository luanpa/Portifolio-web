import React,{Fragment,useState } from 'react'
import Menu from './PortData'
import "../CSS/Portifolio.css"
import Navbar from './Navbar'
import user from "../Imgportifolio/fotodois.jpg"
import use1 from "../Imgportifolio/fotoum.jpg"

const Portifolio = () => {
    const[items, setItems] = useState(Menu)
  return (
    <Fragment>

     <Navbar/>

     <section className='portifolio'>

         
         <div className="port-tittle">
            <h2> Meus<span>Trabalhos</span></h2>
            <p>Outros estão No github</p>
         </div>
              
          <div className="nav">
               <ul className='nav-list'>
                     <li>
                        <a href="#">FrontEnd</a>
                     </li>
                     <li>
                        <a href="#">Full Stack(em breve)</a>
                     </li>

               </ul>
                        
          </div>
 {/*  */}
          <div className="port-row">
                
                        <div className='port-col'>
                            <div className='port-item'>
                                <a href="#">
                                   <img src={user} alt="im" />
                                   <div className="overlay">
                                    <div className='overlay-inner'>
                                        <h4>Portifolio</h4>
                                        <p></p>
                                        </div>
                                        
                                  </div> 
                                </a>                 
                            </div>          
                    </div>
                    {/* 2 */}
                    <div className='port-col'>
                    <div className='port-item'>
                                <a href="#">
                                   <img src={use1} alt="im" />
                                   <div className="overlay">
                                    <div className='overlay-inner'>
                                        <h4>Portifolio</h4>
                                        <p></p>
                                        </div>  
                               </div> 
                               </a> 
                               </div>                   
                            </div> 
                            {/* 3 */}
                            <div className='port-col'>
                            <div className='port-item'>
                                <a href="#">
                                   <img src={user} alt="im" />
                                   <div className="overlay">
                                    <div className='overlay-inner'>
                                        <h4>Portifolio</h4>
                                        <p></p>
                                        </div>  
                               </div> 
                               </a>                    
                            </div> 
                            </div>   
                        </div>
                     
                          
                          
     </section>

        
    </Fragment>
  )
}

export default Portifolio