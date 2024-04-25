import styled, { keyframes, useTheme } from "styled-components";
import { BoxShadow } from "../utils/styles";
import { MockDirectory } from "./MockDirectory";

const Frame = styled.div`
	--border-radius: 2.5cqmin;
	margin: 0 auto;
	width: 40cqmin;
	height: calc(40cqmin * 1.5);
	min-width: 300px;
	min-height: 450px;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: var(--border-radius);
	background-color: ${({ theme }) => theme.dark ?? "transparent"};
	${BoxShadow}
`;

const ImageWrapper = styled.img`
	flex-shrink: 1;
	min-width: 100%;
	min-height: 100%;
	object-fit: cover;
	opacity: 0.55;
`;

const LoadingOverlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgb(from var(--text) r g b / 50%);
	backdrop-filter: blur(4px);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Rotate = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const IconWrapper = styled.img`
	opacity: .8;
	transform-origin: 52% 52%;
	animation: ${Rotate} 1s steps(8, end) infinite;

`;

export const DirectoryPreview = () => {
	const { loading, background } = useTheme();


	return (
		<Frame>
			<ImageWrapper src={background} alt="" crossOrigin="anonymous" />
			<MockDirectory />
			{
				loading && (
					<LoadingOverlay>
						<IconWrapper width="20%" src="/hackedin-apr-24/loader.svg"/>
					</LoadingOverlay>
				)
			}
		</Frame>
	);
};
