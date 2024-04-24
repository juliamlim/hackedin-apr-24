import styled, { useTheme } from 'styled-components';
import { BoxShadow } from '../utils/styles';

const ThemeWrapper = styled.div`
	display: flex;
	gap: var(--gap);
`;

const ThemeCircle = styled.div<{ $color: string }>`
	--circle-size: 5cqmin;
	width: var(--circle-size);
	height: var(--circle-size);
	min-width: 50px;
	min-height: 50px;
	background-color: ${({ $color }) => $color ?? "transparent"};
	border-radius: 50%;
	${BoxShadow}
`;

export const ColorPreview = () => {
	const { color, dark, light } = useTheme();

	return (
		<ThemeWrapper>
			<ThemeCircle $color={color} />
			<ThemeCircle $color={dark} />
			<ThemeCircle $color={light} />
		</ThemeWrapper>
	);
};
