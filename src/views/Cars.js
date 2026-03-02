import NewCars from "./NewCars";
import OldCars from "./OldCars";
import './cars.css';

function Cars() {

    return (

        <>

            <h1 className="main-heading">

                Welcome to cars section!

            </h1>

            <div className="cars-container">

                <NewCars />

                <OldCars />

            </div>

        </>

    )

}

export default Cars;