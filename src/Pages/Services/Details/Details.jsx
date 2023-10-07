const Details = ({ selectedOne }) => {
  console.log(selectedOne);
  const { image } = selectedOne;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default Details;
