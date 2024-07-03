const volunteering = [
  {
    organization: "IEEE UofT Branch Chair",
    description:
      "Organized MakeUofT (Canada's biggest Hardware Hackathon) and NewHacks (Toronto's biggest beginner friendly hackathon).",
  },
  {
    organization: "Toronto and Region Conservation Authority",
    description:
      "Planted over 100+ trees, went electrofishing to monitor fish populations, and restored a beaver habitat using recycled christmas trees.",
  },
  {
    organization: "Brampton Civic Hospital",
    description:
      "Spent 100+ hours running one of 3 main hospital lobbies, giving patients directions and answering phone calls.",
  },
  {
    organization: "Peel Manor Long Term Home Care",
    description:
      "Played the piano, organized bingo games, and facilitated social events for residents.",
  },
];

const Volunteering = () => {
  return (
    <div>
      {volunteering.map((volunteering, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-white shadow mb-4"
        >
          <div className="px-4 py-5 sm:p-6">
            <div style={{ marginBottom: "10px" }}>
              <p>
                <b>{volunteering.organization}</b>
              </p>
            </div>
            <p className="text-justify">{volunteering.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volunteering;
