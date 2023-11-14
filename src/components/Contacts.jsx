import {
  FaInstagram,
  FaMobileRetro,
  FaTiktok,
  FaWhatsapp,
  FaX,
} from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { Element } from "react-scroll";

function Contacts() {
  return (
    <Element
      name="contacts"
      className="flex flex-col items-center px-3 bg-gray-800"
    >
      <div className="flex items-center gap-5 p-2 rounded-md my-3 justify-center w-full">
        <h1 className="text-white text-3xl font-bold">CONTACTS</h1>
      </div>

      <section className=" md:flex">
        {/* email form */}
        <div className="container mb-5">
          <form
            target="_blank"
            action="https://formsubmit.co/0b891472a1e1accef4306cd0d5ea54bf"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control outline-none"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-dark btn-block text-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-lg text-white flex flex-col gap-3 p-3 rounded-md w-full h-full md:ml-5s">
          <p className="flex items-center gap-3">
            <FaMobileRetro /> +25472828016
          </p>
          <p className="flex items-center gap-3">
            <FaWhatsapp /> +254728280116
          </p>
          <p className="flex items-center gap-3">
            <GoMail /> fartun@gmail.com
          </p>
          <a className="flex items-center gap-3 cursor-pointer">
            <FaInstagram /> Fartun Dirye
          </a>
          <a className="flex items-center gap-3 cursor-pointer">
            <FaTiktok />
            Fartun
          </a>
        </div>
      </section>
    </Element>
  );
}

export default Contacts;
