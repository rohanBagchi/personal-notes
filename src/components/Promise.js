import { useState } from 'react';
import { CustomPromise } from '../../utils';

const Promise = () => {
  const [promiseMessages, setPromiseMessages] = useState([]);
  const runPromise = () =>
    new CustomPromise((resolve) => {
      setTimeout(() => {
        resolve('I am a resolved value!!!');
      }, 10);
    })
      .then((resolvedValue) => {
        setPromiseMessages((prevPromiseMessages) => [
          ...prevPromiseMessages,
          resolvedValue,
        ]);
        return 'I am next resolved value';
      })
      .then((resolvedValue) => {
        console.warn(resolvedValue);
        setPromiseMessages((prevPromiseMessages) => [
          ...prevPromiseMessages,
          resolvedValue,
        ]);
      });
  return (
    <div>
      <button type="button" onClick={runPromise}>
        Run Promise polyfill!!
      </button>

      <h4>Promise Results</h4>
      <pre>{JSON.stringify(promiseMessages, null, 2)}</pre>
    </div>
  );
};

export default Promise;
