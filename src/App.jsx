import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//About Us
import Overview from "./Pages/about/Overview";
import Contact from "./Pages/Contact";
import CharterBenefits from "./Pages/CharterBenefits";
import JetStatsSection from "./Pages/JetStatsSection";
import TestimonialsSection from "./Pages/Testimonials";
import AboutClient from "./Our Client/AboutClient";
import Products from "./Products/OurProduct";
import TeamSection from "./Our Team/Team";
import AnimatedBanner from "./Binner/Binner";
import CharterFeature from "./Pages/CharacterFeature";
import PopularDestinations from "./Pages/PopularDestinations";
import About from "./Pages/Certificate";
import ContactUs from "./Pages/Contact";
import MissionAndOverview from "./Pages/MissionAndOverview";
import Certificate from "./Pages/Certificate";
import OurPatner from "./Our Client/OutPatner";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnimatedBanner />} />
            <Route path="/home" element={<AnimatedBanner />} />
            <Route path="/about-us/overview" element={<Overview />} />
            <Route path="/products/all" element={<Products />} />
            <Route path="/Charter" element={<CharterBenefits />} />
            <Route path="/Testimonials" element={<TestimonialsSection />} />
            <Route path="/about-us/ourteam" element={<TeamSection />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us/mission-vision" element={<MissionAndOverview />} />
            <Route path="/about-us/certifications" element={<Certificate />} />
            <Route path="/clients-partners/clients" element={<AboutClient />} />
            <Route path="/clients-partners/partners" element={<OurPatner />} />
          </Routes>
        </main>
        {/* <CharterFeature />
        <PopularDestinations/>
        <JetStatsSection/>
        <AboutClient /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
