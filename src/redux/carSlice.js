import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 1,
      slug: "hyundai-creta",
      name: "Hyundai Creta",
      image: "Newcar1.jpg",
      price: "₹11,00,000",
      description:
        "The Hyundai Creta is one of India's most popular compact SUVs, offering premium interiors, advanced safety features, powerful engine options, and excellent ride comfort."
    },
    {
      id: 2,
      slug: "kia-seltos",
      name: "Kia Seltos",
      image: "newcar2.jpg",
      price: "₹10,90,000",
      description:
        "The Kia Seltos is a stylish and feature-rich SUV known for its bold design, powerful performance, and advanced safety technologies."
    },
    {
      id: 3,
      slug: "mahindra-xuv-3xo",
      name: "Mahindra XUV 3XO",
      image: "newcar3.jpg",
      price: "₹7,49,000",
      description:
        "The Mahindra XUV 3XO is a compact SUV offering sporty design, turbocharged engine performance, and excellent safety features."
    },
    {
      id: 4,
      slug: "kia-seltos-facelift",
      name: "Kia Seltos Facelift",
      image: "newcar4.jpg",
      price: "₹11,13,000",
      description:
        "The Kia Seltos Facelift comes with refreshed styling, ADAS safety features, and premium interior upgrades."
    },
    {
      id: 5,
      slug: "tata-punch-ev",
      name: "Tata Punch EV",
      image: "newcar5.jpg",
      price: "₹10,99,000",
      description:
        "The Tata Punch EV is an electric SUV designed for eco-friendly driving with modern features."
    },
    {
      id: 6,
      slug: "tata-curvv-ev",
      name: "Tata Curvv EV",
      image: "newcar6.jpg",
      price: "₹20,00,000",
      description:
        "The Tata Curvv EV is a futuristic electric SUV coupe with bold styling and long battery range."
    }
  ],

  newCars: [],

  oldCars: [
    { id: 101, slug: "old1", image: "oldcar.jpg" },
    { id: 102, slug: "old2", image: "oldcar2.jpg" },
    { id: 103, slug: "old3", image: "oldcar3.jpg" },
    { id: 104, slug: "old4", image: "oldcar4.jpg" },
    { id: 105, slug: "old5", image: "oldcar5.jpg" },
    { id: 106, slug: "old6", image: "oldcar6.jpg" }
  ]
};


initialState.newCars = initialState.cars;

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {}
});

export default carSlice.reducer;