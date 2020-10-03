import { useState } from 'react';
import Gist from 'react-gist';
import { CustomPromise } from '../utils';

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
      <h1>Promise Polyfill / Implementation</h1>

      <button type="button" onClick={runPromise}>
        Run Promise polyfill!!
      </button>

      <h4>Promise Results</h4>
      <pre>{JSON.stringify(promiseMessages, null, 2)}</pre>

      <Gist id="a70a77802ef17361a1b0328a0b42cffe" />
      <Gist id="cbcbabd037e9c3e3edc7fae9e8f5c605" />
    </div>
  );
};

export default Promise;
