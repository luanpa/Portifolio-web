import React,{Fragment}from 'react'
import user from "../Imagens/foto1.png"
import "../CSS/Home.css"
import Navbar from './Navbar'
const Home = () => {
  return (
    <Fragment>
        
      <Navbar/>

      <section className='home'>
        
       <div className='text'>
        <h3>Oi, meu nome e Luan</h3>
        <div className='wrapper'>
            <div className='fixed-text'> <h2>Conhecimento em</h2></div>
            <div className='moving-text'>
                <li><h2> React </h2></li>
                <li><h2> Css </h2></li>
                <li><h2> javascript </h2></li>
                <li><h2> Node.js </h2></li>
            </div>
        </div>
         <p>•🧠 Formado em  Análise e Desenvolvimento</p>
         <p>•🧠 Cursando Engenharia de software</p>

         <div className="social">
            <a href="https://github.com/luanpa"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/luan-batista-9223a41a1/"><i class="fa fa-linkedin"></i></a>            
         </div>
       </div>

       <div className='img'>
        <img src={user} alt="user" />

       </div>


      </section>

    </Fragment>
  )
}

export default Home