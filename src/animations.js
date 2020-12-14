// Based off Jeremias Menichelli (https://github.com/jeremenichelli/react-view-transition-example/blob/master/src/timelines/index.js)

import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import BackButton from './components/backButton'

// Had to be included, otherwise production build does not work (animations break)
gsap.registerPlugin(Power1)

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('h1, h2');

  timeline
    .from(node, 0.16, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  const goodPaths = ['/WorkExperience', '/Projects', '/Education']

  if (!(goodPaths.includes(pathname))) {
    timeline = getHomeTimeline(node, delay);
  } else {
    timeline = getDefaultTimeline(node, delay);
  }
    

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))

  // timeline.play()
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  if (node instanceof BackButton) { return }
  
  timeline.to(node, 0.1, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}