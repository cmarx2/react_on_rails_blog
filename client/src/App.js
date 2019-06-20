import React from 'react';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Blog from './components/blogs/Blog';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
  <Navbar />
  <Container>    
  <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route exact path='/blog' component={Blog} />
  <Route component={NoMatch} />
  </Switch>
  </Container>
  </>
)

export default App;
