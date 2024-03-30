import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <h3 className="info">About Me</h3>
                <p className="info">I'm a software developer working in Vancouver, BC.</p>
                <p className="info">Currently, I'm the Senior Frontend Developer at PhoneBox, a wireless network provider. I'm proficient in TypeScript and Node.js and have extensive experience working with the MERN stack for web development and React Native / Expo for mobile.</p>
                <p className="info">I've also been a junior developer at Fyrefish Technologies, where I worked on designs and new products. I also have a background in research: I was a laboratory manager, researcher, and developer at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>, where I researched cognitive science, perception, and data visualization.</p>
                {/* <p className="info">Previously, I was at Fyrefish Technologies, working on designs and developing new products.  Before that, I was a laboratory manager, researcher, and developer at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>, where I researched cognitive science, perception, and data visualization.</p> */}
                <p className="info">In my free time, I like to cook, eat, swim, play board games, and work on new software projects.</p>
            </div>
        )
    }
}

export default About