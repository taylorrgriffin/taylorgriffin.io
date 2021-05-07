import React from 'react';
import { Link } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { BACKGROUND, PAGE_BACKGROUND, BORDER, FONT } from '../styles/colors';

const About = () => {
  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isNarrow);

  return (
    <div style={styles.parentContainer}>
      <div style={styles.container}>
        <p style={styles.heading}>Welcome!</p>
        <p>
          My name is Taylor Griffin, and I am a Software Engineer based out of Portland, Oregon.
        </p>
        <p>
          I currently work at Cambia Health Solutions, where I develop and support infrastructure enabling value based arrangements, a transformative billing model that compensates health care providers based on patient outcomes.
        </p>
        <p>
          Value Based Programs as an initiative at Regence have led to 6% lower costs for members, 200% higher patient satisfaction scores, and 14% less opioid scripts filled.
        </p>
        <p>
          If you wish to connect with me, please add me on <Link color="secondary" underline="none" href="https://linkedin.com/in/taylor-randolph-griffin">LinkedIn</Link>,
          or get my contact information from my <Link color="secondary" underline="none" href="/resume">resume</Link>.
        </p>
        <p>
          In the meantime, feel free to take a look at some of my <Link color="secondary" underline="none" href="/projects">projects</Link>, or my programming <Link color="secondary" underline="none" href="/blog" >blog</Link>!
        </p>
      </div>
    </div>
  );
}

let style = isNarrow => {
  return {
    parentContainer: {
      backgroundColor: BACKGROUND,
      paddingLeft: '10vw',
      paddingRight: '10vw',
      paddingTop: '3vw',
      paddingBottom: '1vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'left',
      color: FONT,
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
}

export default About;
