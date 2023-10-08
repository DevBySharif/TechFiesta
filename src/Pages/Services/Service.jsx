import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { title, description, image, price, id } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl ">
      <figure>
        <img className="h-[300px] w-full rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-Raleway">{description}</p>
        <p className="font-Raleway font-semibold">Price: {price}</p>
        <div className="card-actions justify-center">
          <Link to={`/details/${id}`}>
            <button className="btn btn-neutral btn-wide mt-3">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  Service: PropTypes.object,
};
export default Service;
