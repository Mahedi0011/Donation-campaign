import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonnerApplication } from "../../Utility/localstorage";
import Donation from "../Donation/Donation";



const Donations = () => {
    const donners = useLoaderData()

     const [totalDonner,setTotalDonner] = useState([]) 
     const [dataLength,setDataLength] = useState(2)
    // console.log(donners)
    useEffect(() => {

        const storeDonnerIds = getStoredDonnerApplication();

        if (donners.length > 0) {

            const donnerApplied = donners.filter(donner => storeDonnerIds.includes(donner.id))

            // console.log(donners, storeDonnerIds, donnerApplied)
            setTotalDonner(donnerApplied)
        }
    }, [])

    return (
        <div>
          <div className="grid grid-cols-2 gap-4">
          {
               totalDonner.slice(0,dataLength).map(donation => <Donation donation={donation} key={donation.idx}></Donation>) 
            }
          </div>
            <div className={dataLength === totalDonner.length && "hidden"}>
                <button onClick={() => setDataLength(totalDonner.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default Donations;