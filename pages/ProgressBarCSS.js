import React, { useState } from 'react';

const ProgressBarCSS = () => {
  const [progress, setProgress] = useState(false);

  return (
    <>
      <button onClick={() => setProgress(true)}>Go!</button>
      <button onClick={() => setProgress(false)}>Reset</button>
      <div className="progressbar">
        <div className={`inner ${progress === true ? 'progress' : ''}`} />
      </div>
    </>
  );
};

export default ProgressBarCSS;
