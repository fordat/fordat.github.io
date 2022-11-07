import React from 'react';

class Projects extends React.Component {
    render() {
        return (
          <div className="info-wrapper">
            <h3 className="info">Projects</h3>
            <div 
              className="project"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://taskmanagermern.herokuapp.com/login','_blank');}}
            >
              <div className="project-header">
                <h4 className="project-header-title">Task Manager</h4>
                <div className="project-header-date">October 2022</div>
              </div>
              <div className="project-description">
                Task Manager is a full-stack calendar app I created to help manage my time. I have a love for vintage internet aesthetics, so I created all the icons in Microsoft Paint and made a moving background using the <a className="wlink" href="https://p5js.org/">p5.js</a> library.
              </div>
              <div className="project-description">
                Stack: MongoDB, Express, React/Redux, Node
              </div>
            </div>
          </div>
        )
    }
}

export default Projects