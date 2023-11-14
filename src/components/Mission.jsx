import { Element } from "react-scroll";

function Mission() {
  return (
    <Element name="mission" className="container md:w-[70%] md:mx-auto">
      <h1 className="main_heading">Our Mission</h1>
      <section>
        <p className="leading-9">
          <span className="text-heading_1 font-semibold">
            NorthAgriTech Organisation
          </span>{" "}
          is a pioneering agricultural venture in North Eastern Kenya, dedicated
          to the cultivation of drought-resistant crops and the supply of fresh
          produce to local communities by using technology and Artificial
          Intelligence as the root of our activities . Our mission is to ensure
          food security, promote eco-friendly agricultural methods and enhance
          economic opportunities on North Eastern Kenya.
        </p>
        {/* section img */}
        <section className="mt-5 rounded-lg overflow-hidden md:h-[70vh]">
          <img src="/images/techfarm.jpg" alt="carrots" />
        </section>
      </section>
    </Element>
  );
}

export default Mission;
