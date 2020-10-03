import { useState } from 'react';
import Gist from 'react-gist';
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
      <Gist id="c3d1bf6aadbde583cf8b8e11e73f99e5" />
    </div>
  );
};

export default Debounce;
