import '../src/fonts/fonts.scss'
import ArtistPage from "./components/artist_page/ArtistPage";
import Menu from "./components/menu/Menu";
import LectureHall from "./components/lecture_hall/LectureHall";
import Gastronomy from './components/gastronomy/Gastronomy';

function App() {
	return (
	<div className="App">
		<Menu />
		<ArtistPage />
		<LectureHall />
		<Gastronomy />
	</div>);
}

export default App;
