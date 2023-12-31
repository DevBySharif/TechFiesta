import Banner from "../../Component/Banner/Banner";
import TechFiestaByNumbers from "../../Component/TechFiestaByNumbers/TechFiestaByNumbers";
import Services from "../Services/Services";
import Vision from "../Vision/Vision";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Vision></Vision>
      <Services></Services>
      <TechFiestaByNumbers></TechFiestaByNumbers>
    </div>
  );
};

export default Home;
