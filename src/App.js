import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Posts from './components/Posts';
import Modal from './components/Modal';
import Footer from './components/Footer'
import Linkpost from './components/Linkpost';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <Modal />


        <div className="App">
          <Navbar />
          <Route path='/Posts' component={Posts} />
          <Route exact path='/' component={Todo} />

          <Route
            path="/Redirect"
            component={() => {
              global.window && (global.window.location.href = 'http://moviereact.tk/');
              return null;
            }}
          />
          <Route path='/Posts/:post_id' component={Linkpost} />


        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
