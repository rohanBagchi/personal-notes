const sum = (number) => {
  const numbers = [];

  const adder = (num) => {
    if (num) {
      numbers.push(num);
      return adder;
    }
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
  };

  return adder(number);
};

const Adder = () => {
  const result = sum(1)(2)(3)(4)(5)();

  return <div>sum(1)(2)(3)(4)(5)() = {result}</div>;
};

export default Adder;
