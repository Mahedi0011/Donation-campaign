import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

 

const DonationsCards = () => {

        const [donations,setDonations] = useState([]);
        
        useEffect(()=>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setDonations(data))
        },[])



    return (
        <div className="grid sm:grid-cols-1 p-4 md:grid-cols-4 gap-4">
            {
                donations.map( donation => <DonationCard donation={donation} key={donation.id}></DonationCard>)
            }
        </div>
    );
};

export default DonationsCards;