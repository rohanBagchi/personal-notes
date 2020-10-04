# Simple Reduce Polyfill

import ReducePolyfill from '../src/components/ReducePolyfill'

<ReducePolyfill />

```js
const reduce = (array, callBack, initial) => {
  let reducedValue = initial;

  array.forEach((item) => {
    reducedValue = callBack(reducedValue, item);
  });

  return reducedValue;
};

const ReducePolyfill = () => {
  const arr = [1, 2, 3, 4, 5];
  const added = reduce(arr, (accumulator, current) => accumulator + current, 0);

  return (
    <div>
      reduce([1, 2, 3, 4, 5], (accumulator, current) ={">"} accumulator +
      current, 0); = {added}
    </div>
  );
};

export default ReducePolyfill;
```
