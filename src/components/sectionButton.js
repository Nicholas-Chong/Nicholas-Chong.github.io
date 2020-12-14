import React from 'react'
import '../css/sectionButton.css'
import {Link} from 'react-router-dom'

class SectionButton extends React.Component {
  render() {
    return (
      <div>
        <h2 class='sectionButton'><Link to={this.props.link}>{this.props.name}</Link></h2>
      </div>
    )
  }
}

export default SectionButton