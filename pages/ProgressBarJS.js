import React, { useEffect, useState } from 'react';
import Gist from 'react-gist';

const ProgressBarJS = () => {
  const [progress, setProgress] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (progress === false) {
      setWidth(0);
      return;
    }

    const intervalID = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth === 300) return;

        return prevWidth + 10;
      });
    }, 100);

    return () => clearInterval(intervalID);
  }, [progress]);

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
      <div
        style={{
          height: '50px',
          width: '300px',
          backgroundColor: '#d8d8d8',
          boxSizing: 'border-box',
          position: 'relative',
          marginTop: '10px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          ProgressBarJS
        </span>
        <div
          style={{
            height: '100%',
            backgroundColor: 'green',
            width,
          }}
        />
      </div>

      <Gist id="696db51065ad9c312ae262d41ce335e4" />
    </>
  );
};

export default ProgressBarJS;
