import './old-cars.css';
import { Link } from "react-router-dom";

function OldCars() {

    const cars = [
        "oldcar.jpg",
        "oldcar2.jpg",
        "oldcar3.jpg",
        "oldcar4.jpg",
        "oldcar5.jpg",
        "oldcar6.jpg"
    ];

    return (

        <div className="old-cars">

            <h1>Old Cars</h1>

            <div className="old-cars-list">

                {cars.map((car, index) => (

                    <Link key={index} to={`/car/${car}`}>

                        <img
                            src={car}
                            alt="car"
                            width={350}
                            height={200}
                            style={{ cursor: "pointer" }}
                        />

                    </Link>

                ))}

            </div>

        </div>

    );

}

export default OldCars;