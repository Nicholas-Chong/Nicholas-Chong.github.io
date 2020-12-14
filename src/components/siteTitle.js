import React from 'react'
import Textloop from 'react-text-loop'
import '../css/SiteTitle.css'

class SiteTitle extends React.Component {
  render() {
    return (
      <div class='titleContainer content'>
        <h1>Nicholas Chong</h1>
        <h2>
          <Textloop 
            children={["Software Developer", "Investor", "Photographer", "Student"]} 
            interval={2000}
          />
        </h2>
      </div>
    )
  }
}

export default SiteTitle