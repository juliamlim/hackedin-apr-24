const convertRGBObjToString = (rgb: {
	r: number;
	g: number;
	b: number;
}): string => {
	return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

export const getColorFromImage = (image: HTMLImageElement): Promise<{ color: string; uri: string; }> => new Promise((resolve, reject) => {
	let count = 0;
	const rgb = { r: 0, g: 0, b: 0 };
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	canvas.width = image.width;
	canvas.height = image.height;

	try {
		if (!context) throw new Error('context is invalid');

		context.drawImage(image, 0, 0);

		const data = context.getImageData(0, 0, canvas.width, canvas.height);
		const length = data.data.length;

		for (let i = 0; i < length; i += 20) {
			count++;
			rgb.r += data.data[i];
			rgb.g += data.data[i + 1];
			rgb.b += data.data[i + 2];
		}

		// ~~ used to floor values
		rgb.r = ~~(rgb.r / count);
		rgb.g = ~~(rgb.g / count);
		rgb.b = ~~(rgb.b / count);

		const color = convertRGBObjToString(rgb);
		const uri = canvas.toDataURL("image/png");

		resolve({ color, uri });
	} catch (e) {
		reject(e);
	}
});
