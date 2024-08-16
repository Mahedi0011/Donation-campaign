import { Link } from "react-router-dom";



const DonationCard = ({ donation }) => {
    // console.log(donation)
    const { Picture, Button_text, Button_bg_Color, Card_bg_Color, id, Title } = donation;
    return (
        <div >
            <Link to={`/donner/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl" style={{ backgroundColor: Card_bg_Color }}>
                    <figure>
                        <img className=" w-full"
                            src={Picture}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-2 p-1">
                        <button className="m-1 p-1 rounded-lg" style={{ backgroundColor: Button_bg_Color }} >{Button_text}</button>
                        <p className="m-1 p-1 font-bold" style={{color:Button_bg_Color}}>{Title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;