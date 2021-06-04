import "./App.css";
import Navigation from "./components/Nav";
import Pages from "./components/Pages";
import User from "./components/User";
import {useState} from 'react'


function App() {
	const [routines, setRoutines] = useState([{
		id: '',
		creatorId: '',
		isPublic: true,
		name: '',
		goal: '',
		creatorName: '',
		activities: []
	  }]);

	  const [activities, setActivities] = useState([{
		  id: '',
		  name: '',
		  description: ''
	  }])
	return (
		<div className="App">
			<header className='header' style={{backgroundColor: 'black'}}>
				<Navigation />
			</header>
			<main style={{ marginTop: "100px", display: 'flex' , justifyContent: 'center' }}>
				<Pages
				routines={routines}
				setRoutines={setRoutines}
				activities={activities}
				setActivities={setActivities} />
			</main>
      		<footer className="user-footer" style={{position: 'absolute'}}>
        			{/* <User /> */}
     		 </footer>
		</div>
	);
}

export default App;