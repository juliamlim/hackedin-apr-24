import { useState } from "react";
import { ThemeProvider as SCThemeProvider } from 'styled-components';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [background, setBackground] = useState<string>('/default.avif')
	const [color, setColor] = useState<string>("rgb(130, 98, 96)");

	return <SCThemeProvider theme={{
		loading,
		setLoading,
		color,
		setColor,
		background,
		setBackground,
		dark: `hsl(from ${color} h s 10)`,
		light: `oklch(from ${color} 65% calc(c * .5) h)`,
	}}>{children}</SCThemeProvider>;
};
