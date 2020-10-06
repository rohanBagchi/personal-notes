# Class Inheritance

import ClassInheritance from '../src/components/ClassInheritance'

<ClassInheritance />

```js
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
  return `Hello, I am ${this.name}; I am ${this.age} years old.`;
};

const teacher = new Teacher("Rohan", 30, 12);
setMsg(teacher.sayName()); // Hello, I am Rohan; I am 30 years old.
```

## Problems with classical inheritance:

1. Gorilla Banana Problem

   - you wanted a banana but got the whole forest with a Gorilla holding a banana.

2. Fragile base class problem
