import { useState } from 'react';
import Gist from 'react-gist';

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

      <Gist id="311fd2fed78e808f83a0fbd235bf8d88" />
    </div>
  );
};

export default PrototypeInheritance;
