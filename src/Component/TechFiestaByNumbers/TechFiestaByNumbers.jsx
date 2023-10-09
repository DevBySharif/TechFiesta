const TechFiestaByNumbers = () => {
  return (
    <div className="my-12">
      <h1 className="text-5xl font-bold font-Bebas mb-4 text-center">
        TechFiesta By Numbers
      </h1>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title text-gray-600">Service Offered</div>
            <div className="stat-value">6</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-600">Events Organized</div>
            <div className="stat-value">50 +</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-600">Attendees</div>
            <div className="stat-value">100K +</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title text-gray-600">Expert Speakers</div>
            <div className="stat-value">10+</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title text-gray-600">Countries Hosted</div>
            <div className="stat-value">15+</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechFiestaByNumbers;
