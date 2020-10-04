import React, { useState } from 'react';
import Gist from 'react-gist';

const ProgressBarCSS = () => {
  const [progress, setProgress] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setProgress(true)}
        style={{ marginRight: '5px' }}
      >
        Go!
      </button>
      <button type="button" onClick={() => setProgress(false)}>
        Reset
      </button>
      <div className="progressbar" style={{ marginTop: '10px' }}>
        <div className={`inner ${progress === true ? 'progress' : ''}`} />
      </div>

      <Gist id="d7f32e3d6b58547aa718e2ae558567b8" />
    </>
  );
};

export default ProgressBarCSS;
