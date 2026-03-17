import './old-cars.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OldCars() {

    const oldCars = useSelector((state) => state.cars.oldCars);

    return (

        <div className="old-cars">

            <h1>Old Cars</h1>

            <div className="old-cars-list">

                {oldCars.map((car) => (

                    <Link key={car.id} to={`/car/${car.slug}`}>

                        <img
                            src={car.image}
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