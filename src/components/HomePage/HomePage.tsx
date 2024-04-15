import ContactForm from "../ContactPage/ContactForm";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const HomePage = () => {
  return (
    <div className="home-main">
      <TopSection/>
      <MiddleSection/>
      <BottomSection/>
      <ContactForm/>
    </div>
  );
};

export default HomePage;
