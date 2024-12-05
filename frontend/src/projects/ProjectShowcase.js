import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Projects from './Projects';

function ProjectShowcase() {
  const [section, setSection] = useState('completed');
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center ">Projects</h1>
        <div className="d-flex align-items-center gap-3 justify-content-center mt-4">
          <strong
            onClick={() => setSection('completed')}
            className={section === 'completed' ? 'opac' : ' opaci'}
          >
            Completed{' '}
          </strong>
          <strong
            onClick={() => setSection('incoming')}
            className={section === 'incoming' ? 'opac' : 'opaci'}
          >
            Incoming
          </strong>
        </div>
        {section === 'completed' && (
          <div>
            <Projects />
          </div>
        )}
        {section === 'incoming' && (
          <div
            style={{ height: '50vh', opacity: '0.3' }}
            className="d-flex border align-items-center justify-content-center"
          >
            <h1> No Incoming Projects Yet </h1>
          </div>
        )}
      </Container>
    </div>
  );
}

export default ProjectShowcase;
