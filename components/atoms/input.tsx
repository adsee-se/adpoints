"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

interface Props {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  name?: string;
  maxlength?: number;
  minlength?: number;
  form?: any;
  type:
    | "text"
    | "password"
    | "number"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "reset"
    | "button"
    | "email";
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string) => void;
}

function Input(props: Props) {
  return (
    <Input2
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange?.(e.target.value)}
      name={props.name}
    >
    </Input2>
  );
}

const Input2 = styled("input")({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "311px",
  height: `46px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: "10px",
  border: `1px solid rgba(202, 209, 225, 1)`,
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  paddingLeft: "15px",
  textTransform: `none`,
  ":focus": {
    border: "2px solid #007bff",
  },
});

//デフォルト値の設定
export default Input;