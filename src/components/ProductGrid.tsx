import ProductItem from "./ProductItem";

const ProductGrid = () => {
  return (
    <div className="w-3/4 mx-auto py-4">
      <div>
        <h1 className="text-2xl font-bold">Products</h1>
        <p>Description</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductGrid;
