import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <p style={styles.heading}>Hello!</p>
      <p>
        My name is Taylor Griffin, and I am a Software Engineer from Portland, Oregon.
        This past June I graduated from Oregon State University Center with a Bachelor of Science degree in Computer Science.
      </p>
      <p>
        I am currently pursing full-time software engineering opportunities in Seattle, Portland, and San Francisco.
      </p>
      <p>
        If you wish to connect with me, please add me on <a style={styles.link} href="https://linkedin.com/in/taylor-randolph-griffin">LinkedIn</a>,
        or get my contact information from my <a style={styles.link} href="/resume">resume</a>.
      </p>
      <p>
        In the meantime, feel free to take a look at some of the projects I have been a part of in the past four years over on the
        &nbsp;<a style={styles.link} href="/projects">projects</a> page.
      </p>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    marginLeft: '10vw',
    marginRight: '10vw',
    textAlign: 'left',
    flex: '1 1 auto'
  },
  heading: {
    textAlign: 'center'
  },
  link: {
    color: '#61DAFB',
    textDecoration: 'none'
  },
}

export default About;