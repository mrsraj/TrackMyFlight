import { ArrowRight } from "lucide-react";

const CharterOptions = () => {
  const options = [
    {
      title: "Business Charter",
      desc: "Cras eu lorem finibus, porta magna tortor",
      image: "/OurTeam/1.png",
    },
    {
      title: "Private Charter",
      desc: "Sestibulum tortor. Nullam bibendum ligula",
      image: "/OurTeam/2.png",
    },
    {
      title: "Jet Rental",
      desc: "Finibus, porta magna eu, vestibulum",
      image: "/OurTeam/3.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {options.map((opt, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 border-r border-gray-600 last:border-none px-4"
          >
            <img
              src={opt.image}
              alt={opt.title}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-yellow-300 uppercase">
                {opt.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{opt.desc}</p>
              <div className="mt-2 text-yellow-300 flex items-center gap-1">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharterOptions;
