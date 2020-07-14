import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { pdfjs, Document, Page } from 'react-pdf';

// weird hack needed to enable react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  let resumeAspectRatio = isMobile ? 0.78 : isTabletOrMobile ? 1.2 : 1.9;

  return (
    <div style={styles.container}>
      <h1>Last updated 07/06/20</h1>
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
}

export default Resume;