import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./en-style.css";
import MySkills from "./components/skills";
import "./components/skills.css";
import PersonalInfo from "./components/PersonalInfo";
import HobbiesGallery from "./components/HobbiesGallery";
import ContactFormwithRating from "./components/ContactFormwithRating";

export default function CVonline() {
  return(
    <section>
      <Hero />
      <ContactFormwithRating />
      <HobbiesGallery />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <MySkills />
    </section>  
  );
}
