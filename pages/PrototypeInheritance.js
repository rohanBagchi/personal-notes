import { useState } from 'react';

const Person = {
  name: 'Rohan',
  age: 30,
};

const Engineer = {
  skills: ['JavaScript', 'React'],
};

Object.setPrototypeOf(Engineer, Person);

const PrototypeInheritance = () => {
  const [msg, setMsg] = useState('');

  const runPrototypeInheritence = () => {
    setMsg(`
      ${Engineer.name}
      ${Engineer.age}
      ${Engineer.skills}
    `);
  };

  return (
    <div>
      <h1>Prototype Inheritance</h1>
      <button type="button" onClick={runPrototypeInheritence}>
        runPrototypeInheritence
      </button>
      <button type="button" onClick={() => setMsg('')}>
        Reset
      </button>
      <p>{msg}</p>
      <div>
        <pre>
          {`
            const Person = {
              name: 'Rohan',
              age: 30,
            };

            const Engineer = {
              skills: ['JavaScript', 'React'],
            };

            Object.setPrototypeOf(Engineer, Person);

            Engineer.name
            Engineer.age
            Engineer.skills
          `}
        </pre>
      </div>
    </div>
  );
};

export default PrototypeInheritance;
