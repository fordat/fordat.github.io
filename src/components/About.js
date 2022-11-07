import React from 'react';

class About extends React.Component {
    render() {
        return (
          <div className="info-wrapper">
            <h3 className="info">About Me</h3>
            <p className="info">I'm a software developer who lives and works in Vancouver, BC.</p>
            <p className="info">Currently, I'm at Fyrefish Technologies, working on front-end features in Vue.js and creating designs with Figma.  Previously, I was a laboratory manager, researcher, and developer at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>, where I worked on problems relating to cognitive science, perception, and data visualization.</p>
            <p className="info">In my free time, I like to cook, eat, swim, paint, play board games, and ride my bicycle.</p>
          </div>
        )
    }
}

export default About