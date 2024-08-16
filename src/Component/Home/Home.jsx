import Banner from "../Banner/Banner";
import DonationsCards from "../DonationCards/DonationsCards";
import Header from "../Header/Header";



const Home = () => {
    return (
        <div className="mt-6">
            <Banner></Banner>
            <DonationsCards></DonationsCards>
        </div>
    );
};

export default Home;