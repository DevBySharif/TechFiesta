const Details = ({ selectedDetails }) => {
  const { image, description, title, price } = selectedDetails;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-12">
        <figure>
          <img className="rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-5xl font-Bebas">{title}</h2>
          <p className="font-Raleway">{description}</p>
          <p className="font-Raleway font-bold">Price: {price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-neutral btn-wide">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
