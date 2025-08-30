import About from "../About/About";
import AllGallery from "../AllGallery/AllGallery";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="">
            
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Appointment></Appointment>
            
            <AllGallery></AllGallery>
        </div>
    );
};

export default Home;