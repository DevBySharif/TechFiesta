import visionBg from "../../assets/visionb1.jpg";

const Vision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 lg:gap-28 lg:px-6 items-center my-12 justify-between max-w-[100vw]">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="col-span-2  rounded-lg h-full p-4 mb-4"
        style={{
          backgroundImage: `url(${visionBg})`,
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      >
        <div className="text-center lg:mt-96">
          <h1 className="text-6xl font-Bebas text-white">Our Vision</h1>
        </div>
        <p className="text-lg font-Raleway text-white px-5 pt-4">
          At TechFiesta, we believe that the world of technology and gaming
          should be accessible to everyone. We aim to create the biggest and
          best tech and gaming events that bring people together from all walks
          of life. Our events are designed to inspire, educate and entertain
          both professionals and amateurs alike.
        </p>
      </div>
      <div className="grid lg:grid-rows-4 lg:grid-flow-col md:grid-cols-2 md:gap-3 gap-3 justify-center col-span-3 ">
        <div
          className="card  bg-neutral text-neutral-content lg:row-start-1"
          data-aos="flip-left"
        >
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">Event Planning</h2>
            <p className="font-Raleway">
              We take care of everything for our events, from planning and
              logistics to marketing and promotion. Our team of experts ensures
              that every event is a success and exceeds the expectations of our
              clients.
            </p>
            <hr className="h-1 bg-white w-60" />
          </div>
        </div>
        <div
          className="card  bg-neutral text-neutral-content lg:row-end-4"
          data-aos="flip-right"
        >
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Competitions and Tournaments
            </h2>
            <p className="font-Raleway">
              We organize a range of competitions and tournaments for gamers of
              all levels. From amateur to professional, our events provide a
              competitive and fun environment for all participants.
            </p>
            <hr className="h-1 bg-white w-60" />
          </div>
        </div>

        <div
          className="card  bg-neutral text-neutral-content lg:row-start-2"
          data-aos="flip-up"
        >
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Exhibition and Showcases
            </h2>
            <p className="font-Raleway">
              Our exhibitions and showcases provide a platform for companies to
              demonstrate their latest products and services to a captive
              audience. We work closely with exhibitors to create a tailored
              experience that showcases their brand and products in the best
              possible way.
            </p>
            <hr className="h-1 bg-white w-60" />
          </div>
        </div>
        <div
          className="card bg-neutral text-neutral-content lg:row-end-5"
          data-aos="flip-down"
        >
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Networking Opportunities
            </h2>
            <p className="font-Raleway">
              Our events provide the perfect opportunity for professionals and
              enthusiasts to network and connect with like-minded individuals.
              We create a relaxed and informal environment that encourages
              collaboration and innovation.
            </p>
            <hr className="h-1 bg-white w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
