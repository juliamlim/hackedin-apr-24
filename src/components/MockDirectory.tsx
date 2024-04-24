import styled, { useTheme } from "styled-components";
import { Grid } from "../utils/styles";

const Layout = styled.div`
	position: absolute;
	inset: 0;
	${Grid({ rows: 4, columns: 3 })}
`;

const Box = styled.div<{
	$color?: string;
	$row?: string;
	$column?: string;
	$opacity?: number;
	$blur?: boolean;
}>`
	--container-color: ${({ $color }) => $color ?? "#000"};
	grid-row: ${({ $row }) => $row ?? "1"};
	grid-column: ${({ $column }) => $column ?? "1"};
	background-color: rgb(
		from var(--container-color) r g b / ${({ $opacity }) => $opacity ?? 60}%
	);
	${({ $blur }) => $blur && "backdrop-filter: blur(8px);"}
	border-radius: calc(var(--border-radius) * .75);
`;

const GridBox = styled(Box)<{ $rows?: number; $columns?: number }>`
	${({ $rows, $columns }) =>
		Grid({ rows: $rows ?? 2, columns: $columns ?? 2 })}
	border-radius: calc(2.5cqmin * .75);
	--border-radius: 1cqmin;
`;

const IconBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	color: white;
`;

export const MockDirectory = () => {
	const { dark, light } = useTheme();

	return (
		<Layout>
			<IconBox $color={dark} $column="1/4" $blur>
				<img height="50%" alt="" src="/mappedin.svg" />
			</IconBox>
			<GridBox
				$color={dark}
				$row="3"
				$column="1/3"
				$rows={2}
				$columns={2}
				$blur
			>
				<Box $color={light} $opacity={40} $column="1/3" />
				<Box $color={light} $opacity={40} $row="2" />
				<Box $color={light} $opacity={40} $row="2" $column="2" />
			</GridBox>
			<IconBox $color={light} $opacity={40} $row="3" $column="3" $blur>
				<img height="30%" alt="" src="/search.svg" />
			</IconBox>
			<IconBox $color={dark} $row="4" $blur>
				<img height="30%" alt="" src="/bag.svg" />
			</IconBox>
			<IconBox $color={light} $opacity={40} $row="4" $column="2" $blur>
				<img height="30%" alt="" src="/map.svg" />
			</IconBox>
			<GridBox $color={dark} $row="4" $column="3" $columns={1} $blur>
				<Box $color={light} $opacity={40} />
				<Box $color={light} $opacity={40} $row="2" />
			</GridBox>
		</Layout>
	);
};
