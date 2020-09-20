import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
`;

export const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const styles = style(isTabletOrMobile);
  return (
    <header style={styles.header}>
      <div style={styles.headline}>
        <h1 style={styles.text}><a style={styles.navLink} href="/">taylorgriffin.io</a></h1>
        <div style={styles.socialLinks}>
          <Link href="https://github.com/taylorrgriffin">
            <FontAwesomeIcon icon={faGithub}/>
            &nbsp;&nbsp;&nbsp;taylorrgriffin
          </Link>
          <Link href="https://linkedin.com/in/taylor-randolph-griffin">
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;&nbsp;&nbsp;Taylor Griffin
          </Link>
        </div>
      </div>
      <div style={styles.navbar}>
        <h3 style={{
          margin: 0,
          padding: 20,
          color: 'black',
          borderBottom: useRouteMatch({path: "/about"}) ? 'tomato 6px solid' : undefined
        }}>
          <Link href="/" style={{color: useRouteMatch({path: "/about"}) ? 'tomato' : 'black',}}>About</Link>
        </h3>
        <h3 style={{
          margin: 0,
          padding: 20,
          color: 'black',
          borderBottom: useRouteMatch({path: "/resume"}) ? 'tomato 6px solid' : undefined
        }}>
          <Link href="/resume" style={{color: useRouteMatch({path: "/resume"}) ? 'tomato' : 'black'}}>Resume</Link></h3>
          <h3 style={{
          margin: 0,
          padding: 20,
          color: 'black',
          borderBottom: useRouteMatch({path: "/projects"}) ? 'tomato 6px solid' : undefined
        }}>
          <Link href="/projects" style={{color: useRouteMatch({path: "/projects"}) ? 'tomato' : 'black'}}>Projects</Link>
        </h3>
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
    socialLinks: {
      position: isTabletOrMobile ? undefined : 'absolute',
      right: isTabletOrMobile ? undefined : '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
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