import { useEffect, useState } from "react";
import Details from "./Details";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  console.log(servicesData);
  return (
    <div className="mt-12">
      <h1 className="text-5xl font-bold text-center">Our Services</h1>
      <p className="text-center">we have many services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <Details key={service.id} service={service}></Details>
        ))}
      </div>
    </div>
  );
};

export default Services;
