import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <h3 className="info">About Me</h3>
                <p className="info">I'm a researcher and developer working out of Vancouver, BC. I consider myself a builder – ever since I was little, I've loved to make things and engage with them.</p>
                <p className="info">Currently, I'm a laboratory manager at the UBC <a className="wlink" href="https://viscoglab.psych.ubc.ca/">Visual Cognition Lab</a>, where I study information visualization and work on our codebase.  Previously, I was a software developer for the Department of Psychology's <a className="wlink" href="https://demo.tapestry-tool.com/tapestry/walkthrough/#/nodes/4827">Tapestry Tool</a>.  I received my B.Sc. in Cognitive Systems with a focus in Computer Science from UBC in 2020.</p>
                <p className="info">When I'm not working, I like to cook, paint, swim, go on walks, and tinker with my bicycle.</p>
            </div>
        )
    }
}

export default About