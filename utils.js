export const map = (array, cb) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const element = cb(currentElement, i);
    newArray.push(element);
  }

  return newArray;
};

export const bind = (fn, context, ...args) => (newArgs) => {
  fn.apply(context, args.concat(newArgs));
};

/**
 *
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am a resolved value!!!')
  }, 10)
})

*/

export function CustomPromise(executorFn) {
  const PossibleStates = {
    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    REJECTED: 'REJECTED',
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

export function ClassicalInheritance() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  function Teacher(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }

  Teacher.prototype = Object.create(Person.prototype);

  Person.prototype.sayName = function () {
    console.log(`Hello, I am ${this.name}; I am ${this.age} years old.`);
  };

  const teacher = new Teacher('Rohan', 30, 12);

  teacher.sayName();
}

export function PrototypalInheritance() {
  const Person = {
    name: 'Rohan',
    age: 30,
  };

  const Engineer = {
    skills: ['JavaScript', 'React'],
  };

  Object.setPrototypeOf(Engineer, Person);

  console.log(Engineer.name);
  console.log(Engineer.age);
  console.log(Engineer.skills);
}

export const throttle = (fn, timeOut, context = null) => {
  let timeOutID;

  return function throttledFunction(...args) {
    if (timeOutID) return;

    timeOutID = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timeOutID);
    }, timeOut);
  };
};

export const debounce = (fn, timeOut, context = null) => {
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

/**
 *
 * <div id="root">
    <div>
      <span></span> <!-- Match -->
    </div>
    <div>
      <span> <!-- Match -->
        <span></span> <!-- Match -->
      </span>
      <div>
        <div></div>
      </div>
    </div>
  </div>

  interface Element {
      tagName: String ('HTML' | 'BODY' | 'DIV' | 'P' | ...)
      children: ?Array<Element>
      parentElement: ?Element
    }
 *
 * @param {*} root
 * @param {*} tagNameToFind
 */
export const simpleQuerySelectorAll = (root, tagNameToFind) => {
  const results = [];

  const find = (el) => {
    if (el.tagName.toLowerCase() === tagNameToFind) {
      if (el !== root) {
        results.push(el);
      }
    }

    if (el.children) {
      for (let i = 0; i < el.children.length; i++) {
        const childEL = el.children[i];
        find(childEL);
      }
    }
  };

  find(root);

  return results;
};

const hotstarDump = () => {
  const bar = 5;

  function foo() {
    console.log(bar);
  }

  domNode.addEventListener('click', foo);

  // -------- //

  class A extends Component {
    constructor(props) {
      super(props);
      this.state = {
        a: 'a',
      };
    }

    onClick() {
      console.log(this.state.a);
    }

    render() {
      return <B onClick={this.onClick} />;
    }
  }

  function Student() {
    this.name = 'Anurag';
  }

  Student.prototype.getName = function () {
    console.log(this.name);
  };

  s = new Student();
  s.getName();

  const getStudentName = s.getName;
  getStudentName();

  /*
  function print(foo) {
    let bar = 8;
    foo()
  }

  print(foo)

  */
};

const hotstarTimerProblem = () => {
  setTimeout(function f1() {
    console.log('ABCD');
  }, 40);

  setTimeout(function f2() {
    console.log('ABCD');
  }, 20)[(f1, f2)];

  // Promise.resolve().then(() => console.log('DEGH'))

  tick(cb); // 1sec

  const timer = (userDefinedCallback, userDefinedTimeout) => {
    let current = 0;

    const handleTick = () => {
      current += 1;

      if (current === userDefinedTimeout) {
        userDefinedCallback();
      }
    };

    tick(handleTick);
  };
};
