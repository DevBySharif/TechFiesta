import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const ServiceDetails = () => {
  const [selectedDetails, setSelectedDetails] = useState({});
  const { id } = useParams();
  const details = useLoaderData();

  useEffect(() => {
    const findDetails = details?.find((detail) => detail.id === parseInt(id));
    setSelectedDetails(findDetails);
  }, [details, id]);

  return (
    <div>
      <Details selectedDetails={selectedDetails}></Details>
    </div>
  );
};

export default ServiceDetails;
