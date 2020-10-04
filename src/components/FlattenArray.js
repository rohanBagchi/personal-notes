const flatten = (list) => {
  const flattenedArray = [];

  const flattener = (listToFlatten) => {
    listToFlatten.forEach((item) => {
      if (Array.isArray(item)) {
        flattener(item);
      } else {
        flattenedArray.push(item);
      }
    });
  };

  flattener(list);

  return flattenedArray;
};

const FlattenArray = () => {
  const array = [1, 2, [3, 4, [5, 6, 7]]];
  const flattenedArray = flatten(array);

  return (
    <div>
      flatten([1, 2, [3, 4, [5, 6, 7]]]) = {JSON.stringify(flattenedArray)}
    </div>
  );
};

export default FlattenArray;
