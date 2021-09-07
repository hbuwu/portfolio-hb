import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import About from './pages/About';
import Commissions from './pages/Commissions';
import Contact from './pages/Contact';
import ProjectTouch from './pages/ProjectTouch';
import Boc2021 from './pages/ProjectBoC2021';
import GamingPacifier from './pages/ProjectGamingPacifier';
import Top2021 from './pages/ProjectTop2021';
import HexDesign from './pages/ProjectHexDesign';
import Other from './pages/ProjectOther';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Intro />
          </Route>
          <Layout>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/commissions'>
            <Commissions />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/touch'>
            <ProjectTouch />
          </Route>
          <Route exact path='/boc2021'>
            <Boc2021 />
          </Route>
          <Route exact path='/gaming-pacifier'>
            <GamingPacifier />
          </Route>
          <Route exact path='/topbelgium2020'>
            <Top2021 />
          </Route>
          <Route exact path='/hexdesignagency'>
            <HexDesign />
          </Route>
          <Route exact path='/other'>
            <Other />
          </Route>
          </Layout>
        </Switch>
    </Router>
  );
}

export default App;
