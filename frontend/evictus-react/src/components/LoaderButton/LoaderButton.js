import React from "react";
import { Button } from "react-bootstrap";
import {BeatLoader} from "react-spinners";
import "./LoaderButton.css";

export default ({
	isLoading,
	text,
	loadingText,
	className = "",
	disabled = false,
	...props
}) => (
	isLoading
	? <Button
		className={`LoaderButton ${className}`}
		{...props}
	>
		{text}
	</Button>
	: <Button
		className={`LoaderButton ${className}`}
		variant="primary"
		disabled={true}
		{...props}
	>
			<BeatLoader
				className={`LoaderButton ${className}`}
				width={30}
			/>
			{loadingText}
	</Button>
)
