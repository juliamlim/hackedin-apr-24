import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { BoxShadow } from "../utils/styles";
import { getColorFromImage } from "../utils/rgb";

const Flex = styled.div`
	width: 40cqmin;
	min-width: 300px;
	display: grid;
	padding: 0 5px;
	margin-bottom: 15px;
	grid-template-columns: auto min-content;
	box-sizing: border-box;
	${BoxShadow}
`;

const InputWrapper = styled.div`
	display: flex;
	position: relative;
`;

const Error = styled.p`
	position: absolute;
    bottom: -28px;
    margin: 0;
    font-size: .8em;
	color: var(--orange);
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	background-color: #fffe;
	color: var(--text);
	border: none;
	outline: 2px solid #fffe;

	&:focus {
		outline: 2px solid var(--orange);
	}

	&::selection {
		background: rgb(from var(--orange) r g b / 35%);
	}
`;

const Button = styled.button`
	background-color: var(--orange);
	border: none;
	outline: 2px solid var(--orange);
	padding: 0 15px;
	z-index: 2;
	cursor: pointer;
`;

export const ImageURL = () => {
	const image = useMemo(() => new Image(), []);
	const { setLoading, setBackground, setColor } = useTheme();
	const [value, setValue] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleLoad = useCallback(() => {
		try {
			getColorFromImage(image).then(({color, uri}) => {
				setColor(color);
				setBackground(uri);
				setLoading(false);
			});
		} catch (err) {
			console.error("error:", err);
			setLoading(false);
		}
	}, [ image, setLoading, setBackground, setColor ]);


	const handleError = useCallback(() => {
		setLoading(false);
		setError('Invalid URL');
	}, [ setError, setLoading ]);

	useEffect(() => {
		image.addEventListener("load", handleLoad);
		image.addEventListener("error", handleError);

		return () => {
			image.removeEventListener("load", handleLoad);
			image.removeEventListener("error", handleError);
		};
	}, [ image, handleError, handleLoad ]);

	function handleSubmit() {
		if (value) {
			setLoading(true);
			image.crossOrigin = "anonymous";
			image.alt = "";
			image.src = "https://api.allorigins.win/raw?url=" + value;
		}
	}

	return (
		<Flex>
			<InputWrapper>
				<Input
					value={value}
					onChange={({ target }) => {
						setError('');
						setValue(target.value);
					}}
					placeholder="https://www.example-img..."
				/>
				<Error>{error}</Error>
			</InputWrapper>
			<Button onClick={handleSubmit}>Enter</Button>
		</Flex>
	);
};
