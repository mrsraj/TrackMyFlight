import JetStatsSection from "./JetStatsSection";
import AboutAlternatingCards from "./AboutAlternatingCards";

function About() {
    return (
        <section className="bg-[#fffcf6] py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="text-center">
                    {/* <section
                        className="bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/About/1.png')" }}
                    >
                        <div className="bg-black/40 py-10 px-4">
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                                    About Us
                                </h2>
                            </div>
                        </div>
                    </section> */}
                    <div className="text-center"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">About Us</h2></div>

                    <AboutAlternatingCards />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Our Certifications</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {/* Certificate Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 w-80 hover:shadow-2xl hover:scale-105 transform transition duration-300">

                            <div className="h-300 overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img src="/image/1.png" alt="ISO 9001 Certificate" className="h-full object-contain" />
                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-4 w-80 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                            <div className="h-300 overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img src="/image/2.png" alt="AS9100 Certificate" className="h-full object-contain" />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-4 w-200 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                            <div className="h-300 overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img src="/image/3.png" alt="DGCA Certificate" className="h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <JetStatsSection />
        </section>
    );
}

export default About;
