import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <p>Hi!</p>
      <p className="Paragraph">
        My name is Taylor Griffin, and I am a Software Engineer from Portland, Oregon.
        I currently work as a developer at the Oregon State University Center for Applied Systems and Software.
      </p>
      <p className="Paragraph">
        In December 2020, I will be looking for full-time Software Engineering employment opportunities.
        Please add me on LinkedIn or GitHub if you are interested in connecting with me.
      </p>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
  }
}

export default About;