import React from "react";
import { ArrowRight } from "lucide-react";

const benefits = [
    {
        title: "Luxury and Comfort",
        description:
            "Pellentesque habitant morbi tristique. Ut non augue egestas, commodo velit eget.",
        image: "/assets/icons/luxury.png",
    },
    {
        title: "Safety and Confidentiality",
        description:
            "Sed urna lectus, venenatis non feugiat ac, scelerisque id leo.",
        image: "/assets/icons/safety.png",
    },
    {
        title: "Personal Schedule",
        description:
            "Curabitur condimentum mauris non neque porttitor vestibulum.",
        image: "/assets/icons/schedule.png",
    },
    {
        title: "Many Airports",
        description:
            "Etiam maximus mauris vel nisi tristique, id hendrerit quam malesuada.",
        image: "/assets/icons/airport.png",
    },
];

function CharterBenefits() {
    return (
        <section className="py-16 px-4 bg-[#fdf6ee]">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Jet Comfort
                    </h2>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                        Discover Charter Benefits
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique. Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* Left: Image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/image/charter.jpg"
                            alt="Charter Benefits"
                            className="w-full h-auto rounded-xl shadow-lg object-cover"
                        />
                    </div>

                    {/* Right: Cards */}
                    <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-14 h-14 mb-4"
                                />
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom: Read More Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                        Read More
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CharterBenefits;
