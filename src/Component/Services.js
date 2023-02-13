import React,{Fragment} from 'react'
import "../CSS/Services.css"
const Services = () => {
  return (
    <Fragment>

    <section className='services'>
     
     <div className="title">
            <h2>Linguagem/Framework</h2>
     </div>

     <div className="ser-row">

        <div className="ser-col">
            <div className="sigle-services">
                <span className="icon-area"> <i class="fa-brands fa-js"></i></span>
                <div className="services-content">
                    <h2>javascript</h2>
                    <p>Conhecimento Em javascript(Curso Udemy)</p>
                </div>
            </div>
        </div>

         {/*  */}
         <div className="ser-col">
            <div className="sigle-services">
                <span className="icon-area"> <i class="fa-brands fa-css3-alt"></i></span>
                <div className="services-content">
                    <h2>Css</h2>
                    <p>Tenho Conhecimento Css</p>
                </div>
            </div>
        </div>
        {/*  */}
        <div className="ser-col">
            <div className="sigle-services">
                <span className="icon-area"> <i class="fa-brands fa-react"></i></span>
                <div className="services-content">
                    <h2>React</h2>
                    <p>Fiz alguns projetos em React</p>
                </div>
            </div>
        </div>

         {/*  */}
         <div className="ser-col">
            <div className="sigle-services">
                <span className="icon-area"> <i class="fa-brands fa-node"></i></span>
                <div className="services-content">
                    <h2>Node.js</h2>
                    <p>Fiz alguns projetos Com Node</p>
                </div>
            </div>
        </div>
 
      {/*  */}
        <div className="ser-col">
            <div className="sigle-services">
                <span className="icon-area"> <i class="fa-brands fa-java"></i></span>
                <div className="services-content">
                    <h2>java</h2>
                    <p>Curso Udemy</p>
                </div>
            </div>
        </div>

     </div>

    </section>



    </Fragment>
  )
}

export default Services