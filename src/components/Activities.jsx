import { Element } from "react-scroll";

function Activities() {
  return (
    <Element name="activities" className="container md:w-[70%] md:mx-auto">
      <h1 className="main_heading">Activities</h1>
      <section>
        {/* section img */}
        <section className="my-5 rounded-lg overflow-hidden md:h-[50vh]">
          <img src="/images/carrots.jpg" alt="carrots" />
        </section>

        <p> * Mentorship on agribusiness & ebtrepreneurship</p>
        <p> * Help showcase different innovation solutions</p>
        <p> * Solve agricultural problems using technology</p>
        <p> * Create a awareness and sensitazation on agriculture.</p>
        <p>
          {" "}
          * Planting drought resistant crops to ensure food supply for the local
          community
        </p>
      </section>
    </Element>
  );
}

export default Activities;
