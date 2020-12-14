import React from 'react'
import '../css/detailsPage.css'
import Card from '../components/card'
import BackButton from '../components/backButton'

const content = [
  {
    title: 'Coronavirus Dashboard', 
    company: 'Personal Project',
    dates: 'June 2020 - Present',
    description: [
      'Designed and developed dashboard solution accessed by 1000+ users and 50-100 Daily Active Users',
      'Features interactive visualizations of key metrics related to COVID-19 in Ontario',
      'Developed a client-side JavaScript callback for updating date range – resulted in 3x faster performance',
      'Wrote Python scripts to automate data updates from a government API and store in a Heroku PostgreSQL database',
      'Thoroughly tested the solution against various test cases to ensure use case requirements are met',
      'Deployed first version two months after starting development, with iterative improvements in the months following',
      'Built with Python, JavaScript, Plotly, Peewee ORM, Tweepy, Ontario Government API, Heroku',
    ],
    links: [
      {site: 'Github', link: 'https://github.com/Nicholas-Chong/COVID-19-Twitter-Bot-and-Dashboard'},
      {site: 'Coronavirus Dashboard', link: 'http://www.ontariocovid-19.com'}
    ]
  },
  {
    title: 'Coronavirus Twitter Bot', 
    company: 'Personal Project',
    dates: 'June 2020 - Present',
    description: [
      'Automated the creation and execution of daily update Tweets using Python scripts and Heroku scheduler commands',
      'Gained 1500+ followers and over 100,000 monthly impressions without any external promotion',
      'Provides value to users by making COVID-19 metrics easily accessible on a user’s Twitter timeline',
      'Followed Python PEP8 style guide to ensure code quality and maintainability',
    ],
    links: [
      {site: 'Github', link: 'https://github.com/Nicholas-Chong/COVID-19-Twitter-Bot-and-Dashboard'},
      {site: 'Twitter Bot', link: 'https://twitter.com/OntarioCovid19'}
    ]
  },
]

const cards = content.map(({title, dates, description, links, company}) => {
  return <Card title={title} dates={dates} bullets={description} links={links} company={company}/>
})

class Projects extends React.Component {
  render() {
    return (
      <>
      <div id='foo'>
        <div class='pageTitle content'>
          <h1>Projects</h1>
        </div>
        <div class='content--inner'>
          {cards}
        </div>
        <BackButton/>
      </div>
      </>
    )
  }
}

export default Projects