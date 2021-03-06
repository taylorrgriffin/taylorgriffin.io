import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import { PRIMARY, HEADER_BACKGROUND } from '../styles/colors';

const Link = styled.a`
  color: white;
  size: 10px;
  text-decoration: none;
  &:hover {
    color: ${PRIMARY};
  }
`;

const SocialLink = styled.a`
  color: white;
  size: 5px;
  text-decoration: none;
  &:hover {
    color: ${PRIMARY};
  }
`;

export const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const styles = style(isTabletOrMobile, isMobile);
  return (
    <header style={styles.header}>
      <div style={styles.navbar}>
        <div style={styles.titleContainer}>
          <a style={styles.text} href="/"><FontAwesomeIcon icon={faTerminal}/>&nbsp;&nbsp;taylorgriffin.io</a>
        </div>
        {
          isMobile && 
          <div style={styles.socialLinks}>
            <SocialLink href="https://github.com/taylorrgriffin">
              <FontAwesomeIcon icon={faGithub}/>
              &nbsp;&nbsp;&nbsp;taylorrgriffin
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/taylor-randolph-griffin">
              <FontAwesomeIcon icon={faLinkedin} />
              &nbsp;&nbsp;&nbsp;Taylor Griffin
            </SocialLink>
          </div>
        }
        <div style={styles.links}>
          <h3 style={{
            margin: 0,
            padding: 20,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.75,
            textTransform: "uppercase",
            borderBottom: useRouteMatch({path: "/about"}) ? `${PRIMARY} 6px solid` : undefined
          }}>
            <Link href="/" style={{color: useRouteMatch({path: "/about"}) ? PRIMARY : 'white',}}>About</Link>
          </h3>
            <h3 style={{
            margin: 0,
            padding: 20,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.75,
            textTransform: "uppercase",
            borderBottom: useRouteMatch({path: "/projects"}) ? `${PRIMARY} 6px solid` : undefined
          }}>
            <Link href="/projects" style={{color: useRouteMatch({path: "/projects"}) ? PRIMARY : 'white'}}>PROJECTS</Link>
          </h3>
          <h3 style={{
            margin: 0,
            padding: 20,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.75,
            textTransform: "uppercase",
            borderBottom: useRouteMatch({path: "/blog"}) ? `${PRIMARY} 6px solid` : undefined
          }}>
            <Link href="/blog" style={{color: useRouteMatch({path: "/blog"}) ? PRIMARY : 'white'}}>BLOG</Link>
          </h3>
          <h3 style={{
            margin: 0,
            padding: 20,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.75,
            textTransform: "uppercase",
            borderBottom: useRouteMatch({path: "/resume"}) ? `${PRIMARY} 6px solid` : undefined
          }}>
            <Link href="/resume" style={{color: useRouteMatch({path: "/resume"}) ? PRIMARY : 'white'}}>RESUME</Link></h3>
        </div>
        {
          !isMobile && 
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
        }
      </div>
    </header>
  )
}

const style = (isTabletOrMobile = false, isMobile = false) => {
  return {
    header: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#121212',
      backgroundColor: HEADER_BACKGROUND,
      width: '100%',
      fontSize: 'calc(10px + 2vmin)',
      padding: 0,
    },
    headline: {
      display: 'flex',
      flexDirection: isTabletOrMobile ? 'column' : 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    socialLinks: {
      display: 'flex',
      paddingTop: isMobile ? 10 : undefined,
      flexDirection: isMobile ? 'row' : 'column',
      justifyContent: isMobile ? 'space-evenly' : 'space-around',
      width: isMobile ? '70%' : undefined
    },
    navbar: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-evenly',
      alignItems: isMobile ? 'center' : undefined,
      width: '100%'
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flex: isMobile ? 1 : 0.75,
      width: isMobile ? '80%' : undefined
    },
    navLink: {
      color: 'white',
      textDecoration: 'none'
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    text: {
      fontSize: isMobile ? 36 : 28,
      color: PRIMARY,
      textDecoration: 'none',
      fontWeight: 700,
      lineHeight: 1.75,
    }
  }
}

export default Header;