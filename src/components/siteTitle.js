import React from 'react'
import Textloop from 'react-text-loop'
import '../css/SiteTitle.css'

class SiteTitle extends React.Component {
  render() {
    return (
      <div class='titleContainer content'>
        <img class='profilePic' src='android-chrome-512x512.png' />
        <h1>Nicholas Chong</h1>
        <h2>
          <Textloop 
            children={["Software Developer", "Investor", "Photographer", "Student"]} 
            interval={2000}
          />
        </h2>
        <div class="socialsContainer">
          <a 
            href="https://github.com/Nicholas-Chong/" 
            target="_blank" rel="noreferrer" 
            style={{color: "black"}}>
            <i class="bx bxl-github"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/nicholas-chong-/" 
            target="_blank" rel="noreferrer" 
            style={{color: "black"}}>
            <i class='bx bxl-linkedin-square'/>
          </a>
        </div>
      </div>
    )
  }
}

export default SiteTitle