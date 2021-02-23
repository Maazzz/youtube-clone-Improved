import React, { Component } from 'react';
import Header from './Header';
import HorScroll from './HorScroll';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Bottombar from './bottombar';
import Gaming from './Gaming';

class App extends Component {
  render() {  
    return (
      <div className="app">
        <Router>
          <Switch>
          <Route path="/Gaming">
            <div className='flex-col'>
              <Header />
              <HorScroll />
            </div>
              <Sidebar />
              <Bottombar/>
              <Gaming/>
          </Route>
          <Route path="/search/:searchitem">
              <h1>Search page</h1>
            </Route>
            <Route path="/All">
              <div className='flex-col'>
              <Header />
              <HorScroll />
              </div>
              <Sidebar />
              <Bottombar/>
              <Videos />
            </Route>
            <Route path="/">
              <div className='flex-col'>
              <Header />
              <HorScroll />
              </div>
              <Sidebar />
              <Bottombar/>
              <Videos />
            </Route>
            
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
