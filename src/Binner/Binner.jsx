import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom"; // Import the hook correctly

const banners = [
    {
        src: "/image/sliding1.jpg",
        alt: "Jet 1",
        title: "Luxury Jet 1",
        description: "Experience premium comfort and speed."
    },
    {
        src: "/image/sliding2.jpg",
        alt: "Jet 2",
        title: "Executive Jet 2",
        description: "Fly with unmatched elegance and performance."
    },
    {
        src: "/image/about-us.jpg",
        alt: "About Us",
        title: "About RSR Aviation",
        description: "Your trusted partner in air charter services."
    },
    {
        src: "/image/charter.jpg",
        alt: "Charter",
        title: "Charter Services",
        description: "Personalized travel solutions across the globe."
    },
];

function AnimatedBanner() {
    const navigate = useNavigate();  

    const handleClick = () => {
        navigate('/contact'); 
    };

    return (
        <section className="w-full h-[80vh] overflow-hidden relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                speed={1200}
                loop
                className="w-full h-full"
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full relative">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 text-center px-4">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
                            <p className="text-lg md:text-xl mb-6">{item.description}</p>
                            <button
                                onClick={handleClick}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default AnimatedBanner;
