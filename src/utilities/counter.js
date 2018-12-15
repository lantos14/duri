const countProductNum = (data) => {
  let length = 0;
  data.forEach(list => {
    length+=list.length;
  });

  return length;
}

export default countProductNum;
