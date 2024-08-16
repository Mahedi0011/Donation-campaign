import { useLoaderData, useParams } from "react-router-dom";
// import Donated from "../Donated/Donated";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDonnerApplication } from "../../Utility/localstorage";




const Donner = () => {

    const donners = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    // console.log(id);

    const handleDonner = () => {
        saveDonnerApplication(idInt)
        toast('you have applied successfully')
     }

    const donated = donners.find(donner => donner.id == id);
    // console.log(donated);

    
    return (
        <div className="mt-6 relative">
            <div className="card card-compact bg-base-100 w-full shadow-xl">
                <figure>
                    <img className="w-full h-1/2 "
                        src={donated.img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{donated.Title}</h2>
                    <p>{donated.Description}</p>
                </div>
            </div>
       
           <div className="justify-start absolute bottom-32 ml-4 z-10 ">
                <button onClick={handleDonner} className="p-5 rounded-xl font-bold text-white" 
                style={{ backgroundColor: donated.Button_bg_Color }}>Donate {donated.Price} $</button>            
           </div>
           <div className="p-12 bg-black opacity-30 w-full absolute bottom-28">

           </div>
           <ToastContainer />
        </div>
    );
};

export default Donner;