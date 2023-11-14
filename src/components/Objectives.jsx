import { Element } from "react-scroll";

function Objectives() {
  return (
    <Element name="objectives" className="gradient text-white p-5">
      {/* objectives */}
      <div className="objectives-container">
        <h1 className="text-center mb-10 font-bold text-3xl">
          <span className="text-gray-50">Objectives</span>
        </h1>

        {/* main objectives */}
        <section className="">
          <ul>
            <li> Provide fresh products in E-commerce </li>
            <li>
              Provide Innovative solutions to solve agricultural problems{" "}
            </li>
            <li> Empower the community through mentorship enterpreneurship </li>
            <li>
              Enhance resource mobilization policy of various govermental and
              non-gevermentaloriganisations{" "}
            </li>
            <li>
              Create oppotunities youths on different fields through innovation
              and creativity{" "}
            </li>
            <li> Reduce poverty </li>
          </ul>
        </section>

        {/* Single objective */}
        <section className="">
          <ul>
            {/* <p> */}
            <li>
              Sustainably cultivate drought-resitant crops that are resilient to
              arid conditions, ensuring a food supply for the local community
            </li>

            <li>
              Leverage technology and modern agricultural practices to enhance
              crop production, reduce waste and improve the quality of locally
              grown produce.
            </li>

            <li>
              Establish and maintain patnership with local markets, retailers
              and consumers for distribution of of fresh, locally grown crops.
            </li>

            <li>
              Contribute to the reduction of dependency on imported agricultural
              products and enhance food security in the region.
            </li>

            <li>
              Create economic opportunities for small-scale farmers, generate
              employment and simulate local economic growth.
            </li>
          </ul>
        </section>
      </div>
    </Element>
  );
}

export default Objectives;
