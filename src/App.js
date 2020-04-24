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
          <Route exact path='/' component={Todo} />
          <Route path='/posts' component={Posts} />

          <Route path='/posts/:post_id' component={Linkpost} />
          <Route
            path="/Redirect"
            component={() => {
              global.window && (global.window.location.href = 'http://moviereact.tk/');
              return null;
            }}
          />


        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
