import About from "../About/About";
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
        </div>
    );
};

export default Home;