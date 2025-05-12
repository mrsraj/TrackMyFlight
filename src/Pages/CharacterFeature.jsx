import React from "react";

const CharterFeature = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 px-2 md:px-6">
          <h4 className="text-[30px] font-semibold text-[#ac8030] ">
            Why Choose Us →
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Trusted Aerospace Partner <br />
            for Quality & Timely Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            RSR Aviation Services Pvt. Ltd. is a government-registered,
            ISO-certified supplier of aerospace consumables, serving aviation,
            MRO, and defense sectors. With a strong global supply chain and
            commitment to compliance, we ensure timely delivery of certified
            parts and exceptional service quality.
          </p>

          <hr className="border-t border-gray-200" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Reach out for enquiries:
              </p>
              <p className="text-2xl font-bold text-[#b42b33]">
                +91 95824 06531
              </p>
            </div>
            <button className="bg-[#d2c5a1] text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#c8b98d] transition">
              CONTACT US →
            </button>
          </div>
        </div>
        {/* rsrabout.mp4 */}
        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2">
          <video
            src="/video/rsrabout.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-md  w-full h-full"
          />
          <div className="absolute -top-6 right-4 bg-[#b42b33] text-white px-6 py-3 rounded-lg shadow-lg text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">
              15+ Years
            </p>
            <p className="text-xs text-[#e4cfa4] font-medium">
              industry expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterFeature;
