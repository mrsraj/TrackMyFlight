import React from "react";

function Certificate() {
    return (
        <section className="bg-[#efe2c9] py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                        Our Certifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                        {/* Certificate Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 w-[420px] hover:shadow-2xl transition duration-300 hover:scale-110">
                            <div className="overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/image/1.png"
                                    alt="ISO 9001 Certificate"
                                    className="h-full object-contain transform transition-transform duration-300 "
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-4 w-[420px] hover:shadow-2xl transition duration-300 hover:scale-110">
                            <div className="overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/image/2.png"
                                    alt="ISO 9001 Certificate"
                                    className="h-full object-contain transform transition-transform duration-300 "
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-4 w-[420px] hover:shadow-2xl transition duration-300 hover:scale-110">
                            <div className="overflow-hidden rounded-xl mb-4 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/image/3.png"
                                    alt="DGCA Certificate"
                                    className="h-full object-contain transform transition-transform duration-300 "
                                />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificate;
