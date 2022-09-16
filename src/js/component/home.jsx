import React from "react";
import {Navbar} from "./Navbar.jsx";
import {Content} from "./Content.jsx"
import {Cards} from "./Cards.jsx";
import {Down} from "./Down.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
				<div className="container my-5">
					<Content/>
					<Cards/>
				</div>
			<Down/>
			
			
		</div>
	);
	};

export default Home;