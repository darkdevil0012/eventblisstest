import Aboutus from "../../components/Aboutus";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Video from "../../components/VideoSection";
import "./home.css";
// import About from "../About";
// import Protfolio from "../Protfolio";
// import Service from "../Service";
// import Resume from "../Resume";
// import Contact from "../Contact";

export const Home = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div id="home">
        <Video />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="aboutus">
        <Aboutus />
      </div>
      <div id="aboutus">
        <Footer />
      </div>

      {/* <div id="about">
				<div data-aos="fade-up">
					<About />
				</div>
			</div>

			<div id="portfolio">
				<div data-aos="fade-up">
					<Protfolio />
				</div>
			</div>

			<div id="service">
				<div data-aos="fade-up">
					<Service />
				</div>
			</div>

			<div id="resume">
				<div data-aos="fade-up">
					<Resume />
				</div>
			</div>

			<div id="contact">
				<div data-aos="fade-up">
					<Contact />
				</div>
			</div> */}
    </div>
  );
};
export default Home;
