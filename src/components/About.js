import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <h3 className="info">About Me</h3>
                <p className="info">I'm a software developer working in Vancouver, BC.</p>
                <p className="info">Currently, I'm a Frontend Developer at PhoneBox, a wireless network provider. I'm proficient in TypeScript and Node.js and have extensive experience working with the MERN stack for web development and React Native for mobile.</p>
                <p className="info">Previously, I was at Fyrefish Technologies, working on designs and developing new products.  Previously, I was a laboratory manager, researcher, and developer at the <a className="wlink" href="https://viscoglab.psych.ubc.ca/">UBC Visual Cognition Lab</a>, where I got to work on problems relating to cognitive science, perception, and data visualization.</p>
                <p className="info">In my free time, I like to cook, eat, swim, play board games, and mess around with my bicycle.</p>
            </div>
        )
    }
}

export default About