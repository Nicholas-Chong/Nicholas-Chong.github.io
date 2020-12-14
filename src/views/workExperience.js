import React from 'react'
import '../css/detailsPage.css'
import Card from '../components/card'
import BackButton from '../components/backButton'

const content = [
  {
    title: 'Deck Supervisor', 
    company: 'Making Waves Swim School',
    dates: 'August 2019 - Present',
    description: [
      'Supervised teams of 5-10 instructors to ensure compliance with company safety standards',
      'Implemented and executed a plan to efficiently conduct evaluations of 100+ swimmers each season',
      'Supported new staff members during the first days of the season by acting as the person of contact for assistance',
      'Pitched possible improvements of safety protocol to facility manager',
    ],
    links: []
  },
  {
    title: 'Swim Instructor', 
    company: 'Making Waves Swim School',
    dates: 'October 2018 - August 2019',
    description: [
      'Adapted quickly to effectively accommodate swimmers with special needs (Ex. children with autism)',
      'Developed relationships with families by providing feedback to swimmers and parents after each lesson',
      'Achieved approximately 80% pass rate across all age groups (toddlers, children, adults)',
    ],
    links: []
  },
]

const cards = content.map(({title, dates, description, links, company}) => {
  return <Card title={title} dates={dates} bullets={description} links={links} company={company}/>
})

class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <div class='pageTitle content'>
          <h1>Work Experience</h1>
        </div>
        <div class='content--inner'>
          {cards}
        </div>
        <BackButton/>
      </div>
    )
  }
}

export default WorkExperience