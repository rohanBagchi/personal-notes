import { useState } from 'react';

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

const ClassInheritance = () => {
  const [msg, setMsg] = useState('');

  const runClassInheritence = () => {
    const teacher = new Teacher('Rohan', 30, 12);
    setMsg(teacher.sayName());
  };

  return (
    <div>
      <h1>Class Inheritance</h1>
      <button type="button" onClick={runClassInheritence}>
        runClassInheritence
      </button>
      <button type="button" onClick={() => setMsg('')}>
        Reset
      </button>
      <p>{msg}</p>
      <div>
        <pre>
          {`
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
                console.log(\`Hello, I am \${this.name}; I am \${this.age} years old.\`);
            };

            const teacher = new Teacher('Rohan', 30, 12);
            teacher.sayName()
        `}
        </pre>
      </div>
    </div>
  );
};

export default ClassInheritance;
