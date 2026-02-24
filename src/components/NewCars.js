import './NewCars.css';
import { useEffect, useState } from 'react';

function NewCars(){

    const [currentIndex, setCurrentIndex] = useState(0);

    console.log("Render called");

    useEffect(() => {

        console.log("componentDidMount called");

        const images = document.querySelectorAll('.newcars-list img');

        const showImage = (index) => {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        };

        showImage(currentIndex);

        const id = setInterval(() => {

            setCurrentIndex(prev => {

                const nextIndex = (prev + 1) % images.length;

                return nextIndex;

            });

        }, 3000);

        return () => {

            clearInterval(id);

            console.log("componentWillUnmount called");

        };

    }, []);
    
    useEffect(() => {

        console.log("componentDidUpdate called");

        const images = document.querySelectorAll('.newcars-list img');

        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });

    }, [currentIndex]);

    return(
        <div className="newcars">

            <h1>New Cars</h1>

            <div className="newcars-list">
                <img src="Newcar1.jpg" alt="car1" width="350px" height="200px" />
                <img src="newcar2.jpg" alt="car2" width="350px" height="200px" />
                <img src="newcar3.jpg" alt="car3" width="350px" height="200px" />
                <img src="newcar4.jpg" alt="car4" width="350px" height="200px" />
                <img src="newcar5.jpg" alt="car5" width="350px" height="200px" />
                <img src="newcar6.jpg" alt="car6" width="350px" height="200px" />
            </div>

        </div>   
    );
}

export default NewCars;