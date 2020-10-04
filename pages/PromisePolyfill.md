# Simple Promise Polyfill

import Promise from '../src/components/Promise';

<Promise />

```js
export function CustomPromise(executorFn) {
  const PossibleStates = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED",
  };
  let currentSuccessResult;
  let currentFailureResult;
  const listOfSuccessCallbacks = [];
  const listOfFailureCallbacks = [];

  let currentState = PossibleStates.PENDING;

  this.then = (callbackFunction) => {
    listOfSuccessCallbacks.push(callbackFunction);
    return this;
  };
  this.catch = (callbackFunction) => {
    listOfFailureCallbacks.push(callbackFunction);
    return this;
  };

  const resolve = (resolvedValue) => {
    if (currentState !== PossibleStates.PENDING) return;

    currentSuccessResult = resolvedValue;

    listOfSuccessCallbacks.forEach((callbackFunction) => {
      currentSuccessResult = callbackFunction(currentSuccessResult);
    });

    currentState = PossibleStates.RESOLVED;
  };
  const reject = (rejectedValue) => {
    if (currentState !== PossibleStates.PENDING) return;

    currentFailureResult = rejectedValue;

    listOfSuccessCallbacks.forEach((callbackFunction) => {
      currentFailureResult = callbackFunction(currentFailureResult);
    });

    currentState = PossibleStates.REJECTED;
  };

  executorFn(resolve, reject);
}
```

```js
const Promise = () => {
  const [promiseMessages, setPromiseMessages] = useState([]);
  const runPromise = () =>
    new CustomPromise((resolve) => {
      setTimeout(() => {
        resolve("I am a resolved value!!!");
      }, 10);
    })
      .then((resolvedValue) => {
        setPromiseMessages((prevPromiseMessages) => [
          ...prevPromiseMessages,
          resolvedValue,
        ]);
        return "I am next resolved value";
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
```
