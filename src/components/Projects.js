import React from 'react';

class Projects extends React.Component {
    render() {
        return (
          <div className="project-wrapper">
            <h3 className="projects">Projects</h3>
            <div 
              className="project"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/fordat/expo-roomplan','_blank');}}
            >
              <div className="project-header">
                <h4 className="project-header-title">Expo RoomPlan</h4>
                <div className="project-header-date">July 2025</div>
              </div>
              <div className="project-description">
                An open-source NPM package & Expo module that exposes Apple's <a className="wlink" href="https://developer.apple.com/augmented-reality/roomplan/">RoomPlan</a> SDK to React Native. You can use it to create 3D scans of rooms or larger structures and export them as USDZ files.
              </div>
              <div className="project-description">
                Stack: React Native, TypeScript, Node, Swift.
              </div>
            </div>
            <div 
              className="project"
              onClick={(e) => {
                e.preventDefault();
                window.open('http://nanonomicron.com/login','_blank');}}
            >
              <div className="project-header">
                <h4 className="project-header-title">NANONOMICRON</h4>
                <div className="project-header-date">March 2024</div>
              </div>
              <div className="project-description">
                An online role-playing game with generative SVG art and pixel graphics. For this project I created a RESTful API using Express.js / TypeScript / MongoDB and hosted it as an AWS EC2 instance. The frontend is React.js with Redux for state management, hosted as an S3 bucket on AWS. Currently, I have over 130 users, a leaderboard, an online chat system, and a “News” API that automatically posts updates.
              </div>
              <div className="project-description">
                Stack: React/Redux, TypeScript, Node, Express, MongoDB.
              </div>
            </div>
            <div 
              className="project"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://bsky.app/profile/quigonswbot.bsky.social','_blank');}}
            >
              <div className="project-header">
                <h4 className="project-header-title">Qui-Gon Bot</h4>
                <div className="project-header-date">July 2023</div>
              </div>
              <div className="project-description">
                A BlueSky bot that posts randomly selected quotes from Qui-Gon Jinn in English and Japanese.
              </div>
              <div className="project-description">
                Stack: Node.
              </div>
            </div>
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
                Stack: MongoDB, Express, React/Redux, Node.
              </div>
            </div>
          </div>
        )
    }
}

export default Projects