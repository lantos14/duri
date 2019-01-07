import Product from '../models/product.model';

const deleteDeprecatedData = () => {
  Product.deleteMany({ }, (err) => {
    err ? err : "success";
  });
};

export default deleteDeprecatedData;