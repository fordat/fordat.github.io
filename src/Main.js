import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Painting from './components/Painting.js';

class Main extends React.Component {

    state = {
        background: ""
    };

    changeBackground = (color) => {

        let background = color;
        console.log("changed the background to " + background);
        
        // take a copy of the existing state
        let oldBackground = {...this.state.background};

        oldBackground = background;
        // add state
        this.setState({background: background});
        document.body.style = `background: ${oldBackground};`;
    };

    render() {
        return (
            <div>
              <div className="App-box">
                <h1 className="content">Ford Atwater</h1>
                <BrowserRouter>
                  <Navbar />
                  <br />
                  <Route path="/home" exact render={() => <Home changeBackground={this.changeBackground}></Home>} />
                  <Route path="/work" component={Work} />
                  <Route path="/painting" component={Painting} />
                  <Route path="/" exact component={About} />
                </BrowserRouter>
              </div>
            </div>
          );
    }

}

export default Main