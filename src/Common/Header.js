import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const styles = style(isTabletOrMobile);
  return (
    <header style={styles.header}>
      <div style={styles.headline}>
        <h1 style={styles.text}><a style={styles.navLink} href="/">taylorgriffin.io</a></h1>
        <div style={styles.socialLinks}>
          <a style={styles.socialLink} href="https://github.com/taylorrgriffin">
            <FontAwesomeIcon icon={faGithub}/>
            &nbsp;&nbsp;&nbsp;taylorrgriffin
          </a>
          <a style={styles.socialLink} href="https://linkedin.com/in/taylor-randolph-griffin">
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;&nbsp;&nbsp;Taylor Griffin
          </a>
        </div>
      </div>
      <div style={styles.navbar}>
        <h3 style={styles.text}><a style={styles.navLink} href="/">About</a></h3>
        <h3 style={styles.text}><a style={styles.navLink} href="/resume">Resume</a></h3>
        <h3 style={styles.text}><a style={styles.navLink} href="/projects">Projects</a></h3>
      </div>
    </header>
  )
}

const style = (isTabletOrMobile = false) => {
  return {
    header: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '100%',
      fontSize: 'calc(10px + 2vmin)'
    },
    headline: {
      display: 'flex',
      flexDirection: isTabletOrMobile ? 'column' : 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    text: {
      color: 'black'
    },
    socialLinks: {
      position: isTabletOrMobile ? undefined : 'absolute',
      right: isTabletOrMobile ? undefined : '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    socialLink: {
      color: 'black',
      textDecoration: 'none'
    },
    navbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%'
    },
    navLink: {
      color: 'black',
      textDecoration: 'none'
    }
  }
}

export default Header;