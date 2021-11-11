import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <h3 className="info">About Me</h3>
                <p className="info">I'm a software developer who is living and working in Vancouver, BC.</p>
                <p className="info">Currently, I'm a software developer at Fyrefish Technologies.  Previously, I was a laboratory manager and research assistant at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>. I also worked as a software developer for the Department of Psychology's <a className="wlink" href="https://demo.tapestry-tool.com/tapestry/walkthrough/#/nodes/4827">Tapestry Tool</a>.  I received my B.Sc. in Cognitive Systems with a focus in Computer Science from UBC in 2020.</p>
                <p className="info">In my free time, I like to cook, paint, garden, go on walks, and work on my bicycle.</p>
            </div>
        )
    }
}

export default About