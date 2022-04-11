import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="stick"></div>
			<div className="traffic-light">
				<div className="redlight">4</div>
				<div className="yellowlight">5</div>
				<div className="greenlight">g</div>
			</div>
		</div>
	);
};

export default Home;
