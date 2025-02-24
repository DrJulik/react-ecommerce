import React from "react";

const Banner = () => {
  return (
    <div className="flex h-[500px]">
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="banner"
        className="w-3/4 h-full object-cover"
      />
      <div className="w-1/4 flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl font-bold p-4">Advertisement</h1>
        <p className="text-sm p-4">This is a banner</p>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-sm">
          Banner
        </button>
      </div>
    </div>
  );
};

export default Banner;
