import './new-cars.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NewCars() {

    const newCars = useSelector((state) => state.cars.newCars);

    return (

        <div className="new-cars">

            <h1>New Cars</h1>

            <div className="new-cars-list">

                {newCars.map((car) => (

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