
import NewCars from "./NewCars";
import OldCars from "./OldCars";
import './Cars.css';

function Cars(){
    return(
        <>
        <h1 className="main">Welcome to cars section!</h1>
        <div className="cars">
            <NewCars></NewCars>
            <OldCars></OldCars>
        </div>
        </>
    )
}

export default Cars;