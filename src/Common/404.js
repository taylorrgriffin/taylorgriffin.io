import React from 'react';
import { NavLink } from 'react-router-dom';

import { PAGE_BACKGROUND, SECONDARY, FONT } from '../styles/colors';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <p style={styles.heading}>404</p>
      <p style={styles.subHeading}>Sorry!</p>
      <p style={{ textAlign: "center" }}>
        We couldn't find that page.
        Go <NavLink
          to="/"
          activeStyle={{
            color: SECONDARY,
            textDecoration: "none"
          }}
        >
          home
        </NavLink>?
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
    color: FONT,
    fontSize: 'calc(8px + 2vmin)',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    textAlign: 'left',
    flex: '1 1 auto',
    backgroundColor: PAGE_BACKGROUND
  },
  heading: {
    textAlign: 'center',
    fontSize: '4em',
    fontWeight: 'bolder',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bolder',
  },
}

export default PageNotFound;
