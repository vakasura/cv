const Experience = () => {
  return (
    <div>
      <div className="p-4 bg-gray-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Martian</p>
          <p>Founding Software Engineer | 2024</p>
        </div>
        <br />
        <p className="text-justify">
          Migrated Digital Ocean applications to GCP using Docker, Kubernetes,
          and CircleCI, scaling the system from 100 to 100,000 requests per day,
          demonstrating improved scalability and capacity.
        </p>
      </div>
      <br />
      <div className="p-4 bg-gray-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Clearco</p>
          <p>Software Engineer | 2023</p>
        </div>
        <br />
        <p className="text-justify">
          Designed the first release of an enterprise-level component library
          containing 40+ components using Vue3, PrimeVue, and Tailwind CSS,
          increasing deployment speed and reducing bugs when shipping new
          products.
        </p>
      </div>
      <br />
      <div className="p-4 bg-gray-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Koho</p>
          <p>Software Developer | 2023</p>
        </div>
        <br />
        <p className="text-justify">
          Refactored primary API to issue credit cards linked to appropriate
          payment processing network (PPN) upon user and account creation
          request flow; resulting in reduced swipe fees and data processing
          costs.
        </p>
      </div>
      <br />
      <div className="p-4 bg-gray-800 rounded-lg text-white">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Security Compass</p>
          <p>Software Engineering Intern | 2021</p>
        </div>
        <br />
        <p className="text-justify">
          Refactored asynchronous task queues of custom integration microservice
          to move local file storage to an AWS S3 instance; resulting in higher
          scalability, improved disaster recovery capability, and compliance
          with customer data protection regulations.
        </p>
      </div>
    </div>
  );
};

export default Experience;
