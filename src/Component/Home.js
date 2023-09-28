import React,{Fragment}from 'react'
import user from "../Imagens/foto3.png"
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
         <p>•🧠 Cursando Engenharia de Software</p>

         <div className="social">
            <a href="https://github.com/luanpa" target="_blank" and rel="noopener noreferrer"><i class="fa fa-github" ></i></a>
            <a href="https://www.linkedin.com/in/luan-batista-9223a41a1/" target="_blank" and rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
            <a href="https://drive.google.com/file/d/1-cR7E8xZ-TlnaIW9EQ0c-umw-BGKMy5K/view" target="_blank" and rel="noopener noreferrer"><i class="fa-brands fa-google-drive"></i></a>            
         </div>
         <div className="text">
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