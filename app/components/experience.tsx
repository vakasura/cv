const Experience = () => {
  return (
    <div>
      <div className="p-4 bg-zinc-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Martian</p>
          <p>Founding Software Engineer | 2024</p>
        </div>
        <br />
        <p className="text-justify">
          Used Docker, Kubernetes, and CircleCI, scaling the system from 100 to
          250,000 requests per day.
        </p>
      </div>
      <br />
      <div className="p-4 bg-zinc-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Clearco</p>
          <p>Software Engineer | 2023</p>
        </div>
        <br />
        <p className="text-justify">
          Designed an enterprise-level component library
          containing 40+ components using Vue3, PrimeVue, and Tailwind CSS.
        </p>
      </div>
      <br />
      <div className="p-4 bg-zinc-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Koho</p>
          <p>Software Developer | 2023</p>
        </div>
        <br />
        <p className="text-justify">
          Refactored primary API to issue credit cards linked to appropriate
          payment processing network (PPN).
        </p>
      </div>
      <br />
      <div className="p-4 bg-zinc-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Security Compass</p>
          <p>Software Engineering Intern | 2021</p>
        </div>
        <br />
        <p className="text-justify">
          Refactored asynchronous task queues of custom integration microservice
          to move local file storage to an AWS S3 instance.
        </p>
      </div>
    </div>
  );
};

export default Experience;
