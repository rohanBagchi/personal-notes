// list of methods [m1,m2,..mn] + seedData
m1(seedData) -> m2(outputOfM1) -> ... mn(outputOfMn-1)

/**
 * @param {any} data
 * @param {method} callback
 */
function mx (data, done) {
    // doing something
    setTimeout(() => {
        done(data, ?error)
    }, time)
}

function simpleCompose(listOfMethods, seedData) {
    const successCB = (result, error) => {
        if (error) {
            // break the loop
            console.log({error})
            return;
        }

        indexOfMethod += 1;
        callCUrrentMethod(result);
    };
    let indexOfMethod = 0;

    const callCUrrentMethod = (argument) => {
        let method = listOfMethods[indexOfMethod];
        method(argument, successCB)
    }

    callCUrrentMethod(seedData)
}

/*
function simpleCompose(listOfMethods, seedData) {
    const successCB = (result, error) => {
        if (error) {
            // break the loop
        }

        prevResult = result;
    };
    let prevResult = seedData;

    for(let i = 0; i < listOfMethods.length; i++) {
        const method = listOfMethods[i];
        method(prevResult, successCB)
    }
}*/