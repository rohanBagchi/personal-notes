import { useState } from 'react';
import Gist from 'react-gist';
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
      <Gist id="bfd4a12576e080cc6ea135c9ca228dee" />
    </div>
  );
};

export default Throttle;
