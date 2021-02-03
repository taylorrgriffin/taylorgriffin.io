import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { pdfjs, Document, Page } from 'react-pdf';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../styles/colors';

// weird hack needed to enable react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  let resumeAspectRatio = isMobile ? 0.7 : isTabletOrMobile ? 1.0 : 1.7;

  return (
    <div style={styles.container}>
      <div style={styles.parent}>
        <div style={styles.span}>
          <Button variant="outlined" color="primary" download="Taylor_Griffin_Resume.pdf" onClick={()=>{
            window.location.href = '/Taylor_Griffin_Resume.pdf'
          }}>Download</Button>
        </div>
        <Document
          file={require('../assets/Taylor_Griffin_Resume.pdf')}
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
    backgroundColor: BACKGROUND
  },
  parent: {
    backgroundColor: PAGE_BACKGROUND,
    padding: '3vw',
    borderRadius: 18,
    border: `1px solid ${BORDER}`
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