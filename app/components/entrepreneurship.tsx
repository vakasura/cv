const Entrepreneurship = () => {
  return (
    <div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <p><b>Flock</b></p>
            <p><b>Founder | 2024</b></p>
          </div>
          <p className="text-justify">
            Currently working with my friends from the University of Toronto to
            build a startup that builds open source tooling for AI developers.
          </p>
        </div>
      </div>
      <br />
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <p><b>Planni</b></p>
            <p><b>Founder | 2023</b></p>
          </div>
          <p className="text-justify">
            A property technology company that developed software to simplify
            financial forecasting for property developers. We secured two
            letters of intent, translating to $25 000 CAD in annual recurring
            revenue and funding at a $1M CAD valuation from NEXT Canada.
          </p>
        </div>
      </div>
      <br />
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <p><b>Depactor</b></p>
            <p><b>Founder | 2019</b></p>
          </div>
          <p className="text-justify">
            A cybersecurity startup, that used machine learning and linguistic
            analysis to prevent business email fraud through the University of
            Toronto Hatchery, providing with $14,000 CAD in fellowship funding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Entrepreneurship;
