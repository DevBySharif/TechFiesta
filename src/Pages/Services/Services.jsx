import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  console.log(servicesData);
  return (
    <div className="mt-12 px-4">
      <h1 className="text-6xl font-bold text-center font-Bebas">
        Our Services
      </h1>
      <p className="text-center font-Raleway font-medium mt-3 mb-6 lg:w-[800px] mx-auto">
        Discover a world of tech innovation and gaming excitement with our
        diverse range of services. From competitive gaming tournaments to
        hands-on tech workshops and industry-leading conferences, we offer an
        array of experiences tailored to tech enthusiasts and gamers alike.
        Explore our services and dive into the future of technology and gaming
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
