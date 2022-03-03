import '../src/fonts/fonts.scss'
import ArtistPage from "./components/artist_page/ArtistPage";
import Menu from "./components/menu/Menu";
import LectureHall from "./components/lecture_hall/LectureHall";
import Gastronomy from './components/gastronomy/Gastronomy';
import MobileMenu from './components/mobile_menu/MobileMenu';
import MobileArtistPage from './components/mobile_artist_page/MobileArtistPage';
import MobileGastronomy from './components/mobile_gastronomy/MobileGastronomy';
import MobileLectureHall from './components/mobile_lecture_hall/MobileLectureHall';
import MobileViewer from './components/mobile_viewer/MobileViewer';

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
				<MobileGastronomy />
				<MobileLectureHall />
				<MobileViewer />
			</>
		)}
	</div>);
}

export default App;
