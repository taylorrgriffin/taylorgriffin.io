import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { pdfjs, Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleDown as downloadIcon } from '@fortawesome/free-regular-svg-icons';


import pdf from '../assets/Resume_07_06_20.pdf';

// weird hack needed to enable react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Download = styled.a`
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  &:hover {
    cursor: pointer;
    color: tomato;
    svg {
      color: tomato;
    }
    path {
      color: tomato;
    }
  }
  margin-bottom: 15;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 150px;
`;

const Resume = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  let resumeAspectRatio = isMobile ? 0.78 : isTabletOrMobile ? 1.2 : 1.9;

  return (
    <div style={styles.container}>
      <div style={styles.parent}>
        {/* <div style={styles.span}>
          <Download href={pdf} download>
            Download&nbsp;&nbsp;
            <Icon icon={downloadIcon} style={styles.downloadLink}/>
          </Download>
        </div> */}
        <div style={styles.span}>
          {/* TODO: fix download functionality */}
          <Button variant="outlined" color="primary" download onClick={()=>{
            window.location.href = pdf
          }}>Download</Button>
        </div>
        <Document
          file={require('../assets/Resume_07_06_20.pdf')}
          onLoadError={() => {console.error("Failed to load pdf.")}}
          onLoadSuccess={()=>{ console.info("Loaded pdf.") }}>
          <Page
            scale={resumeAspectRatio}
            pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingTop: '3vw',
    paddingBottom: '3vw',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    textAlign: 'left',
    flex: '1 1 auto',
    backgroundColor: '#000000'
  },
  parent: {
    backgroundColor: '#121212',
    padding: '3vw',
    borderRadius: 25
  },
  heading: {
    textAlign: 'center'
  },
  link: {
    color: '#61DAFB',
    textDecoration: 'none'
  },
  downloadLink: {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
    margin: '0px'
  },
  span: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    marginRight: '40vw',
    marginBottom: '10px'
  }
}

export default Resume;