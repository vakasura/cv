const ventures = [
  {
    name: "Flock",
    role: "Founder | 2024",
    description: "Currently working with my friends from the University of Toronto to build a startup that builds open source tooling for AI developers."
  },
  {
    name: "Planni",
    role: "Founder | 2023",
    description: "A property technology company that developed software to simplify financial forecasting for property developers. We secured two letters of intent, translating to $25 000 CAD in annual recurring revenue and funding at a $1M CAD valuation from NEXT Canada."
  },
  {
    name: "Depactor",
    role: "Founder | 2019",
    description: "A cybersecurity startup, that used machine learning and linguistic analysis to prevent business email fraud through the University of Toronto Hatchery, providing with $14,000 CAD in fellowship funding."
  }
];

const Entrepreneurship = () => {
  return (
    <div>
      {ventures.map((venture, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-white shadow mb-4">
          <div className="px-4 py-5 sm:p-6">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p><b>{venture.name}</b></p>
              <p><b>{venture.role}</b></p>
            </div>
            <p className="text-justify">
              {venture.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entrepreneurship;

