import React from "react";

const CharterFeature = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Text Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h4 className="text-lg font-semibold text-[#d2c5a1]">
                        What will you get
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                        Private Jet Charters save your time <br />
                        and give more comfort
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur
                        vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant
                        morbi tristique. Ut non augue egestas, commodo velit eget, vestibulum tellus.
                        Curabitur vulputate justo elit, at elementum orci pulvinar vel.
                    </p>

                    <hr className="border-t border-gray-200" />

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <p className="text-lg font-semibold text-gray-900">
                                Call for book an order:
                            </p>
                            <p className="text-2xl font-bold text-[#b42b33]">8-800-10-500</p>
                        </div>
                        <button className="bg-[#d2c5a1] text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#c8b98d] transition">
                            BOOK NOW →
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative w-full lg:w-1/2">
                    <img
                        src="/About/1.png"
                        alt="Jet Seat"
                        className="rounded-2xl object-cover w-full h-[450px]"
                    />
                    <div className="absolute top-4 right-4 bg-[#b42b33] text-white px-6 py-3 rounded-lg shadow-lg text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide">
                            27 Years
                        </p>
                        <p className="text-xs text-[#e4cfa4] font-medium">of experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharterFeature;
