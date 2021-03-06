import React from 'react';
import logo from '../assets/logo.svg';
import { PRIMARY, FOOTER_BACKGROUND, BORDER } from '../styles/colors';

export const Footer = () => {
  return (
    <div style={styles.footer}>
      <img src={logo} style={styles.logo} alt="logo"/>
      This site is powered by&nbsp;
      <a style={styles.link} href="https://reactjs.org/">React</a>. It was bootstrapped with&nbsp;
      <a style={styles.link} href="https://github.com/facebook/create-react-app">Create React App</a>. The source code is&nbsp;
      <a style={styles.link} href="https://github.com/taylorrgriffin/taylorgriffin.io">on GitHub </a>.
    </div>
  )
}

let styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FOOTER_BACKGROUND,
    width: '100%',
    fontSize: 'calc(4px + 2vmin)',
    minHeight: '8vh',
    flexWrap: 'wrap',
    color: 'white',
    borderTop: `1px solid ${BORDER}`
  },
  link: {
    color: PRIMARY,
    textDecoration: 'none'
  },
  logo: {
    height: '4.5vmin',
    pointerEvents: 'none',
    animation: 'App-logo-spin infinite 10s linear'
  }
}

export default Footer;