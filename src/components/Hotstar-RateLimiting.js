// rate limiting? or throttling
function foo (...) {
    // doing something
}

/**
 * @param {method} target method
 * @param {number} rate
 * @param {number} time in seconds
 */
const limitedFoo = util(foo, 3, 60)

0s: limitedFoo() // foo() 0s
5s: limitedFoo() // foo() 5s
35s: limitedFoo() // foo() 35s
36s: limitedFoo() // ignore this call
75s: limitedFoo() // foo()

const util = (fn, rate, seconds) => {
    const ms = seconds * 1000;
    let timeOutID;
    let counter = 0;

    const throttledFn = (...args) => {
        if (!timeOutID) {
            timeOutID = setTimeout(() => {
                counter = 0;
                timeOutID = null;
            }, ms)
        }

        // current window is in progress
        if (counter === rate) return;

        const callTargetMethod = () => {
            counter += 1;
            return fn.apply(null, args);
        };

        console.log(callTargetMethod)

        return callTargetMethod(); // ?
    };

    return throttledFn;
}