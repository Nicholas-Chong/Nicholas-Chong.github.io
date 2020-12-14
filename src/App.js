// Based off Jeramias Menichelli (https://github.com/jeremenichelli/react-view-transition-example/blob/master/src/App.js)

import './App.css';
import HomePage from './views/homePage'
import WorkExperience from './views/workExperience'
import Projects from './views/projects'
import Education from './views/education'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './animations'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route render={({ location }) => {
        const { pathname, key } = location;

        return (
          <TransitionGroup component={null}>
            <Transition
              key={key}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{enter: 750, exit: 150}}
            >
              <Switch location={location}>
                <Route path="/WorkExperience" component={WorkExperience} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Education" component={Education} />
                <Route exact path="/*" component={HomePage}/>
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
