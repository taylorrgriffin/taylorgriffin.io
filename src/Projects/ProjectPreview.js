import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const ProjectPreview = ({ title, img, description, route }) => {
  let history = useHistory();
  return (
    <Grid item xs={10} sm={6} lg={4} md={4}>
      <div style={styles.container} onClick={()=>{history.push(`/projects/${route}`)}}>
        <div style={styles.imgContainer}>
          <img src={img} style={styles.img} alt={`${route} logo`}/>
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
    alignItems: 'center',
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