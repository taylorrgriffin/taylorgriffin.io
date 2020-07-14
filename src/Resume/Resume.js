import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { pdfjs, Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown as downloadIcon } from '@fortawesome/free-regular-svg-icons';

import pdf from '../assets/Resume_07_06_20.pdf';

// weird hack needed to enable react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  let resumeAspectRatio = isMobile ? 0.78 : isTabletOrMobile ? 1.2 : 1.9;

  return (
    <div style={styles.container}>
      <div style={styles.span}>
        Download&nbsp;&nbsp;
        <a href={pdf} download>
          <FontAwesomeIcon icon={downloadIcon} style={styles.downloadLink}/>          
        </a>
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
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: '3vw',
    marginBottom: '3vw',
    marginLeft: '1vw',
    marginRight: '1vw',
    textAlign: 'left',
    flex: '1 1 auto'
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