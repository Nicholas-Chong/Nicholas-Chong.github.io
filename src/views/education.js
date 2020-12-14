import React from 'react'
import '../css/detailsPage.css'
import Card from '../components/card'
import BackButton from '../components/backButton'

const content = [
  {
    title: 'BSc, Computer Science', 
    dates: '2020 - 2024',
    company: 'Western University',
    description: [
      'Pursuing Bachelor of Science in Computer Science, double major with Economics; 4.0 GPA (90%)',
      'Coursework: Computer Science 1 + 2, Information Systems and Design, Calculus, Linear Algebra',
      'Director at Western Founders Network (business & technology club)',
    ],
    links: []
  },
  {
    title: 'OSSD', 
    company: 'John Fraser Secondary School',
    dates: '2016 - 2020',
    description: [
      'Designed digital assets and page layouts for the 2020 yearbook according to design specifications and timelines',
      'Photographed over 15 school wide events with photos featured on school social media accounts and the yearbook',
      'Executive member at Peel Investment Club: contributed to bi-weekly lessons on various finance-related topics which were shared to 100+ club members',
    ],
    links: []
  },
]

const cards = content.map(({title, dates, description, links, company}) => {
  return <Card title={title} dates={dates} bullets={description} links={links} company={company}/>
})

class Education extends React.Component {
  render() {
    return (
      <div>
        <div class='pageTitle content'>
          <h1>Education</h1>
        </div>
        <div class='content--inner'>
          {cards}
        </div>
        <BackButton/>
      </div>
    )
  }
}

export default Education