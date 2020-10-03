import { useState } from 'react';
import { debounce } from '../utils';

const Debounce = () => {
  const [msg, setMsg] = useState('');

  const runDebounce = () => {
    const foo = (message) => setMsg(`Message: ${message}`);
    const debouncedFoo = debounce(foo, 1000);
    debouncedFoo('Hi');
    debouncedFoo('Hi, I am Rohan');
  };

  return (
    <div>
      <h1>Debounce</h1>
      <button type="button" onClick={runDebounce}>
        runDebounce
      </button>
      <button type="button" onClick={() => setMsg('')}>
        Reset
      </button>
      <p>{msg}</p>
      <div>
        <pre>
          {`
            const debounce = (fn, timeOut, context = null) => {
              let timeOutID;

              return function debouncedFn(...args) {
                if (timeOutID) {
                  clearTimeout(timeOutID);
                }

                timeOutID = setTimeout(() => {
                  fn.apply(context, args);
                }, timeOut);
              };
            };

            const foo = (message) => setMsg(\`Message: \${message}\`);
            const debouncedFoo = debounce(foo, 1000);
            debouncedFoo('Hi');
            debouncedFoo('Hi, I am Rohan');
          `}
        </pre>
      </div>
    </div>
  );
};

export default Debounce;
