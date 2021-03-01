import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Video from "components/Video";
import LandingPage from "pages/LandingPage/LandingPage";
import ConsultorioPage from "pages/ConsultorioPage/ConsultorioPage";
import Navbar from "commons/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Switch>
					<Route path="/consultorio/:consultorioId" component={ConsultorioPage} />/:chatId
					<Route path="/" component={LandingPage} />
            	</Switch>
			</Router>
			Listo para su cita?
			{/* <Video width={700} height={400}/> */}
		</div>
	);
}

export default App;
