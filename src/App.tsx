import styled from "styled-components";
import { ColorPreview } from "./components/ColorPreview";
import { DirectoryPreview } from "./components/DirectoryPreview";
import { ImageURL } from "./components/ImageURL";

const MainContent = styled.div`
	--gap: 20px;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: var(--gap);
`;

const Title = styled.h1`
	position: fixed;
	top: 0;
	left: 0;
	font-size: 1.5em;
	margin: 5px 15px;
`;

const LogoWrapper = styled.img`
	position: fixed;
	bottom: 0;
	left: 0;
`;

const App = () => (
	<>
		<Title>Bespoke Theme Preview</Title>
		<MainContent>
			<ImageURL/>
			<DirectoryPreview />
			<ColorPreview />
		</MainContent>
		<LogoWrapper src="/hackedin-apr-24/logo.png" />
	</>
);

export default App;
