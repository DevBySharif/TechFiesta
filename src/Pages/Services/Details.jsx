import PropTypes from "prop-types";
const Details = ({ service }) => {
  const { title, description, image, price } = service;
  console.log(title);
  return (
    <div className="card card-compact  bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary btn-wide">Details</button>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  Service: PropTypes.object.isRequired,
};
export default Details;
