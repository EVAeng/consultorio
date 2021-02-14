import React from 'react';
import './App.css';
import Video from "./components/Video";

function App() {
	return (
		<div className="App">
			Listo para su cita?
			<Video width={700} height={400}/>
		</div>
	);
}

export default App;
