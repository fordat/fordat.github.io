import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <h3 className="info">About Me</h3>
                <p className="info">I'm a software developer who lives and works in Vancouver, BC.</p>
                <p className="info">Currently, I'm at Fyrefish Technologies, working on designs and code for new products.  Previously, I was a laboratory manager, research, and developer at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>, where I got to work on problems relating to cognitive science, perception, and data visualization.</p>
                <p className="info">In my free time, I like to cook, eat, paint, garden, swim, and ride my bicycle.</p>
            </div>
        )
    }
}

export default About