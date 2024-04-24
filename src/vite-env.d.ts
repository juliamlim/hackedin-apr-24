/// <reference types="vite/client" />

import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		loading: boolean;
		setLoading: (loading: boolean) => void;
		color: string;
		background: string;
		dark: string;
		light: string;
		setColor: (color: string) => void;
		setBackground: (src: string) => void;
	}
}
