import React from "react";
import { Input, InputProps } from "./Input";
import { Label } from "./Label";
import { HelperText } from "./HelperText";
import { ErrorText } from "./ErrorText";

type TextFieldProps = {
  hasError?: boolean;
  errorMessage?: string;
  helperText?: string;
  label: string;
  inputProps?: InputProps;
};

export const TextField = (props: TextFieldProps) => {
  return (
    <>
      <Label hasError={props.hasError}>{props.label}</Label>
      <Input hasError={props.hasError} {...props.inputProps} />
      {(props.errorMessage || props.helperText) && (
        <div style={{ position: "relative", height: 12, width: "100%" }}>
          <ErrorText isShowing={props.hasError}>{props.errorMessage}</ErrorText>
          <HelperText isShowing={!props.hasError}>
            {props.helperText}
          </HelperText>
        </div>
      )}
    </>
  );
};
