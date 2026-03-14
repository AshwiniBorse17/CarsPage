import { useParams, useNavigate } from "react-router-dom";
import "./car-details.css";
import { getCarBySlug } from "../controllers/CarController";

function CarDetails() {

    const { slug } = useParams();

    const navigate = useNavigate();

    const car = getCarBySlug(slug);

    if (!car) {

        return <h1>Car not found</h1>;

    }

    return (

        <div className="car-details">

            <h1>{car.name}</h1>

            <img
                src={`/${car.image}`}
                width="400"
                alt={car.name}
            />

            <h2>Price: {car.price}</h2>
            <p>{car.description}</p>
            <button onClick={() => navigate("/")}>

                Back

            </button>

        </div>

    );

}

export default CarDetails;