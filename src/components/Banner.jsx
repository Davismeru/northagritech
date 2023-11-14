import React from "react";

function Banner() {
  return (
    <div className="relative h-[60vh]">
      {/* bg image */}
      <section className="">
        <img
          src="images/banner.jpg"
          className="h-full w-full object-cover absolute"
        />
        {/* dark overlay */}
        <section className="absolute w-full h-full opacity-20 bg-black z-10"></section>
      </section>

      {/* banner text */}
      <section className="absolute text-white top-1/2 p-5 -translate-y-1/2 text-xl z-20 xl:pl-20">
        <h1 className="text-3xl font-bold mb-5 md:text-6xl lg:text-6xl">
          NorthAgriTech Organisation
        </h1>
        <p className="text-2xl md:text-2xl md:max-w-3xl">
          Dedicated to advancing sustainable agriculture through the integration
          of cutting-edge tecnology and Artificial Intelligence and innovative
          animal, poultry and crops farming practices.
        </p>
      </section>
    </div>
  );
}

export default Banner;
