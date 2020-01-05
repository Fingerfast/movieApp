import React from 'react';
import styled from 'styled-components'
import Dashboard from "./components/Dashboard";
import SearchMovies from './components/SearchMovies'
import Title from './components/Title'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";


const MovieAppWrapper = styled.div`
    background: #424242;
    a {
        text-decoration: none;
    }
`

function App() {
  return (
      <MovieAppWrapper>
          <Router>
              <NavigationMenu />
              <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/title/" component={Title} />
                  <Route path="/search" component={SearchMovies} />
                  <Route path="*">
                      <div>Not Found</div>
                  </Route>
              </Switch>
          </Router>
      </MovieAppWrapper>
  );
}

export default App;
