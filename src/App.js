import '../src/fonts/fonts.scss'
import ArtistPage from "./components/artist_page/ArtistPage";
import Menu from "./components/menu/Menu";
import LectureHall from "./components/lecture_hall/LectureHall";
import Gastronomy from './components/gastronomy/Gastronomy';
import MobileMenu from './components/mobile_menu/MobileMenu';
import MobileArtistPage from './components/mobile_artist_page/MobileArtistPage';

function App() {
	return (
	<div className="App">
		{window.innerWidth > 1023 ? (
			<>
				<Menu />
				<ArtistPage />
				<LectureHall />
				<Gastronomy />
			</>
		) : (
			<>
				<MobileMenu />
				<MobileArtistPage />
			</>
		)}
	</div>);
}

export default App;
