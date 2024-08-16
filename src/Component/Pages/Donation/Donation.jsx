


const Donation = ({ donation }) => {
    const { Picture, Title, Price } = donation
    return (
        <div className="mt-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={Picture}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{Title}</h2>
                    <p> Donated {Price} $</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Ditails</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;