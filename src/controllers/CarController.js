import cars from "../models/CarModel";

export function getCarBySlug(slug) {

    return cars.find(

        car => car.slug === slug

    );

}