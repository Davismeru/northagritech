import { useState } from "react";
import { FaBars, FaPlantWilt } from "react-icons/fa6";
import { Link } from "react-scroll";
function Navbar() {
  const [seeNav, SetSeeNav] = useState(false);
  // hamburger menu functionality
  const handleClick = () => {
    seeNav ? SetSeeNav(false) : SetSeeNav(true);
  };
  return (
    <div className="p-4 bg-white md:flex justify-around items-center">
      {/* logo */}
      <section className="flex items-center gap-2 text-heading_1">
        <p className="text-4xl md:text-6xl">
          <img src="images/icon.png" className="w-16"></img>
        </p>
        <p className="text-2xl font-bold p-2 lg:text-3xl">
          NorthAgriTech
          <br /> Organisation
        </p>
      </section>

      {/* nav links */}
      <ul className="hidden font-semibold md:flex gap-3 lg:gap-6 text-gray-600">
        <li className="cursor-pointer">
          <Link to="mission" smooth={true} duration={500}>
            Our Mission
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="objectives" smooth={true} duration={500}>
            Objectives
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="vision" smooth={true} duration={500}>
            Our Vision
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contacts" smooth={true} duration={500}>
            Contacts
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link to="activities" smooth={true} duration={500}>
            Activities
          </Link>
        </li>
      </ul>

      {/* responsive nav links */}
      <section className="md:hidden">
        <p
          className="shadow-sm shadow-gray-400 rounded-sm p-2 w-fit text-gray-600 text-3xl md:hidden"
          onClick={handleClick}
        >
          <FaBars />
        </p>
        {/* nav links */}
        <ul
          className={
            seeNav
              ? `flex flex-col gap-5 my-6 text-gray-500 opacity-100`
              : "h-0 overflow-hidden opacity-0"
          }
        >
          <li>
            <Link to="mission" smooth={true} duration={500}>
              Our Mission
            </Link>
          </li>
          <li>
            <Link to="objectives" smooth={true} duration={500}>
              Objectives
            </Link>
          </li>
          <li>
            <Link to="vision" smooth={true} duration={500}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
