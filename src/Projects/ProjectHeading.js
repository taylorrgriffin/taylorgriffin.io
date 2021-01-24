import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Typography, Chip, Link } from '@material-ui/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectHeading = ({ heading, subHeading, imgSrc, labels, repo, repoName }) => {
  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const style = styles(isNarrow);
  return(
    <div style={style.container}>
      <Typography variant={isNarrow ? "h3" : "h2"} component="h2">
        {heading}
      </Typography>
      <Typography variant="h5" component="p">
        {subHeading}
      </Typography>
      <img src={imgSrc} style={style.img} alt="Project logo"/>
      {
        labels && <div style={style.labels}>
          {labels.map((label) => {
            return <Chip color="secondary" label={label} variant="outlined" style={style.label} />
          })}
        </div>
      }
      {repo && <Link style={{ marginTop: 10 }} href={repo}><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;{repoName}</Link>}
      <Link href="/projects" style={{ alignSelf: 'start' }}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back to Projects</Link>
    </div>
  );
}

export default ProjectHeading;

const styles = isNarrow => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'calc(8px + 2vmin)',
    paddingTop: 20,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    backgroundColor: '#121212',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    boxSizing: "border-box"
  },
  img: {
    width: isNarrow ? 300 : 400
  },
  label: {
    margin: 5
  },
  labels: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
})