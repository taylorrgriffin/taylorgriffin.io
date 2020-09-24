import React from 'react';
import { NavLink } from 'react-router-dom';

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
            color: "tomato",
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
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    textAlign: 'left',
    flex: '1 1 auto',
    backgroundColor: '#282c34'
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
