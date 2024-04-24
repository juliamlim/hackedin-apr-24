import { css, RuleSet } from "styled-components";

export const Grid = ({
	rows,
	columns,
}: {
	rows: number;
	columns: number;
}): RuleSet => css`
	--grid-gap: 1.5cqh;
	display: grid;
	grid-template-rows: repeat(${rows}, 1fr);
	grid-template-columns: repeat(${columns}, 1fr);
	gap: var(--grid-gap);
	padding: var(--grid-gap);
	box-sizing: border-box;
`;

export const BoxShadow = css`
	box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px,
		rgba(0, 0, 0, 0.35) 0px 6px 6px;
`;
