import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const [selectedDetails, setSelectedDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const findDetails = details?.find((detail) => detail.id === id);
    setSelectedDetails(findDetails);
  }, [details, id]);

  if (!selectedDetails) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  console.log(selectedDetails);
  return (
    <div>
      {selectedDetails?.map((selectedOne) => (
        <Details key={selectedOne.id} selectedOne={selectedOne}></Details>
      ))}
    </div>
  );
};

export default ServiceDetails;
