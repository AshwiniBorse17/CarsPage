import './old-cars.css';

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

            {
                cars.map((car, index) => (
                    <img
                        key={index}
                        src={car}
                        alt={`car${index + 1}`}
                        width={350}
                        height={200}
                    />
                ))
            }

        </div>
    )
}

export default OldCars;