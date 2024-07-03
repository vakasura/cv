const experiences = [
  {
    company: "Martian",
    role: "Founding Software Engineer | 2024",
    description: "Used Docker, Kubernetes, and CircleCI, scaling the system from 100 to 250,000 requests per day."
  },
  {
    company: "Clearco",
    role: "Software Engineer | 2023",
    description: "Designed an enterprise-level component library containing 40+ components using Vue3, PrimeVue, and Tailwind CSS."
  },
  {
    company: "Koho",
    role: "Software Developer | 2023",
    description: "Refactored primary API to issue credit cards linked to appropriate payment processing network (PPN)."
  },
  {
    company: "Security Compass",
    role: "Software Engineering Intern | 2021",
    description: "Refactored asynchronous task queues to move local file storage to an AWS S3 instance."
  }
];

const Experience = () => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-white shadow mb-4">
          <div className="px-4 py-5 sm:p-6">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <p><b>{experience.company}</b></p>
              <p><b>{experience.role}</b></p>
            </div>
            <p className="text-justify">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

