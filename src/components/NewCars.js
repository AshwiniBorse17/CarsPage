import './new-cars.css';
import { useEffect, useState } from 'react';

function NewCars() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "Newcar1.jpg",
        "newcar2.jpg",
        "newcar3.jpg",
        "newcar4.jpg",
        "newcar5.jpg",
        "newcar6.jpg"
    ];

    console.log("Render called");

    useEffect(() => {

        console.log("componentDidMount called");

        if (!images?.length) return;

        const id = setInterval(() => {

            setCurrentIndex(prev =>
                (prev + 1) % images.length
            );

        }, 3000);

        return () => {

            clearInterval(id);
            console.log("componentWillUnmount called");

        };

    }, []);
    
    useEffect(() => {

        if (!images?.length) return;

        const id = setInterval(() => {

            setCurrentIndex(prev => {

                if (prev >= images.length - 1) {
                    return 0;
                }

                return prev + 1;

            });

        }, 3000);

        return () => clearInterval(id);

    }, [images]);

    useEffect(() => {

        console.log("componentDidUpdate called");

    }, [currentIndex]);

    return (

        <div className="new-cars">

            <h1>New Cars</h1>

            <div className="new-cars-list">

                {images.map((img, index) => (

                    <img
                        key={index}
                        src={img}
                        alt="car"
                        width={350}
                        height={200}
                        style={{
                            display: index === currentIndex ? 'block' : 'none'
                        }}
                    />

                ))}

            </div>

        </div>

    );
}

export default NewCars;