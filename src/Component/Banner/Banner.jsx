import banner from "../../assets/IR35.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div
        className="hero-content text-center text-neutral-content"
        data-aos="zoom-in"
      >
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold font-Bebas">
            <span className="text-pink-500">TechFiesta</span> : Where Tech and
            Gaming Collide!
          </h1>
          <p className="mb-5 text-white text-lg">
            Your Gateway to Thrilling Tournaments and Cutting-Edge Tech.
          </p>
          <button className="btn btn-secondary">Explore Events</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
