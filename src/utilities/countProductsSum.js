const countProductsSum = (data) => {
  let sum = 0;
  data.forEach(list => {
    sum += list.length;
  });
  return sum;
}

export default countProductsSum;