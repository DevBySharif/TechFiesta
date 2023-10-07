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
        <p>{description}</p>
        <p>{price}</p>
        <div className="card-actions justify-center">
          <Link to={`/details/${id}`}>
            <button className="btn btn-primary w-full">Details</button>
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
