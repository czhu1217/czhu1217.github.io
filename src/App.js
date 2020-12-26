import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Today from './components/daytoday/Today';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Blog from './pages/blog/Blog';
import RemoteWorkFamily from './pages/blog/posts/RemoteWorkFamily';
import BetterProposals from './pages/blog/posts/BetterProposals';
import FamousOnQuora from './pages/blog/posts/FamousOnQuora';
import RemoteMonth from './pages/blog/posts/FirstRemoteMonth';
import BVG from './pages/blog/posts/BVG';
import MovingBerlin from './pages/blog/posts/MovingBerlin';

function App() {

  return (
    <Router>
        <Nav />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blog' component={Blog} />
            <Route path='/starting-a-family-remote-work' component={RemoteWorkFamily} />
            <Route path='/how-to-write-better-proposals' component={BetterProposals} />
            <Route path='/how-to-become-famous-on-quora' component={FamousOnQuora} />
            <Route path='/my-first-month-of-working-remotely' component={RemoteMonth} />
            <Route path='/the-case-of-the-berlin-public-transport' component={BVG} />
            <Route path='/moving-to-berlin-in-10-simple-steps' component={MovingBerlin} />
          </Switch>
        <Footer />
        <Today />
    </Router>
  );
}

export default App;
