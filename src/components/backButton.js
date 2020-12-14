import React from 'react'
import '../css/backbutton.css' 
import {Link} from 'react-router-dom'
import 'boxicons'

class BackButton extends React.Component {
  render() {
    return (
      <div class='buttonContainer'>
        <Link class='buttonContainer' to='/'><i class='bx bx-arrow-back bx-sm'></i><h1>Go Back</h1></Link>
      </div>
    )
  }
}

export default BackButton