import React from 'react'
import '../css/card.css'

class Card extends React.Component {
  extractItems(list, isLink=false) {
    var listItems

    if (isLink === true){ 
      listItems = list.map(({link, site}) => {
        return <li><a target='_blank' rel='noreferrer' href={link}>{site}</a></li> }
      )
    } else {
      listItems = list.map((i) => {
        return <li>{i}</li> }
      )
    }

    return listItems
  }

  render() {
    return (
      <div class='cardContainer'>
        <div class='cardName'>
          <h1 class='title'>{this.props.title}</h1>
          <h2 class='subTitle'>{this.props.company}</h2>
        </div>
        <h2 class='subTitle2'>{this.props.dates}</h2>
        <ul>
          {this.extractItems(this.props.bullets)}
          {this.extractItems(this.props.links, true)}
        </ul>
      </div>
    )
  }
}

export default Card