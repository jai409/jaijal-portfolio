import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/avatar.jpeg')} alt="Jaijal George" />
        </div>
        <div className="content">
          <div className="social-icons">
            <a href="https://github.com/jai409" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jaijal-george-" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jaijal George</h1>
          <p>Information Systems Student & AI Enthusiast</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/jai409" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jaijal-george-" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;