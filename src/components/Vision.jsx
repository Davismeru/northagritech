import { Element } from "react-scroll";

function Vision() {
  return (
    <Element
      name="vision"
      className="relative overflow-hidden bg-blue-300 px-5"
    >
      {/* bg image */}
      <img
        src="images/tractor.jpg"
        className="absolute w-full h-full left-0 object-cover"
      />

      <section className="z-30 relative">
        <h1 className="main_heading">Our Vision</h1>
        <p className="leading-10 text-white text-3xl md:max-w-lg md:text-2xl">
          <span className="text-8xl font-serif">"</span>NorthAgriTech
          Organisation, as a new business, envisions becoming a leading source
          of sustainable, locally grown produce in North Eastern Kenya, we aim
          to empower local communities by providing them with affordable ,fresh
          and locally grown produce. Our long-term goal is to reduce dependency
          on imports, enhance food security, and promote eco-friendly
          agricultural practices for long-lasting impact in the region.
          <br />
          <span className="text-8xl font-serif">"</span>
        </p>
      </section>
    </Element>
  );
}

export default Vision;
