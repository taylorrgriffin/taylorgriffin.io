import React from 'react';

const About = () => {
  return (
    <div style={styles.parentContainer}>
      <div style={styles.container}>
        <p style={styles.heading}>Hello!</p>
        <p>
          My name is Taylor Griffin, and I am a Software Engineer from Portland, Oregon.
          This past June I graduated from Oregon State University with a Bachelor's in Computer Science and Magna Cum Laude honors.
        </p>
        <p>
          I am currently pursuing full-time software engineering opportunities.
        </p>
        <p>
          If you wish to connect with me, please add me on <a style={styles.link} href="https://linkedin.com/in/taylor-randolph-griffin">LinkedIn</a>,
          or get my contact information from my <a style={styles.link} href="/resume">resume</a>.
        </p>
        <p>
          In the meantime, feel free to take a look at some of the <a style={styles.link} href="/projects">projects</a> I have been involved in.
        </p>
      </div>
    </div>
  );
}

let styles = {
  parentContainer: {
    backgroundColor: '#000000',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    textAlign: 'left',
    backgroundColor: '#121212',
    width: '70vw',
    borderRadius: 25
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bolder',
  },
  link: {
    color: '#03DAC6',
    textDecoration: 'none'
  },
}

export default About;
