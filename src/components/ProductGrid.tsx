const ProductGrid = () => {
  return (
    <div className="w-3/4 mx-auto py-4">
      <div>
        <h1 className="text-2xl font-bold">Products</h1>
        <p>Description</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg py-4">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"
            alt="Product"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg py-4">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"
            alt="Product"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg py-4">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"
            alt="Product"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg py-4">
          <img
            src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"
            alt="Product"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
