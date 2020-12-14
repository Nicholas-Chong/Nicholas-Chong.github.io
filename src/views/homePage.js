import React from 'react'
import SiteTitle from '../components/siteTitle'
import SectionButton from '../components/sectionButton'
import '../css/homePage.css'

class HomePage extends React.Component {
  render() {
    return (
      <div id='jimmy'>
        <SiteTitle/>
        <div class='sectionsContainer'>
          <SectionButton name='Work Experience' link='/WorkExperience'/>
          <SectionButton name='Projects' link='/Projects'/>
          <SectionButton name='Education' link='/Education'/>
        </div>
      </div>
    )
  }
}

export default HomePage