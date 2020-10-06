# Simple Memoize

```js
function getSomeData(foo, bar, callback) {
    // console.log({foo, bar, callback})
  setTimeout(function respond() {
    callback(null, {
      firstParameter: foo,
      secondParameter: bar,
    });
  }, 2000);
}

function slowFunction(param1, callback) {
  setTimeout(function respond() {
    callback(null, {
      firstParameter: param1,
    });
  }, 1000);
}

// simpleMemoize(slowFunction)
// const memoizedGetSomeData = simpleMemoize(getSomeData)

//1. memoizedGetSomeData(1, 2, myCallBack)
// executor([1, 2], myCallBack)

//2. memoizedGetSomeData(1, 2, myCallBack)


const simpleMemoize = (fn) => {
    let result = null;
    const cache = {
        [originalArguments.join('-')]: {},
        [originalArguments.join('-')]: {},
        [originalArguments.join('-')]: {},
        [originalArguments.join('-')]: {},
        [originalArguments.join('-')]: {},
    };

    cache = {
        '1-2': {
            '1': 1,
            'result': 0
        },
        '2-3': {},
        ...
    }

    const executor = (...args) => {
        const originalArguments = args.slice(0, args.length - 1)
        const callBack = args[args.length - 1];

        // check in cache
        const argsNotInCache = originalArguments.filter((arg) => {
            return cache[arg] === undefined || cache[arg] !== arg;
        });

        console.log({ argsNotInCache})

        const wrappedCallback = (err, data) => {
            result = data;
            callBack(err, data); //mycallback(err, data)
        }

        if (argsNotInCache.length === 0 && result !== null) {
            console.log("Return from cache!", args)
            return wrappedCallback(null, result);
        }

        // populate cache
        originalArguments.forEach((arg) => {
            cache[arg] = arg;
        });

        fn.apply(null, [...originalArguments, wrappedCallback])
    };

    return executor;
};

const fastFunction = simpleMemoize(getSomeData);

fastFunction('foo', 'bar', function onFirstInvocation(error, data) {
  console.log("onFirstInvocation", data);
    fastFunction('foo', 'bar', function onSecondInvocation(error, data) {
    console.log("onSecondInvocation", data);
    });
});


// const cache = {
//     foo: null,
//     bar: null,
//     result: null
// }
// function getSomeData2(foo, bar, callback) {
//     if (foo === cache.foo && bar === cache.bar && cache.result !== null) return callback(null, cache.result);

//     cache.foo = foo; // 1
//     cache.bar = bar; // 2

//     const wrappedCallback = (err, data) => {
//         cache.result = data;
//         callback(err, data); //mycallback(err, data)
//     }

//     getSomeData(foo, bar, wrappedCallback)
// }

// // 1st
// getSomeData2(1, 2, mycallback)

// // 2nd
// getSomeData2(1, 2, mycallback)
```
