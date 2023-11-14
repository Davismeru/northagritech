import Banner from "../components/Banner";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Objectives from "../components/Objectives";
import Vision from "../components/Vision";
import Contacts from "../components/Contacts";
import Activities from "../components/Activities";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Banner />
      <Mission />
      <Objectives />
      <Vision />
      <Activities />
      <Contacts />
    </div>
  );
}

export default Home;
