const ProductItem = () => {
  return (
    <div className="bg-white rounded-lg py-4 h-[400px] relative overflow-hidden group">
      <div className="absolute w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-1/4">
        <img
          src="https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg"
          alt="Product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute w-full h-1/4 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-white p-4">
        <h3 className="text-lg font-semibold">Product Title</h3>
        <p className="text-gray-600">
          Product description goes here. Add any details you want to show on
          hover.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
