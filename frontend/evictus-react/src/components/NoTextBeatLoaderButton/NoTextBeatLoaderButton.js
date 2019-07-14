import React from "react";
import { Button } from "react-bootstrap";
import {BeatLoader} from "react-spinners";
import "./NoTextBeatLoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
  	{!isLoading ? text : <BeatLoader />}

  </Button>;
