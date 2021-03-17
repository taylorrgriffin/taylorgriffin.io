import React from 'react';
import { Link } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { Typography, Chip, Link as MaterialLink } from '@material-ui/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HALE from '../../assets/HALE.png';
import diagram from '../../assets/HALE_Diagram.png';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../../styles/colors';

const labels=['Python', 'Javascript', 'Node.js', 'Socket I/O', 'Google APIs', 'MongoDB']

const Project = () => {
  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isNarrow);
  return (
    <div style={styles.parentContainer}>
      <div style={styles.container}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>High Altitude Liquid Engine Data Pipeline</Typography>
        <img src={HALE} style={styles.img} alt="Project logo"/>
        {
          labels && <div style={styles.labels}>
            {labels.map((label) => {
              return <Chip color="secondary" label={label} variant="outlined" style={styles.label} />
            })}
          </div>
        }
        <MaterialLink href="/projects" style={{ alignSelf: 'start', marginBottom: 10 }}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back to Projects</MaterialLink>
        <Typography variant="lead">
        Sensor data pipeline for liquid engine testing apparatus.
        Developed for Oregon State University American Insitute of 
        Aeronautics and Astronautics.
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3" component="h2">
          Requirements
        </Typography>
        <ul>
          <li>Design and implement interface to acquire readings from sensors affixed to the liquid engingine testing apparatus</li>
          <li>Develop script to store sensor readings in a database within 10 seconds of collection</li>
          <li>Create RESTful web service allowing users to programtically fetch sensor readings</li>
        </ul>
      </div>
      <div style={styles.container}>
        <Typography variant="h3" component="h2">
          System Architecture
        </Typography>
        <Typography variant="body">
          {/* <br/><br/>
          The High Altitude Liquid Engine (HALE) project is a collaberation between OSU AIAA and various capstone teams including Aerospace Engineers, Mechanical Engineers, and Computer Scientists.
          <br/><br/>
          It is OSU's entry in the Base 11 space challange, a national challange in which the winning team will earn a $1 million prize for their institution by designing, building, and launching a liquid-propelled, single-stage rocket to an altitude of 100 kilometers (the Karman Line) by December 30, 2021.
          <br/><br/>
          For my role in the HALE project, I was a part of the CS capstone subteam, which worked closely with the Test Stand subteam. We were tasked with creating software and systems which supported the Test Stand, a liquid engine testing apparatus. */}
        </Typography>
        <img src={diagram} style={styles.diagram} />
      </div>
      {/* <div style={styles.container}>
        <Typography variant="h3">
          Duties
        </Typography>
        <Typography variant="body">
          <br/><br/>
          Some of the systems I was responsible for designing and developing include:
          <ul>
            <li>An interface to acquire data from sensors affixed to the test stand using Python and LabView</li>
            <li>A Node.js RESTful webservice to make sensor data globally available</li>
            <li>A MongoDB database in which to store sensor data</li>
            <li>A Python interface used to programatically store sensor data on Google Drive</li>
          </ul>
          As the sole computer science team working on HALE, we had to be self-succifient, and learned to gather and define our own requirements with the help of senior HALE members.
          I gained valuable leadership expereience in this role, as I was often the point of the contact representing the computer science team, and made the majority of the system architecture descisions for the data pipeline.
        </Typography>
      </div> */}
      <div style={styles.container}>
        <Typography variant="h3" component="h2">
          Implementation
        </Typography>
        <Typography variant="body">
          TODO: finish this section
        </Typography>
      </div>
      {/* <div style={styles.container}>
        <Typography variant="h3">
          Learning outcomes
        </Typography>
        <Typography variant="body">
          <br/><br/>
          A few of the key skills I was able to practice while working on HALE were:
          <ul>
            <li>Leadership, communication, and collaberating with a large multi-disciplinary team of engineers, specifically in the context of aerospace</li>
            <li>Planning, designing, and developing a fully automated sensor-to-cloud data pipeline</li>
            <li>Working with the Google authentication and Google Drive APIs in Python</li>
            <li>Implementing security-first features in a RESTful webservice including HTTPS, TLS certificates, and API keys.</li>
            <li>Practice with MongoDb and Expresss for quick and easy data avaliablity through the REST pardigm</li>
          </ul>
        </Typography>
      </div> */}
      <div style={styles.container}>
        <Typography variant="h3">
          More
        </Typography>
        <Typography variant="body">
          <br/><br/>
          The HALE project is still in developement, though I am now only minorly involved since I have graduated and left OSU. For more on HALE, you can read about what the team is up to on the <Link color="secondary" underline="none" href="https://osuaiaa.com/hale">OSU AIAA website</Link>.
        </Typography>
      </div>
    </div>
  );
}

const style = isNarrow => {
  return {
    parentContainer: {
      backgroundColor: PAGE_BACKGROUND,
      paddingLeft: '10vw',
      paddingRight: '10vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 'calc(8px + 2vmin)',
      paddingTop: 20,
      paddingLeft: '5vw',
      paddingRight: '5vw',
      textAlign: 'left',
      backgroundColor: BACKGROUND,
      borderRadius: 25,
      marginTop: 10,
      marginBottom: 20,
      paddingBottom: 20,
      boxSizing: "border-box",
      border: `1px solid ${BORDER}`
    },
    img: {
      width: isNarrow ? 200 : 260
    },
    diagram: {
      width: '80%'
    }
  }
}

export default Project;