import React from "react";

import Slider         from "Components/Slider";
import Nav            from "Components/Nav";
import SliderProducts from "Components/SliderProducts";
import NewSletter     from "Components/NewSletter";
import Footer         from "Components/Footer";

const HomePage = () => {
	return (
		<>
			<Nav />
			<Slider />
			<SliderProducts />
			<NewSletter />
			<Footer />
		</>
	);
};

export default HomePage;
