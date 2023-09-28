import React,{Fragment} from 'react'
import user from "../Imagens/foto1.png"
import "../CSS/About.css"
import Navbar from './Navbar'
import Resume from './Resume'
import Services from './Services'
const About = () => {
  return (
    <Fragment>
        
        <Navbar/>

    <section className='about'>
      
      <div className="about-row">

        <div className='about-column'>
            <img src={user} alt="user" />
        </div>

        <div className='about-column'>
            <div className="about-info">
                <div className="main-title">
                    <h2>Sobre mim</h2>
                </div>
                <h3>👋Oi meu nome e Luan, Atualmente  Estou Estudando Full Stack 😄</h3>

                <div className="personal-info">
                    <div className="info-row">
                      <div className="col"> <p>Nome: <span>Luan Batista</span></p></div>
                      <div className="col"> <p>Idade: <span>27</span></p></div>
                      <div className="col"> <p>Email: <span>luantrabalho49@gmail.com</span></p></div>
                      <div className="col"> <p>Celular: <span>(32)988012724</span></p></div>
                      <div className="col"> <p>Guthub: <span>https://github.com/luanpa</span></p></div>
                      <div className="col"> <p>Cidade: <span>Juiz De Fora</span></p></div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
     <Resume/>
     <Services/>
    </Fragment>
  )
}

export default About