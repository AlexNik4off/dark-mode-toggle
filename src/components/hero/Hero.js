import React from 'react'
import "./Hero.css"
import heroImg from '../../assets/phone.svg'

const Hero = ({myTheme}) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="--flex-start">
          <button className="--btn btn-p">Learn More</button>
          <button className="--btn --btn-danger">Sign Up</button>
        </div>
        </div>
        <div className="--text-center">
          <img src={heroImg} alt="phone" width={200}></img>
        </div>
      </div>
    </section>
  )
}

export default Hero