import cars from "../models/CarModel";
import './new-cars.css';
import { Link } from "react-router-dom";

function NewCars() {

    return (

        <div className="new-cars">

            <h1>New Cars</h1>

            <div className="new-cars-list">

                {cars.map((car) => (

                    <Link
                        key={car.id}
                        to={`/car/${car.slug}`}
                    >

                        <img

                            src={car.image}

                            alt={car.name}

                            width={350}

                            height={200}

                        />

                    </Link>

                ))}

            </div>

        </div>

    );

}

export default NewCars;