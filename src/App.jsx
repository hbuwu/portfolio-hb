import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import About from './pages/About';
import Commissions from './pages/Commissions';
import Contact from './pages/Contact';


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
          </Layout>
        </Switch>

    </Router>
  );
}

export default App;
