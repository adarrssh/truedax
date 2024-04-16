import ContactForm from "../ContactForm/ContactForm";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const HomePage = () => {
  return (
    <div className="home-main">
      <TopSection/>
      <MiddleSection/>
      <ContactForm/>
    </div>
  );
};

export default HomePage;
