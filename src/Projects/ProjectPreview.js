import React from 'react';
import { Grid } from '@material-ui/core';

const ProjectPreview = ({ title, img, description }) => {
  return (
    <Grid item xs={10} sm={6} lg={4} md={4} spacing={3}>
      <div style={styles.container}>
        <div style={styles.imgContainer}>
          <img src={img} style={styles.img}/>
        </div>
        <div style={styles.info}>
          <h3 style={styles.heading}>{title}</h3>
          <div style={styles.description}>{description}</div>
        </div>
      </div>
    </Grid>
  );
}

let styles = {
  container: {
    height: "320px",
    color: "white",
    backgroundColor: '#282c34',
    alignItems: 'center'
  },
  imgContainer: {
    backgroundColor: 'white',
    height: '200px',
    textAlign: 'center'
  },
  img: {
    width: '210px',
  },
  info: {
    backgroundColor: '#282c34',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
  },
  heading: {
    margin: '8px'
  },
  description: {
    fontSize: '14px',
    margin: '2px'
  }
}

export default ProjectPreview;