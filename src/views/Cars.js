import NewCars from "./NewCars";
import OldCars from "./OldCars";
import "./cars.css";

function Cars() {

    return (
        <div className="cars-container">

            <h1 className="main-heading">
                Welcome to cars section!
            </h1>

            <div className="cars-sections">

                <NewCars />
                <OldCars />

            </div>

        </div>
    );
}

export default Cars;