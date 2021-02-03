import React from 'react';
import { Link } from '@material-ui/core';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../styles/colors';

const About = () => {
  return (
    <div style={styles.parentContainer}>
      <div style={styles.container}>
        <p style={styles.heading}>Welcome!</p>
        <p>
          My name is Taylor Griffin, and I am a Software Engineer based out of Portland, Oregon.
          This past June I graduated from Oregon State University with a Bachelor's in Computer Science and Magna Cum Laude honors.
        </p>
        <p>
          I currently work as a Software Development Engineer at Cambia Health Solutions, where I focus on backend and database development.
        </p>
        <p>
          If you wish to connect with me, please add me on <Link color="secondary" underline="none" href="https://linkedin.com/in/taylor-randolph-griffin">LinkedIn</Link>,
          or get my contact information from my <Link color="secondary" underline="none" href="/resume">resume</Link>.
        </p>
        <p>
          In the meantime, feel free to take a look at some of my <Link color="secondary" underline="none" href="/projects">projects</Link>!
        </p>
      </div>
    </div>
  );
}

let styles = {
  parentContainer: {
    backgroundColor: BACKGROUND,
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
    backgroundColor: PAGE_BACKGROUND,
    width: '70vw',
    border: `1px solid ${BORDER}`,
    borderRadius: 18
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bolder',
  },
}

export default About;
