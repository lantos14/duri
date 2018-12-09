const addProductType = (name, data) => {
  const result = data;
  
  result.forEach(product => {
    product.type = name;
  });

  return result;
}

export default addProductType;
