import { useState } from 'react';
import { throttle } from '../utils';

const Throttle = () => {
  const [msg, setMsg] = useState('');

  const runThrottle = () => {
    const foo = (message) => setMsg(`Message: ${message}`);
    const throttlededFoo = throttle(foo, 1000);
    throttlededFoo('Hi');
    throttlededFoo('Hi, I am Rohan');
  };

  return (
    <div>
      <h1>Throttle</h1>
      <button type="button" onClick={runThrottle}>
        runThrottle
      </button>
      <button type="button" onClick={() => setMsg('')}>
        Reset
      </button>
      <p>{msg}</p>
      <div>
        <pre>
          {`
            const throttle = (fn, timeOut, context = null) => {
              let timeOutID;

              return function throttledFunction(...args) {
                if (timeOutID) return;

                timeOutID = setTimeout(() => {
                  fn.apply(context, args);
                  clearTimeout(timeOutID);
                }, timeOut);
              };
            };

            const foo = (message) => setMsg(\`Message: \${message}\`);
            const throttlededFoo = throttle(foo, 1000);
            throttlededFoo('Hi');
            throttlededFoo('Hi, I am Rohan');
          `}
        </pre>
      </div>
    </div>
  );
};

export default Throttle;
